import { Text, Img } from "@react-email/components";
import * as React from "react";
import AstromodelBase from "./astromodel-base";
import { paragraph } from "../styles";

export const AstromodelPublicEventInfo = () => (
    <AstromodelBase previewText="Вы были зарегистрированы на мероприятие">
        <Text style={paragraph}>Здравствуйте, {"{{ full_name }}"}</Text>
        <Text style={paragraph}>
            Вы были зарегистрированы на мероприятие {"{{ public_event_name }}"}
        </Text>
        <Img
            alt="Ode Grinder"
            height={250}
            src="https://picsum.photos/600/300"
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "8px",
            }}
        />
        <Text style={paragraph}>
            Дата: {"{{ public_event_date }}"} <br />
            Место: {"{{ public_event_place }}"}
            <br />
            Количество гостей: {"{{ guests_count }}"}
            <br />
        </Text>
        <Text style={paragraph}>
            Ждем с нетерпением! Не удаляйте письмо до посещения
        </Text>
    </AstromodelBase>
);

export default AstromodelPublicEventInfo;
