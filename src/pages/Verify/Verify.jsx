import { Conteiner, Text, Title, EmailIncon } from "./Verify.styles";

export default function Verify() {
  return (
    <Conteiner>
      <EmailIncon size={38} />
      <Title>Verify your email</Title>
      <Text>
        We&apos;ve sent an email to. to verify your email address and activate
        your account. The link in the email will expire in 24 hours.
      </Text>
      <Text>
        <a href="">Click here</a> if you have not received the letter.
      </Text>
    </Conteiner>
  );
}
