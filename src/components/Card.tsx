import React from "react";
import style from "@/components/Card.module.scss";
type CardProps = {
    className?: string;
    children: JSX.Element | JSX.Element[];
};
const Card: React.FC<CardProps> = (props: CardProps) => {
    const cardClasses = [
        style.card,
        `${props.className ? props.className : ""}`,
    ].join(" ");
    return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
