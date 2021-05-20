import React, { Fragment } from "react";
import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import BoxDesktop from "@/assets/images/illustration-box-desktop.svg";
import WomanOnlineDesktop from "@/assets/images/illustration-woman-online-desktop.svg";
import WomanOnlineMobile from "@/assets/images/illustration-woman-online-mobile.svg";
import PatternDesktop from "@/assets/images/bg-pattern-desktop.svg";
import PatternMobile from "@/assets/images/bg-pattern-mobile.svg";
import style from "@/App.module.scss";
import useMediaQuery from "./hooks/useMediaQuery";
const App: React.FC<{}> = () => {
    const isLarge = useMediaQuery(525);
    const datas: { title: string; content: string }[] = [
        {
            title: "How many team members can I invite?",
            content:
                "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        },
        {
            title: "What is the maximum file upload size?",
            content:
                "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
            title: "How do I reset my password?",
            content:
                "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        },
        {
            title: "Can I cancel my subscription?",
            content:
                "Yes! Send us a message and we’ll process your request no questions asked.",
        },
        {
            title: "Do you provide additional support?",
            content:
                "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
        },
    ];
    return (
        <div className={style.app}>
            <Card>
                <div className={style["faq--image"]}>
                    {isLarge && (
                        <Fragment>
                            <img
                                src={PatternMobile}
                                className={style["faq--pattern-mobile"]}
                            />
                            <img
                                src={WomanOnlineMobile}
                                className={style["faq--woman-mobile"]}
                            />
                        </Fragment>
                    )}
                </div>
                <div className={style["faq--content"]}>
                    <h1 className={style["faq--title"]}>FAQ</h1>
                    {datas.map(data => {
                        return (
                            <Accordion
                                title={data.title}
                                content={data.content}
                            ></Accordion>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
};

export default App;
