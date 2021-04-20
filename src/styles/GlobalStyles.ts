import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html{
    }

    body, input, button {
        font: 600 14px Nunito, sans-serif;
    }

   :root{
       --dark-background-color: #312e2b;
       --dark-text-color: hsla(0,0%,100%,.65);
       --dark-text-color-hover: #fff;
       --dark-text-color-title: #fff;
       --dark-background-color-aside: #292725;
       --dark-background-color-aside-hover: #252220;
       --dark-background-color-sidebar:#272321;
   }
`;