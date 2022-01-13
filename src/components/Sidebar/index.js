import Logo from "./../Logo/Logo";
import {Layout, Menu} from "antd";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import './styles.scss'
import {useLocation} from "react-router";

const { Sider } = Layout;

function Sidebar() {
    const location = useLocation();

    return (
        <Layout className="sidebar">
            <Sider theme={'light'}>
                <Logo />
                <Menu theme={"light"} selectedKeys={[location.pathname]}>
                    <Menu.Item key="/locos">
                        <Link to={'locos'}>
                            <span>Локомотивы</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/map">
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
