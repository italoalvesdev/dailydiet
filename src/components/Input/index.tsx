import { TextInput, TextInputProps } from 'react-native'
import { InputContainer, StyledInput, LabelInput } from "./styles";

interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
  label: string
}

export function Input({ inputRef, label, ...rest }: InputProps) {
  return (
    <InputContainer>
      <LabelInput>{label}</LabelInput>
      <StyledInput ref={inputRef} {...rest} />
    </InputContainer>
  )
}