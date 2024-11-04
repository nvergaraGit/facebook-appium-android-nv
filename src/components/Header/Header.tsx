import React from 'react';
import { ProducstTitle, ProductHeader, ProductsStatusBar } from './styles';
interface Props {
  title: string;
  backgroundColor?: string;
  hasFooter?: boolean;
  footer?: JSX.Element;
}
const Header = ({ backgroundColor, title, hasFooter, footer }: Props) => {
  return (
    <>
      <ProductsStatusBar backgroundColor={backgroundColor} />
      <ProductHeader>
        <ProducstTitle>{title}</ProducstTitle>
        {hasFooter && footer}
      </ProductHeader>
    </>
  );
};

export default Header;
