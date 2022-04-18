import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';

export const ResetPassword = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const onReset = () => {
        form.resetFields();
    };
  return (
    <div className='layout'>
        <div className='container-fuild h-100'>
            <div className='row reset'>
                <div className='col-5 reset__left'>
                    <div className='reset__left-logo'>
                        <img src="./img/logo.png" className='reset__left-img'/>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='reset__left-form'
                        form={form}
                        >
                            <h3 style={{textAlign: 'center', fontWeight: '600'}}>Đặt lại mật khẩu mới</h3>

                        <Form.Item
                            label=""
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <p>Mật khẩu *</p>
                            <Input.Password className='reset__left-input'/>
                        </Form.Item>

                        <Form.Item
                            label=""
                            name="confirmpassword"
                            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}
                        >
                            <p>Nhập lại mật khẩu *</p>
                            <Input.Password className='reset__left-input'/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="reset__left-form-control">
                            <Button type="primary" htmlType="submit" className='reset__left-btn'>
                                <span style={{fontWeight: '500'}}>Xác nhận</span>
                            </Button>
                        </Form.Item>
                        </Form>
                </div>
                <div className='col-7 reset__right'>
                    <img src='img/Frame.png' className='reset__right-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}
