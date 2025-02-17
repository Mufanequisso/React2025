import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  ContainerLoginScreen
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./Background3.jpg" />
      <ContainerLogin>
        <LimitedContainer>
        <LogoImage src="./logo.png"></LogoImage>

        </LimitedContainer>
        
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};
export default LoginScreen;
