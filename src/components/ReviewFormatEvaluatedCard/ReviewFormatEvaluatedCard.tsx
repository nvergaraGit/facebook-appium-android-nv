import React from 'react';
import {
  Title,
  TextBody,
  Container,
  ContainerInfo,
  ContainerIcon,
  ContainerBody,
  ContainerHeader,
  ContainerStates,
  ContainerCategory,
  ContainerStatesText,
} from './Styles';
import { View } from 'react-native';
import CheckIcon from '@assets/icons/ok.svg';
import CloseIcon from '@assets/icons/close.svg';
import ArrowIcon from '@assets/icons/arrow-right.svg';
import EditIcon from '@assets/icons/edit-tracking.svg';
import { Catalogs, Exhibitions } from 'types/visitTrackin';
import EditGreenIcon from '@assets/icons/edit-tracking-green.svg';

interface Props {
  state: number;
  info?: Catalogs;
  exhibitions?: Exhibitions;
  detailsProducts?: (item: Catalogs) => void;
  update: (item: Catalogs | Exhibitions) => void;
}
const ReviewFormatEvaluatedCard = ({
  exhibitions,
  state,
  info,
  detailsProducts,
  update,
}: Props) => {
  return (
    <Container>
      <ContainerCategory></ContainerCategory>
      {info ? (
        <>
          <ContainerBody>
            <ContainerHeader>
              <ContainerInfo>
                <Title>{info.formato}</Title>
                <TextBody>
                  {info.mecanica} | Patrón: {info.patron.toLowerCase()}
                </TextBody>
              </ContainerInfo>
              <ContainerIcon onPress={() => detailsProducts && detailsProducts(info)}>
                <ArrowIcon />
              </ContainerIcon>
            </ContainerHeader>
            {info.status === 'CON COMENTARIO' ? (
              <ContainerStates state={state === 1}>
                <ContainerStatesText state={state === 1}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CloseIcon />
                    <ContainerStatesText state={state === 1}> Comentarios </ContainerStatesText>
                  </View>
                </ContainerStatesText>
                <ContainerStatesText state={state === 1} onPress={() => update(info)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <EditIcon />
                    <ContainerStatesText state={state === 1}> Modificar </ContainerStatesText>
                  </View>
                </ContainerStatesText>
              </ContainerStates>
            ) : (
              <ContainerStates state={false}>
                <ContainerStatesText state={false}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckIcon />
                    <ContainerStatesText state={false}>Aprobado</ContainerStatesText>
                  </View>
                </ContainerStatesText>
                <ContainerStatesText state={false} onPress={() => update(info)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <EditGreenIcon />
                    <ContainerStatesText state={false}> Modificar </ContainerStatesText>
                  </View>
                </ContainerStatesText>
              </ContainerStates>
            )}
          </ContainerBody>
        </>
      ) : (
        <>
          {exhibitions && (
            <ContainerBody>
              <ContainerHeader>
                <ContainerInfo>
                  <Title>{exhibitions.descripcion}</Title>
                  <TextBody>{exhibitions.tipo}</TextBody>
                </ContainerInfo>
              </ContainerHeader>
              {exhibitions.status === 'CON COMENTARIO' ? (
                <ContainerStates state={exhibitions.status === 'CON COMENTARIO'}>
                  <ContainerStatesText state={exhibitions.status === 'CON COMENTARIO'}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <CloseIcon />
                      <ContainerStatesText state={exhibitions.status === 'CON COMENTARIO'}>
                        {' '}
                        Comentarios{' '}
                      </ContainerStatesText>
                    </View>
                  </ContainerStatesText>
                  <ContainerStatesText state={state === 1} onPress={() => update(exhibitions)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <EditIcon />
                      <ContainerStatesText state={true}> Modificar </ContainerStatesText>
                    </View>
                  </ContainerStatesText>
                </ContainerStates>
              ) : (
                <ContainerStates state={false}>
                  <ContainerStatesText state={false} onPress={() => update(exhibitions)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <CheckIcon />
                      <ContainerStatesText state={false}>Aprobado</ContainerStatesText>
                    </View>
                  </ContainerStatesText>
                  <ContainerStatesText state={false} onPress={() => update(exhibitions)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <EditGreenIcon />
                      <ContainerStatesText state={false}> Modificar </ContainerStatesText>
                    </View>
                  </ContainerStatesText>
                </ContainerStates>
              )}
            </ContainerBody>
          )}
        </>
      )}
    </Container>
  );
};

export default ReviewFormatEvaluatedCard;
