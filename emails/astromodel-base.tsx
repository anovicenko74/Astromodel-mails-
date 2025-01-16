import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";
import { ReactNode } from "react";
import { main, container, box, hr, footer } from "../styles";

const baseUrl = "https://admin.astromodel.ru";

export const AstromodelBase = ({
    children,
    previewText,
}: {
    children: ReactNode;
    previewText: string;
}) => (
    <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                    <Img
                        src={`${baseUrl}/assets/55cc97f1-5ad8-40cf-81c4-76ee9988f4ff`}
                        width="50"
                        height="50"
                        alt="Stripe"
                    />
                    <Hr style={hr} />
                    {children}
                    <Hr style={hr} />
                    <Text style={footer}>
                        Калининградское астрономическое сообщество, 2025
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default AstromodelBase;
