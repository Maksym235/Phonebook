import { Conteiner, Title, Description, Slogan, Btn } from "./HomeInfo.styled";

export function HomeInfo() {
  return (
    <Conteiner>
      <Title>All your contacts in one place</Title>
      <Slogan>
        Call U - Keep all your contacts in a safe place and easily share them
        with your friends
      </Slogan>
      <Description>
        A contact storage tool is a digital application designed to help users
        store, manage, and organize their contacts. With this tool, users can
        save their contacts&apos; information, such as names, phone numbers,
        email addresses, and social media profiles, in a centralized location.
      </Description>
      <Btn to="/register">Get started</Btn>
    </Conteiner>
  );
}
