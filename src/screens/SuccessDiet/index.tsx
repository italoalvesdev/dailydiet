import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';

import successDietImg from '@assets/successDietImg.png'

import { SuccessDietContainer, Title, Subtitle, StrongText, StyledImage } from "./styles";

export function SuccessDiet() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <SuccessDietContainer>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua <StrongText>dentro da dieta.</StrongText> Muito bem!</Subtitle>
      <StyledImage source={successDietImg} />

      <Button title='Ir para a página inicial' onPress={handleGoHome} />
    </SuccessDietContainer>
  )
}