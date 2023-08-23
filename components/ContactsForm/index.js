import React from "react";
import classnames from "classnames";

import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactsForm({ whiteColorMenu }) {
    const [originUrl, setOriginUrl] = React.useState("");
    const router = useRouter();

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
                setTimeout(() => formButton.current.classList.remove("button--success"), 2000);
                setTimeout(() => formButton.current.setAttribute("disabled", ""), 3000);
                setTimeout(() => router.push('/thanks'), 3250);
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
            {/* Имя и email */}
            <div className="contacts__form-block">
                <input
                    type="text"
                    className="contacts__form-input"
                    placeholder="Имя*"
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
                    placeholder="Номер телефона"
                    name="phone"
                    autoComplete="off"
                    min="2"
                    maxLength="30"
                    {...register("phone")}
                ></input>
            </div>

            {/* Сообщение */}
            <textarea
                className="contacts__form-textarea"
                placeholder="Сообщение"
                name="message"
                autoComplete="off"
                maxLength="500"
                {...register("message")}
            ></textarea>

            <div className="contacts__form-button-container">
                <button ref={formButton} type="submit" className="button-order">
                    <span className="button-order__standart-state">Отправить</span>
                    <span className="button-order__delivery-state">Идет отправка ... 🚀</span>
                    <span className="button-order__success-state">Отправлено, скоро свяжемся! 👌</span>
                    <span className="button-order__error-state">Ошибка, не отправлено!</span>
                </button>
                <span className="contacts__form-button-signature">
                    Нажимая на кнопку отправить вы даете согласие на обработку ваших
                    персональных данных
                </span>
            </div>
        </form>
    );
};