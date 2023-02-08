import { Button, Card, Form, Input } from 'antd'
import { login } from '../../api/login'
import type { LoginParams } from '../../api/types/login'
import style from './login.module.scss'

export const Login: React.FC = () => {
  const onFinish = async (values: LoginParams) => {
    const params: LoginParams = {
      ...values,
      grant_type: 'password',
      scope: 'test',
    }
    await login(params)
  }
  return (
    <main className={style.layout}>
      <Card title='Login'>
        <Form
          name="normal_login"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </main>
  )
}
