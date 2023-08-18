import { Layout } from 'antd';
import  { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import React from 'react';
import {Link} from "react-router-dom"

const { Sider } = Layout;

const siderStyle = {
    height: "100vh", 
    minWidth: 0,
    flex: 'auto'
}

function SiderTemp() {
    return (
        <Sider style={siderStyle}>
            <Menu mode='inline' theme='dark'>
              <SubMenu key='sub' title='Menu'>
                <Menu.Item key='sub-1'><Link to="/">Find Homes</Link></Menu.Item>
                <Menu.Item key='sub-2'><Link to="/saved">My Saved Homes</Link></Menu.Item>
              </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SiderTemp