import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`


  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto Slab', sans-serif;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
