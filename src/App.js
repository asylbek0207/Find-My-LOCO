import './App.scss';
import Logo from "./components/Logo/Logo";
import {Layout, Menu} from "antd";
import React from "react";
const { Header, Content, Sider } = Layout;

const App = () => {
  return (

      <Layout>
          <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                  console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
              }}
          >
              <Logo />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                      Локомотивы
                  </Menu.Item>
                  <Menu.Item key="2">
                      Карта
                  </Menu.Item>
              </Menu>
          </Sider>
          <Layout>
              <Header className="header" />
              <Content className="content" style={{ margin: '24px 16px 0' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                      content
                  </div>
              </Content>
          </Layout>
      </Layout>
  );
}

export default App;
