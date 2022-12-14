import React from "react";
import classnames from "classnames";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactsForm({ whiteColorMenu }) {
    const [originUrl, setOriginUrl] = React.useState("");

    const formTag = React.useRef();
    const formButton = React.useRef();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm();

    React.useEffect(() => {
        setOriginUrl(window.location.origin)
    }, []);

    async function onSubmitForm(values) {

        formButton.current.setAttribute("disabled", "disabled");
        formButton.current.classList.add("button--delivery");

        let config = {
            method: "post",
            url: `${originUrl}/api/feedback`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };

        try {
            const response = await axios(config);
            if (response.status == 200) {
                formTag.current.reset();
                formButton.current.classList.remove("button--delivery");
                formButton.current.classList.add("button--success");

                formButton.current.setAttribute("disabled", "disabled");
                setTimeout(() => formButton.current.classList.remove("button--success"), 3000);
                setTimeout(() => formButton.current.setAttribute("disabled", ""), 5000);
            }
        } catch (err) {
            formTag.current.reset();
            formButton.current.setAttribute("disabled", "disabled")
            formButton.current.classList.remove("button--delivery");
            formButton.current.classList.add("button--error");

            setTimeout(() => formButton.current.classList.remove("button--error"), 5000);
            setTimeout(() => formButton.current.setAttribute("disabled", ""), 5000);
        }
    }

    return (
        <form
            ref={formTag} onSubmit={handleSubmit(onSubmitForm)}
            className={classnames("contacts__form", {
                "contacts__form--white": whiteColorMenu,
            })}
        >
            {/* ?????? ?? email */}
            <div className="contacts__form-block">
                <input
                    type="text"
                    className="contacts__form-input"
                    placeholder="??????*"
                    name="name"
                    autoComplete="off"
                    min="2"
                    maxLength="50"
                    {...register("name")}
                    required
                ></input>
                <input
                    type="email"
                    className="contacts__form-input"
                    placeholder="E-mail*"
                    name="email"
                    autoComplete="off"
                    min="2"
                    maxLength="30"
                    {...register("email")}
                    required
                ></input>
                <input
                    type="text"
                    className="contacts__form-input"
                    placeholder="?????????? ????????????????"
                    name="phone"
                    autoComplete="off"
                    min="2"
                    maxLength="30"
                    {...register("phone")}
                ></input>
            </div>

            {/* ?????????????????? */}
            <textarea
                className="contacts__form-textarea"
                placeholder="??????????????????"
                name="message"
                autoComplete="off"
                maxLength="500"
                {...register("message")}
            ></textarea>

            <div className="contacts__form-button-container">
                <button ref={formButton} type="submit" className="button-order">
                    <span className="button-order__standart-state">??????????????????</span>
                    <span className="button-order__delivery-state">???????? ???????????????? ... ????</span>
                    <span className="button-order__success-state">????????????????????, ?????????? ????????????????! ????</span>
                    <span className="button-order__error-state">????????????, ???? ????????????????????!</span>
                </button>
                <span className="contacts__form-button-signature">
                    ?????????????? ???? ???????????? ?????????????????? ???? ?????????? ???????????????? ???? ?????????????????? ??????????
                    ???????????????????????? ????????????
                </span>
            </div>
        </form>
    );
};