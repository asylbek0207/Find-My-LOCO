import React from "react";
import PageLayout from "../PageLayout";
import {Button} from "antd";
import './styles.scss'
import {useSelector} from "react-redux";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useNavigate} from "react-router";

function LocoMap() {
    const navigate = useNavigate();
    const { locos } = useSelector((state) => state);

    const openNewLocoForm = () => {
        navigate('/locos/new')
    };

    return (
        <PageLayout title={'Карта'}>
            <div className="loco-map">
                <Button className="loco-map__button" onClick={openNewLocoForm}>
                    Добавить локомотив
                </Button>
                <div className="loco-map__box">
                    <YMaps query={{
                        apikey: 'f0ea970a-f022-49c0-81d5-df196f0bb72e',
                        lang: 'ru_RU',
                        coordorder: 'latlong'
                    }}>
                        <Map
                            width={'100%'}
                            height={350}
                            defaultState={{
                                center: locos[0].latlong,
                                zoom: 12,
                                controls: ['zoomControl']
                            }}
                            modules={['control.ZoomControl']}
                        >
                            {
                                locos.map((i) => (
                                    <Placemark key={i.id}
                                               geometry={i.latlong}
                                               modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                               properties={{
                                                   hintContent: i.name,
                                                   balloonContentBody: [
                                                       `<div class="loco-map__box--balloon">
                                                            <p class="header">${i.name}</p>
                                                            <p class="">Серия: ${i.serial}</p>
                                                            <p>Количество секции: ${i.sectionCount}</p>
                                                        </div>`
                                                   ].join('')
                                               }}
                                    />
                                ))}
                        </Map>
                    </YMaps>
                </div>
            </div>
        </PageLayout>
    );
}

export default LocoMap;
