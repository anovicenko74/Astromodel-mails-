import { Button, Text } from "@react-email/components";
import * as React from "react";
import AstromodelBase from "./astromodel-base";
import { button, paragraph } from "../styles";

export const AstromodelRegistrationLink = () => (
    <AstromodelBase previewText="Ваша почта была указана при регистрации на нашем ресурсе">
        <Text style={paragraph}>
            Ваша почта была указана при регистрации на нашем ресурсе <br />
            Нажмите для подтверждения
        </Text>
        <Button href="#" style={button}>
            Подтвердить
        </Button>
        <Text style={paragraph}>
            Если это были не вы проигнорируйте сообщение
        </Text>
    </AstromodelBase>
);

export default AstromodelRegistrationLink;
