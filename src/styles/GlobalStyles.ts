import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html{
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
    }

   :root{
       --dark-background-color: #312e2b;
       --dark-text-color: hsla(0,0%,100%,.65);
       --dark-text-color-hover: #fff;
       --dark-text-color-title: #fff;
       --dark-background-color-aside: #292725;
       --dark-background-color-aside-hover: #252220;
   }
`;