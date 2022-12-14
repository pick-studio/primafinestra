import React from "react";
import classnames from "classnames";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactsPopap(props) {
  const [visiblePopap, setVisiblePopap] = React.useState(false);

  const changeVisiblePopap = (currentVisiblePopap) => {
    setVisiblePopap(!visiblePopap);
  };

  const [originUrl, setOriginUrl] = React.useState("");

  const formTag = React.useRef();
  const formButton = React.useRef();

  const openPopapButton = React.useRef();
  const closePopapButton = React.useRef();
  const outlinePopapButton = React.useRef();

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
    <div>
      <button
        className="contacts__open-popap-button"
        ref={openPopapButton}
        onClick={changeVisiblePopap}
      >
        {props.buttonName}
      </button>

      <div
        className={classnames("contacts__popap", {
          "contacts__popap--active": visiblePopap,
        })}
      >
        <div
          className="contacts__popap-outline"
          ref={outlinePopapButton}
          onClick={changeVisiblePopap}
        ></div>

        <form
          ref={formTag}
          onSubmit={handleSubmit(onSubmitForm)}
          className="contacts__popap-form"
        >
          <span
            ref={closePopapButton}
            onClick={changeVisiblePopap}
            className="contacts__popap-button-close"
          ></span>
          <h2 className="contacts__popap-title">Оставить заявку</h2>
          <p className="contacts__popap-text-preview">{props.textPreview}</p>

          {/* Имя и email */}
          <div className="contacts__popap-block">
            <input
              type="text"
              className="visually-hidden"
              name="product"
              defaultValue={`${props.product} ${props.article && props.article} (${props.range})`}
            ></input>
            <input
              type="text"
              className="contacts__popap-input"
              placeholder="*Имя"
              name="name"
              autoComplete="off"
              min="2"
              maxLength="100"
              {...register("name")}
              required
            ></input>
            <input
              type="text"
              className="contacts__popap-input"
              placeholder="*Телефон"
              name="phone"
              autoComplete="off"
              min="2"
              maxLength="20"
              {...register("phone")}
              required
            ></input>
            <input
              type="email"
              className="contacts__popap-input"
              placeholder="E-mail"
              name="email"
              autoComplete="off"
              min="2"
              maxLength="100"
              {...register("email")}
            ></input>

            {/* Передает информацию о товаре */}
            <input
              type="text"
              id="product"
              defaultValue={`${props.product} ${props.article && props.article}`}
              {...register("product")}
              name="product"
              className="visually-hidden">
            </input>
          </div>

          <div className="contacts__popap-product-container">
            <h3 className="contacts__popap-product-title">Товар в заявке:
              <span> </span>
              <span className="contacts__popap-product-text">
                <span>{props.product} {props.article && props.article}</span>
                {props.range &&
                  <>
                    {props.range.includes("#") ? (
                      <div className="contacts__popap-range-item-container">
                        <span> - цвет </span>
                        <span
                          className="contacts__popap-range-item--color"
                          style={{
                            backgroundColor: `${props.range}`
                          }}
                        ></span>
                      </div>
                    ) : (
                      <span> ({props.range})</span>
                    )}
                  </>
                }
              </span>
            </h3>
          </div>

          <div>
            <button ref={formButton} type="submit" className="button-order">
              <span className="button-order__standart-state">Отправить</span>
              <span className="button-order__delivery-state">Идет отправка ... 🚀</span>
              <span className="button-order__success-state">Отправлено, скоро свяжемся! 👌</span>
              <span className="button-order__error-state">Ошибка, не отправлено!</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
