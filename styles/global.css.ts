import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  html {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    color: ${(props : any) => props.theme.colors.textColor};
  }   

  ul {
    padding: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: -0.02rem;
    @media screen and (min-width: ${(props : any) => props.theme.breakpoints[1]}) {
      line-height: 6.29rem;
      font-size: 6.2rem;
    }
    @media screen and (min-width: ${(props : any) => props.theme.breakpoints[3]}) {
      line-height: 9.99rem;
      font-size: 9.9rem;
    }
  }
  
  h3 {
    font-size: 3.3rem;
    line-height: 3.36rem;
    letter-spacing: -0.02rem;
    @media screen and (min-width: ${(props : any) => props.theme.breakpoints[2]}) {
      line-height: 5.2rem;
      font-size: 5.2rem;
    }
    @media screen and (min-width: ${(props : any) => props.theme.breakpoints[4]}) {
      line-height: 6.969rem;
      font-size: 6.9rem;
    }
  }

  p {
    font-family: 'IBM Plex Mono';
    font-size: 1.4rem;
    line-height: 2.2rem;
    @media screen and (min-width: ${(props : any) => props.theme.breakpoints[2]}) {
      line-height: 2.85rem;
      font-size: 1.9rem;
    }
  }
  button {
    font-family: 'IBM Plex Mono'
  }

  #nprogress .bar {
    background: ${(props : any) => props.theme.colors.orange6}
  }

  #nprogress .peg {
    box-shadow: 
      0 0 10px ${(props : any) => props.theme.colors.orange6}, 
      0 0 5px ${(props : any) => props.theme.colors.orange6};
  }

  #nprogress .spinner-icon { 
    border-top-color: ${(props : any) => props.theme.colors.orange6};
    border-left-color: ${(props : any) => props.theme.colors.orange6};
  }
`;

export default GlobalStyle;
