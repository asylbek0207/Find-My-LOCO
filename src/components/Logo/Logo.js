import React from "react";
import './styles.scss'
import { BranchesOutlined } from '@ant-design/icons'
import {useNavigate} from "react-router";

const Logo = () => {
    const navigate  = useNavigate();

    const goHome = () => {
        navigate('/')
    };

    return (
        <div className="logo" onClick={goHome}>
            <BranchesOutlined />
            <h3>Find My LOCO</h3>
        </div>
    )
}

export default Logo;