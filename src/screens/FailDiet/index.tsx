import { Button } from '@components/Button';

import failedDietImg from '@assets/failedDietImg.png'

import { FailDietContainer, Title, Subtitle, StrongText, StyledImage } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function FailDiet() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <FailDietContainer>
      <Title>Que pena!</Title>
      <Subtitle>Você <StrongText>saiu da dieta </StrongText> dessa vez, mas continue se esforçando e não desista!</Subtitle>
      <StyledImage source={failedDietImg} />

      <Button onPress={handleGoHome} title='Ir para a página inicial' />
    </FailDietContainer>
  )
}