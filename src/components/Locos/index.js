import React, {useState} from "react";
import PageLayout from "../PageLayout";
import {DeleteOutlined, PicRightOutlined} from '@ant-design/icons'
import './styles.scss'
import {Button, Space, Table, Tag} from 'antd';
import {useNavigate} from "react-router";
import {removeLoco} from "../../store/actions";
import {useSelector} from "react-redux";

function Locos() {
    const navigate = useNavigate();
    const { locos } = useSelector((state) => state);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        pageSize: 5,
        position: ['bottomCenter']
    });

    const openLocoForm = (id) => {
        navigate(`/locos/${id}`);
    };

    const deleteLoco = (id) => {
        removeLoco(id);
    };

    const columns = [
        {
            title: 'Наименование',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name - b.name,
        },
        {
            title: 'Серия',
            dataIndex: 'serial',
            key: 'serial',
            sorter: (a, b) => a.serial - b.serial,
        },
        {
            title: 'Количество секции',
            dataIndex: 'sectionCount',
            key: 'sectionCount',
            sorter: (a, b) => a.sectionCount - b.sectionCount,
        },
        {
            title: 'Координаты (ШхД)',
            dataIndex: 'latlong',
            key: 'latlong',
            render: latlong => (
                <>
                    {latlong && latlong.map((i) => (
                        <Tag key={i} color={'green'}>{i}</Tag>
                    ))}
                </>
            ),
            sorter: (a, b) => a.latlong - b.latlong,
        },
        {
            title: 'Действия',
            key: 'action',
            render: (record) => (
                <Space size="small">
                    <Button shape="circle" icon={<PicRightOutlined />} onClick={() => openLocoForm(record.id)} />
                    <Button shape="circle" icon={<DeleteOutlined />} onClick={() => deleteLoco(record.id)} />
                </Space>
            ),
        },
    ];

    const onChange = (pagination) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)

        setPagination(pagination)
    };

    const openNewLocoForm = () => {
        navigate('new')
    };

    return (
        <PageLayout title={'Локомотивы'}>
            <div className="locos">
                <Button className="locos__button" onClick={openNewLocoForm}>
                    Добавить локомотив
                </Button>
                <Table
                    className="locos__table"
                    showSorterTooltip={false}
                    columns={columns}
                    dataSource={locos}
                    onChange={onChange}
                    rowKey={record => record.id}
                    pagination={pagination}
                    loading={loading}
                />
            </div>
        </PageLayout>
    );
}

export default Locos;
