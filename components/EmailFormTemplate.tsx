import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailFormProps = {
  message: string;
  sender: string;
};

export default function EmailFormTemplate({ message, sender }: EmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-950">
          <Container>
            <Section className="bg-gray-50 borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from your Portfolio contact
                form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>from: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
