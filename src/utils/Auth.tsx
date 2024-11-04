import { decode } from 'base-64';
import { GRAPHQL_BACKEND_URL } from '@env';
import { TAuth } from 'types/auth';
import jwtDecode from 'jwt-decode';

interface responseToken {
  data: {
    refreshToken: {
      token: string;
    };
  };
}
interface TFetchData {
  data: {
    rotateToken: {
      refreshToken: string;
    };
  };
}

interface tokenProps {
  token: string;
  refreshToken: string;
}
type TDecodedToken = {
  exp: number;
};

export const isTokenJWTMsalValid = async (
  token: tokenProps,
): Promise<
  string | boolean | void | { token: string; refreshToken: string } | tokenProps | null
> => {
  const currentDate = new Date().getTime() / 1000;
  if (currentDate !== undefined) {
    const response: TDecodedToken = jwtDecode(token.token);
    const { exp } = response;
    const currentDateNumber = currentDate;
    if (exp < currentDateNumber) {
      const query = `query RotateToken {
        rotateToken {
          refreshToken
        }
      }`;
      const operationName = 'RotateToken';
      const headers = {
        Authorization: `Bearer ${token.refreshToken}`,
        'Content-Type': 'application/json',
      };

      try {
        const refreshTokenResponse = await fetch(GRAPHQL_BACKEND_URL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ query, operationName }),
        });
        const data: TFetchData = (await refreshTokenResponse.json()) as TFetchData;
        const refreshTokenValue = data?.data?.rotateToken?.refreshToken;
        if (!refreshTokenValue) {
          return null;
        }

        const queryToken = `query RefreshToken {
          refreshToken {
            token
          }
        }`;
        const refreshTokenOperationName = 'RefreshToken';
        const headersAuth = {
          Authorization: `Bearer ${refreshTokenValue}`,
          'Content-Type': 'application/json',
        };

        try {
          const response = await fetch(GRAPHQL_BACKEND_URL, {
            method: 'POST',
            headers: headersAuth,
            body: JSON.stringify({ query: queryToken, operationName: refreshTokenOperationName }),
          });

          const dataToken: responseToken = (await response.json()) as responseToken;
          return {
            token: dataToken.data.refreshToken.token,
            refreshToken: refreshTokenValue,
          };
        } catch (error) {
          return null;
        }
      } catch (error) {
        return null;
      }
    }
  }
  return token;
};

export const getDataUser = (
  token: string | null,
  setAuth: (auth?: TAuth | undefined) => void,
): boolean => {
  if (token === '' || !token) {
    return false;
  }
  const splitedToken = token.split('.');
  if (splitedToken.length <= 1) {
    return false;
  }
  const response: TAuth = JSON.parse(decode(splitedToken[1])) as TAuth;
  const { id, username, roles, ACL, name, needPasswordUpdate } = response;

  setAuth({ id, username, roles, ACL, name, needPasswordUpdate });
  return true;
};
