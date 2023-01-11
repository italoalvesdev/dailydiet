import { Message, SectionListEmptyContainer } from "./styles";

interface SectionListEmptyProps {
  message: string
}

export function SectionListEmpty({ message }: SectionListEmptyProps) {
  return (
    <SectionListEmptyContainer>
      <Message>{message}</Message>
    </SectionListEmptyContainer>
  )
}