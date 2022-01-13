import React from "react";
import {Content, Header} from "antd/es/layout/layout";
import './styles.scss'

function PageLayout({title, children}) {
    return (
        <div className="page-layout">
            <Header className="page-layout__title">
                <h3>{title}</h3>
            </Header>
            <Content className="page-layout__content">
                {children}
            </Content>
        </div>
    );
}

export default PageLayout;
