import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { Catalogs, Exhibitions } from 'types/visitTrackin';
import {
  Container,
  ContainerIcon,
  TextTitle,
  TextSubtitle,
  Label,
  ContainerOptions,
} from './styles';
import EditVisitIcon from '@assets/icons/edit-tracking-visit.svg';
import ButtonSession from '@components/ButtonSession/ButtonSession';
interface Props {
  format: string;
  onPress: () => void;
  review: Catalogs | Exhibitions;
  edit: (state: string, id: number) => void;
}
function EditModalVisit({ format, onPress, review, edit }: Props) {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [, setSelectedLabel] = useState<string>('');
  const optionsEdit = [
    {
      label: 'Modificar comentario',
      value: 1,
    },
    {
      label: 'Aprobar el formato',
      value: 2,
    },
  ];

  const onValueChange = (value: number, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    switch (value) {
      case 1:
        edit('COMENTARIOS', review.trackingReviewId);
        onPress();
        break;

      default:
        edit('APROBADO', review.trackingReviewId);
        onPress();
        break;
    }
  };

  return (
    <Container>
      <ContainerIcon>
        <EditVisitIcon />
        <TextTitle>¿Que deseas modificar?</TextTitle>
        <TextSubtitle>Elegiste el formato {format}</TextSubtitle>
      </ContainerIcon>
      {optionsEdit.map((option) => (
        <>
          {(review.status !== 'APROBADO' || option.value === 1) && (
            <RadioButton.Group
              onValueChange={(newValue) => onValueChange(parseInt(newValue), option.label)}
              value={selectedValue.toString()}
              key={option.value}
            >
              <TouchableOpacity onPress={() => onValueChange(option.value, option.label)}>
                <ContainerOptions>
                  {/* <RadioButton value={option.value.toString()} color="#F40009" /> */}
                  <Label>{option.label}</Label>
                </ContainerOptions>
              </TouchableOpacity>
            </RadioButton.Group>
          )}
        </>
      ))}
      <ButtonSession title="Cancelar" onPress={onPress} isShowMsg isIcon={true} />
    </Container>
  );
}

export default EditModalVisit;
