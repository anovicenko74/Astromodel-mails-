import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Button,
} from "@react-email/components";
import * as React from "react";
import AstromodelBase from "./astromodel-base";
import { codeContainer, codeStyle, paragraph } from "../styles";

export const AstromodelPublicEventOtp = () => (
    <AstromodelBase previewText="Вы подали заявку на участие в мероприятии">
        <Text style={paragraph}>Здравствуйте, %full_name%</Text>
        <Text style={paragraph}>
            Вы подали заявку на участие в мероприятии %public_event_name% <br />{" "}
            Ваш код подтверждения
        </Text>
        <Section style={codeContainer}>
            <Heading style={codeStyle}>564873</Heading>
        </Section>
    </AstromodelBase>
);

export default AstromodelPublicEventOtp;
