import React, {useEffect, useState} from "react";
import PageLayout from "../PageLayout";
import './styles.scss'
import {Button} from "antd";
import {addNewLoco, editLoco, getById, setLoading} from "../../store/actions";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextField from "../TextField";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {getRandomRange} from '../../utils';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Loading from "../Loading";

const validationScheme = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    serial: Yup.string().required('Обязательное поле'),
    sectionCount: Yup.string().required('Обязательное поле'),
});

const initialValues = {
    name: '',
    serial: '',
    sectionCount: '',
};

const initialPoint = [51.196004607608266, 71.40973370522242];

function LocoForm() {
    const navigate = useNavigate();
    const {id} = useParams();
    const { loading } = useSelector((state) => state)

    const [fields, setFields] = useState();
    const [coords, setCoords] = useState();

    useEffect(() => {
        if (id) {
            setLoading(true);
            const currentLoco = getById(parseInt(id));
            setFields(currentLoco);
            setCoords(currentLoco.latlong);
            setTimeout(() => {
                setLoading(false);
            })
        } else {
            setFields(initialValues);
            setCoords(initialPoint);
        }
    }, [id])

    const createLoco = (values) => {
        setLoading(true);
        setTimeout(() => {
            addNewLoco({
                ...values,
                latlong: coords
            });
            navigate(-1);
            setLoading(false);
        }, getRandomRange())
    }

    const saveLoco = (values) => {
        setLoading(true);
        setTimeout(() => {
            editLoco({
                ...values,
                latlong: coords
            });
            navigate(-1);
            setLoading(false);
        }, getRandomRange())
    }

    const submit = (values) => {
        if (id) {
            saveLoco(values);
        } else {
            createLoco(values);
        }
    };

    const onCLickMap = (e) => {
        setCoords(e.get('coords'));
    };

    if (!fields) {
        return <Loading />
    }

    return (
        <PageLayout title={id ? `Локомотив №${id}` : 'Новый локомотив'}>
            <div className="loco-form">
                { loading && <Loading /> }
                <Formik initialValues={fields} validationSchema={validationScheme} onSubmit={submit}>
                    {({values, submitForm, errors, touched, validateForm}) => (
                        <Form>
                            <div className="loco-form__fields">
                                <TextField
                                    label={'Наименование'}
                                    name={'name'}
                                    value={values.name}
                                    errors={errors}
                                    touched={touched}
                                />
                                <TextField
                                    label={'Серия'}
                                    name={'serial'}
                                    value={values.serial}
                                    errors={errors}
                                    touched={touched}
                                />
                                <TextField
                                    label={'Количество секции'}
                                    name={'sectionCount'}
                                    value={values.sectionCount}
                                    type="number"
                                    errors={errors}
                                    touched={touched}
                                />
                            </div>
                            <div className="loco-form__coords">
                                <b>Широта:</b> {coords[0]} <b>Долгота:</b> {coords[1]}
                            </div>
                            <div className="loco-form__map">
                                <YMaps query={{
                                    apikey: 'f0ea970a-f022-49c0-81d5-df196f0bb72e',
                                    lang: 'ru_RU',
                                    coordorder: 'latlong'
                                }}>
                                    <Map
                                        onClick={onCLickMap}
                                        width={'100%'}
                                        height={350}
                                        defaultState={{
                                            center: coords,
                                            zoom: 12,
                                            controls: ['zoomControl']
                                        }}
                                        modules={['control.ZoomControl']}
                                    >
                                        <Placemark geometry={coords}/>
                                    </Map>
                                </YMaps>
                            </div>
                            <Button
                                className="loco-form__button"
                                onClick={submitForm}>
                                Сохранить
                            </Button>
                            <Button
                                className="loco-form__button loco-form__button--red"
                                onClick={() => navigate(-1)}>
                                Назад
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </PageLayout>
    )
}

export default LocoForm;