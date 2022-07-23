import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --width: 100vw;
        --width-mobile: 100vw;
        --width-tablet: 768px;
        --width-desktop: 1600px;
        --width-desktop-large: 1920px;

        --color-background: rgb(255, 255, 255);
        --color-primary: rgb(230, 95, 67);
        --color-black: rgb(0, 0, 0);
        --color-gray: rgb(109, 107, 107);
        --color-gray-light: rgb(133, 133, 133);

        --color-primary-transparent: rgba(230, 95, 67, 0.7);
        --color-black-transparent: rgba(0, 0, 0, 0.57);


        --color-text: var(--color-black);
        --color-text-secondary: var(--color-background);
        --color-text-gray: var(--color-gray);

        --font-family-primary: 'Roboto', sans-serif;
        
        --font-size-title: 5.5rem;
        --font-size-title-secondary: 2.75rem;
        --font-size-primary: 1.25rem;
        --font-size-small: 1.25rem;

        --font-size-title-min: min(5.5rem, 5.5vw);
        --font-size-title-secondary-min: min(2.75rem, 2.75vw);
        --font-size-primary-min: min(1.25rem, 1.25vw);
        --font-size-small-min: min(1.25rem, 1.25vw);

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: auto;

        list-style: none;
        text-decoration: none;

    }
    *::-webkit-scrollbar {
        width: 0;

    }

    

    *::after,*::before {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        font-family: var(--font-family-primary);
    }
    
    #root {
        position: relative;
    }

    li {
        list-style: none;
    }


    a, a:link, a:visited {
        text-decoration: none;
        color: "#000000";
    }

    h1 {
        font-size: var(--font-size-primary);
        font-weight: 900;
    }

`