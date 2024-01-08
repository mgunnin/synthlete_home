import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Aquire:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Suisse+Intl:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Loos+Wide:wght@500;700&display=swap');
@font-face {
        font-family: "Aquire";
        src: url("/public/fonts/Aquire-Bold.otf");
        font-weight: 700;
      }
      @font-face {
        font-family: "Montserrat";
        src: url("/public/fonts/Montserrat-Bold.ttf");
        font-weight: 700;
      }
      @font-face {
        font-family: "LoosWide";
        src: url("/public/fonts/LoosWide-Bold.otf");
        font-weight: 700;
      }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    html, body, #__next {
      height: 100%;
    }
    body {
      margin: 0; line-height: normal;
    }
`;
