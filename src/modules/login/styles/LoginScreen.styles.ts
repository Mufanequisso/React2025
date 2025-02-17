import styled from "styled-components";

export const BackgroundImage = styled.img`
position: absolute;
  left: 0;
  top: 0;
  width: 50%; /* Ocupa metade da tela à esquerda */
  height: 100vh;
  object-fit: cover;
  z-index: 1;

`;

export const LogoImage = styled.img`
width: 100px;
height: 100px;
margin-top: 200px;

`;

export const ContainerLogin = styled.div`
background-color: whitesmoke;
display: flex;
justify-content: center;
  width: 50%; /* Ocupa metade da tela à direita */
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const LimitedContainer = styled.div`
width : 100%;
max-width: 498px;
display: flex;
justify-content: center;

`;

export const ContainerLoginScreen =styled.div`
width: 100%;
display: flex;
justify-content: right;

`


