import styled from 'styled-components';
import { css } from 'styled-components';
export const Container = styled.footer`
   ${({ theme }) => css`
   text-align: center;
   a {
    color: inherit;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
   }
   `}
`;
