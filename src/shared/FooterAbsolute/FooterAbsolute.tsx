import React from 'react';
import { Container, ContainerAbsolute } from './Styles';
import FooterList from '@shared/FooterListLoader';

interface Props {
  loader: boolean;
}
const FooterAbsolute = ({ loader }: Props) => {
  return (
    <Container>
      <ContainerAbsolute>
        <FooterList loader={loader} />
      </ContainerAbsolute>
    </Container>
  );
};

export default FooterAbsolute;
