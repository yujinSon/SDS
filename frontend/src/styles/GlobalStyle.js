import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default GlobalStyle;
