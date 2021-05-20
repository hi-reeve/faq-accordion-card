import React, { useState } from "react";
import style from "@/components/Accordion.module.scss";
import IconArrowDown from "@/assets/images/icon-arrow-down.svg";

type AccordionProps = {
    title: string;
    content: string;
};
const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
    const [isCollapse, setIsCollapse] = useState(true);
    return (
        <div className={style.accordion}>
            <div
                className={`${style.accordion__header} ${
                    !isCollapse ? style["accordion__header--open"] : ""
                }`}
                onClick={() => {
                    setIsCollapse(!isCollapse);
                }}
            >
                <h4 className={style.accordion__title}>{props.title}</h4>
                <img src={IconArrowDown} className={style.accordion__icon} />
            </div>
            <div
                className={`${style["accordion__content-wrapper"]} ${
                    !isCollapse ? style["accordion__content-wrapper--open"] : ""
                }`}
            >
                <p className={style["accordion__content"]}>{props.content}</p>
            </div>
        </div>
    );
};

export default Accordion;
