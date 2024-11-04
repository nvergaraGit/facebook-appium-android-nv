/* eslint-disable @typescript-eslint/unbound-method */
import React, {
  ComponentType,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { GRAPHQL_BACKEND_URL } from '@env';
import { isTokenJWTMsalValid } from '@utils/Auth';
import { TTokens } from 'types/auth';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ERROR_CODE } from '@libraries/constants';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import Error from '@components/ModalApp/ModaApp';
import IconSadFace from '@assets/icons/icon-sad.svg';
import { RetryLink } from '@apollo/client/link/retry';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MMKVLoader } from 'react-native-mmkv-storage';
type AuthStackParamList = {
  Auth: undefined;
};

const errorNotFinded = {
  title: 'Error',
  description: 'Accion no completada comunicarse a ',
  textButton: 'Cerrar',
  footerText: 'operacionesti@embonor.cl',
};

function WithApollo<P>(
  Component: ComponentType<P>,
): (props: PropsWithChildren<P>) => ReactElement | null {
  const WithApolloComponent = (props: PropsWithChildren<P>) => {
    const defaultErrorInfo = {
      title: 'Servicio no Disponible',
      description:
        'Estamos trabajando duro para arreglar el problema. Si necesitas nuestra ayuda y desea hablar con un agente escribenos a',
      textButton: 'Cerrar',
      footerText: 'operacionesti@embonor.cl',
    };

    const storage = new MMKVLoader().initialize();
    const [errorServer, setErrorServer] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [errorInfo, setErrorInfo] = useState(defaultErrorInfo);
    const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
    const ErrorsHandler = useMemo(
      () => ({
        [ERROR_CODE.GRAPHQL_PARSE_FAILED]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.GRAPHQL_VALIDATION_FAILED]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.BAD_USER_INPUT]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.PERSISTED_QUERY_NOT_FOUND]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.PERSISTED_QUERY_NOT_SUPPORTED]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.OPERATION_RESOLUTION_FAILURE]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.BAD_REQUEST]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.INTERNAL_SERVER_ERROR]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
          setModalError(true);
          setErrorServer(true);
        },
        [ERROR_CODE.UNAUTHENTICATED]: (errorCode: ERROR_CODE) => {
          interceptorPrintLog(errorCode);
        },
        [ERROR_CODE.DEFAULT]: () => {
          /**It's printed in console warm error code to see in the app error that  not has been handled */
          interceptorPrintLog('CODIGO NO MAJENADO');
          setErrorInfo(errorNotFinded);
          setModalError(true);
          setErrorServer(true);
        },
      }),
      [],
    );

    const tokenDefine = useCallback(async () => {
      try {
        const data = storage.getString('tokenStorage');
        if (data === null || data === undefined) {
          return;
        }
        const tokens = JSON.parse(data) as TTokens;
        const newToken: TTokens = (await isTokenJWTMsalValid(tokens)) as TTokens;
        storage.setString('tokenStorage', JSON.stringify(newToken));
        return newToken;
      } catch (error) {
        storage.clearStore();
        navigation.navigate('Auth');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const client = useMemo(() => {
      const retryLink = new RetryLink({
        delay: {
          initial: 300,
          max: 2,
          jitter: true,
        },
        attempts: {
          max: 3,
          retryIf: (error, _operation) => {
            console.log('WithApolo.ts _operation', _operation);
            return !!error;
          },
        },
      });

      const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (modalError) {
          return;
        }
        setModalError(false);
        if (graphQLErrors) {
          graphQLErrors.forEach(({ extensions }) => {
            /**
             * when graphQLErrors also you can access to {message, locations, path}
             * in the object destruction definition
             */
            // console.log('CODE ERROR SERVER************', extensions.code);
            const code: ERROR_CODE = extensions.code as ERROR_CODE;
            const errorCode = Object.prototype.hasOwnProperty.call(ERROR_CODE, code)
              ? code
              : ERROR_CODE.DEFAULT;
            ErrorsHandler[`${errorCode}`](errorCode);
          });
        }
        if (networkError) {
          if (networkError.message.includes('504')) {
            setErrorServer(true);
          }
        }
      });

      const httpLink = createHttpLink({
        uri: GRAPHQL_BACKEND_URL,
      });

      const authLinkInterceptorRequest = new ApolloLink((operation, forward) => {
        /**here you can see query request and others features of the request
         *
         */

        // console.log('*************QueryServiceName', operation.operationName);
        // console.log('*************Current variables Request', operation.variables);

        return forward(operation);
      });

      const authLinkContext = setContext(async (_, { headers }) => {
        const setToken = await tokenDefine();
        console.log(
          'headers',
          JSON.stringify(
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              headers: {
                ...headers,
                authorization: setToken?.token ? `Bearer ${setToken.token}` : '',
              },
            },
            null,
            2,
          ),
        );
        return {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          headers: {
            ...headers,
            authorization: setToken?.token ? `Bearer ${setToken.token}` : '',
          },
        };
      });

      return new ApolloClient({
        link: from([authLinkContext, retryLink, authLinkInterceptorRequest, errorLink, httpLink]),
        cache: new InMemoryCache(),
        // defaultOptions: {
        //   watchQuery: {
        //       fetchPolicy: 'no-cache',
        //       errorPolicy: 'ignore',
        //   },
        //   query: {
        //       fetchPolicy: 'no-cache',
        //       errorPolicy: 'all',
        //   },
        // }
      });
    }, [tokenDefine]);

    return (
      <>
        <ApolloProvider client={client}>
          <Component {...props} />
          <BottomSheetModal isVisible={errorServer} setIsVisible={() => setErrorServer(false)}>
            <Error
              icon={<IconSadFace />}
              title={errorInfo?.title}
              description={errorInfo?.description}
              textButton={errorInfo?.textButton}
              footerText={errorInfo?.footerText}
              onPress={() => setErrorServer(false)}
            />
          </BottomSheetModal>
        </ApolloProvider>
      </>
    );
  };

  return WithApolloComponent;
}

function interceptorPrintLog(errorCode: string): void {
  console.log('INTERCEPTOR CODE', errorCode);
}

export default WithApollo;
