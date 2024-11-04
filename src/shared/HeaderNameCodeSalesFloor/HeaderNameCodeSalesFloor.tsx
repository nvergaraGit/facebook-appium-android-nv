import React from 'react';
import { Container, TextCode, TextName } from './Styles';
interface Props {
  code: string;
  name: string;
}
const HeaderNameCodeSalesFloor = ({ code, name }: Props) => {
  return (
    <>
      <Container>
        <TextCode textImportant>Código: </TextCode>
        <TextCode>{code}</TextCode>
      </Container>
      <TextName>{name}</TextName>
    </>
  );
};

export default HeaderNameCodeSalesFloor;
