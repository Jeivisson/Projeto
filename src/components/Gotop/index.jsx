import * as Styled from './styles';
import P from 'prop-types';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const Gotop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
