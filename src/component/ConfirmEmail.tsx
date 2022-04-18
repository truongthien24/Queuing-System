import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';

export const ConfirmEmail = () => {

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

    const handleConfirm = (event:any) => {
        console.log(event.target.value);
        window.location.replace('/resetPassword');
    }
  return (
    <div className='layout'>
        <div className='container-fuild h-100'>
            <div className='row confirmPassword'>
                <div className='col-5 confirmPassword__left'>
                    <div className='confirmPassword__left-logo'>
                        <img src="./img/logo.png" className='confirmPassword__left-img'/>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='confirmPassword__left-form'
                        form={form}
                        >
                            <h3 style={{textAlign: 'center', fontWeight: '600'}}>Đặt lại mật khẩu</h3>
                            <p style={{fontSize: '1.1rem'}}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                        >
                            <Input className='confirmPassword__left-input'/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="confirmPassword__left-form-control">
                            <Button htmlType="button" onClick={onReset} className='confirmPassword__left-btn confirmPassword__cancel'>
                                Hủy
                            </Button>
                            <Button type="primary" htmlType="submit" className='confirmPassword__left-btn' onClick={handleConfirm}>
                                <span style={{fontWeight: '500'}}>Tiếp tục</span>
                            </Button>
                        </Form.Item>
                        </Form>
                </div>
                <div className='col-7 confirmPassword__right'>
                    <img src='img/Frame.png' className='confirmPassword__right-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}
