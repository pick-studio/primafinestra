import React from 'react';
import ContactsForm from '../../ContactsForm';
// import YandexMap from '../../YandexMap';

export default function Consultation() {
    return (
        <div className="consultation">
            <div className="container">
                <div className="consultation-container">
                    <div className="consultation-wrapper">
                        <h2 className="consultation__title">Нужна консультация?</h2>
                        <p className="consultation__text">
                            Специалисты компании помогут Вам выбрать подходящее решение для вашей кровли
                        </p>

                        <ContactsForm whiteColorMenu={true}></ContactsForm>
                    </div>
                    <div className="consultation-map">

                        {/* <YandexMap zoomValue="16"></YandexMap> */}

                    </div>
                </div>
            </div>
        </div>
    )
};