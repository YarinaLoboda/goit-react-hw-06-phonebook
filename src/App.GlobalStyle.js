import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*{
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

h1, h2{ 
margin: 10px;
}
`;

export const PhoneBookContainer = styled.div`
   {
    width: 100%;
  }
`;
