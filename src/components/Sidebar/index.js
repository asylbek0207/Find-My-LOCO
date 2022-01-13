import Logo from "./../Logo/Logo";
import {Layout, Menu} from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import './styles.scss'

const { Sider } = Layout;

function Sidebar() {
    return (
        <Layout className="sidebar">
            <Sider theme={'light'}>
                <Logo />
                <Menu theme={"light"} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={'locos'}>
                            <span>Локомотивы</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'map'}>
                            <span>Карта</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="sidebar__content">
                <Outlet />
            </Layout>
        </Layout>
    );
}

export default Sidebar;
