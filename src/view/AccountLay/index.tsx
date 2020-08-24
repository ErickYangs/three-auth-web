import React from 'react'
import styles from './index.module.scss'
import { Form, Input } from 'antd'
import utils from '../../utils/index'
const layout: Object = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 }
}
const formLayout: any = 'vertical'
const AccountLay: React.FC = (props: any) => {
  const [form] = Form.useForm()

  const confirmHandler = async () => {
    form
      .validateFields()
      .then((vales) => {
        localStorage.setItem('token', utils.randomString())
        props.history.push('/')
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  const onFinish = (values: Object) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.minHeight}>
      <div className={styles.form__Lay + ' form_area'}>
        <h2>Sign In Pages</h2>
        <Form
          form={form}
          {...layout}
          name="basic"
          layout={formLayout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
        <div className={styles.btnPrimaryCss} onClick={confirmHandler}>
          Submit
        </div>
      </div>
    </div>
  )
}

export default AccountLay
