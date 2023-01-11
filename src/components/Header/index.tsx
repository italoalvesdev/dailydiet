import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png'
import avatarImg from '@assets/avatar.png'

import { HeaderContainer, Logo, Avatar, Icon, Title, IconColorStyles, ImagesWrapper } from "./styles";

interface HeaderProps {
  title?: string
  showBackButton?: boolean
  iconColor?: IconColorStyles
}

export function Header({ title, showBackButton = false, iconColor = 'GRAYISH' }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <HeaderContainer>
      {showBackButton || title ? (
        <>
          {showBackButton && (
            <TouchableOpacity onPress={handleGoHome} style={title ? { position: 'absolute', left: 0 } : { flex: 1 }}>
              <Icon type={iconColor} />
            </TouchableOpacity>
          )
          }
          {title && <Title>{title}</Title>}
        </>
      ) : (
        <ImagesWrapper>
          <Logo source={logoImg} />
          <Avatar source={avatarImg} />
        </ImagesWrapper>
      )

      }
    </HeaderContainer>
  )
}