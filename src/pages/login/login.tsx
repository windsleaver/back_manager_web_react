import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, notification, message} from 'antd';
import './login.less';
import {useNavigate} from "react-router-dom";
import Axios from "../../utils/axios/axios";
import NetWorkUrl from "../../utils/url/url";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

function Login() {
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()

    //显示错误通知信息
    const openNotificationWithIcon = (msg: string) => {
        notification["error"]({
            message: '登录失败',
            description: msg,
        });
    };

    //登录
    const login = async (values: any) => {
        setIsLoading(true)
        console.log(values.username)
        let res = await Axios(1, NetWorkUrl.login, {
            "userName": values.username,
            "password": values.password
        })
        setIsLoading(false)
        if (res) {
            if (res.data.success) {
                console.log(res)
                sessionStorage.setItem("userName", res.data.data.userName)
                sessionStorage.setItem("token", res.data.data.userToken)
                message.success('登录成功！');
                navigate("/welcome")
            } else {
                openNotificationWithIcon(res.data.msg)
            }
        }
    }

    return (
        <div className="login_layout">
            <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={login}>
                <div>
                    <h1 className="login-title">登录系统</h1>
                </div>
                <Form.Item className="login-item-username" name="username"
                           rules={[{required: true, message: '请输入用户名!'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                </Form.Item>
                <Form.Item className="login-item-password" name="password"
                           rules={[{required: true, message: '请输入密码!'}]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                    placeholder="密码"/>
                </Form.Item>
                <Form.Item className="login-item-function">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住用户名和密码</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>
                <Form.Item className="login-item-function-button">
                    <Button className="login-item-button" type="primary" htmlType="submit" loading={isLoading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
