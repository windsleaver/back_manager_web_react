import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import './login.less';

function Login() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login_layout">
            <Form className="login-form" name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}}
                  initialValues={{remember: true}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off">
                <Form.Item className="login-item" label="用户名：" name="username"
                           rules={[{required: true, message: 'Please input your username!'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item className="login-item" label="密码：" name="password"
                           rules={[{required: true, message: 'Please input your password!'}]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
