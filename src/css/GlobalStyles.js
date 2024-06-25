import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }

    * { 
        box-sizing: border-box;
        font-family: "Michroma", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 10px; */
        vertical-align: baseline;
    }
    body {
        line-height: 1;
        /* font-family: 'Noto Sans KR', sans-serif; */

        font-family: "Michroma", sans-serif;
        font-weight: 400;
        font-style: normal;

        background-color: #171717;
        margin: 50px 100px;
        margin-bottom: 100px;

        .gothic-a1-regular {
            font-family: "Gothic A1", sans-serif;
            font-weight: 400;
            font-style: normal;
        }


    }
    ol, ul {
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }


    main {
        display: flex;
        margin-left: 400px;
    }

`;

export default GlobalStyles;



