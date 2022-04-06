import React, { useState } from 'react';
import './welcome.less'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {NavLink, Outlet} from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Welcome() {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const menuFlag = () => {
      setCollapsed(!collapsed)
    }

    return (
        <Layout hasSider>
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }} trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <NavLink to="home">主页</NavLink>
                    </Menu.Item>
                    <SubMenu key="3" icon={<UserOutlined />} title="系统管理">
                        <Menu.Item key="4">
                            <NavLink to="tenant">租户管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <NavLink to="user">用户管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to="role">角色管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <NavLink to="menu">菜单管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to="dictionary">字典管理</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => menuFlag(),
                    })}
                </Header>
                <Content className="site-layout-background"
                    style={{margin: '24px 16px', padding: 24, display: "flex", flex: 1, minHeight: 280}}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Welcome
