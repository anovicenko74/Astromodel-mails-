import { Button, Text } from "@react-email/components";
import * as React from "react";
import AstromodelBase from "./astromodel-base";
import { button, paragraph } from "../styles";

export const AstromodelPasswordRequest = () => (
    <AstromodelBase>
        <Text style={paragraph}>
            Запрошен сброс пароля для вашего аккаунта <br /> Нажмите для
            подтверждения
        </Text>
        <Button href="#" style={button}>
            Сбросить
        </Button>
        <Text style={paragraph}>
            Если это были не вы проигнорируйте сообщение
        </Text>
    </AstromodelBase>
);

export default AstromodelPasswordRequest;
