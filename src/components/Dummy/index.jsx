import * as Styled from './styles'
import P from 'prop-types'

export const  = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

.propTypes = {
  children: P.node.isRequired
};

