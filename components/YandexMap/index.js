import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import logoIcon from "../../public/img/map/logo.svg";

export default function YandexMap({ zoomValue }) {

    function createBalloonLayout(ymaps) {
        const BalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div>new balloon</div>', {
        });
        return BalloonLayout;
    }

    return (
        <YMaps>
            <Map className="yandex-map" defaultState={{ center: [55.757921, 37.645914], zoom: zoomValue }}>
                {/* <Placemark defaultGeometry={[55.757921, 37.645914]} /> */}
                <Placemark
                    defaultGeometry={[55.757921, 37.645914]}
                    options={{
                        // iconLayout: 'default#image',
                        iconImageHref: logoIcon,
                        iconImageSize: [60, 60],
                        iconImageOffset: [-35, -75],
                        iconColor: 'rgb(85, 171, 104)'
                    }}
                />
            </Map>
        </YMaps>
    )
};