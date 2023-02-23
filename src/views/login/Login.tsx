import { Button, Card, Form, Input } from 'antd'
import type { LoginParams } from '../../api/types/login'
import { useLogin } from '../../hooks/useLogin'

export const Login: React.FC = () => {
  const onFinish = async (values: LoginParams) => {
    const params: LoginParams = {
      ...values,
      grant_type: 'password',
      scope: 'test',
    }
    const { userInfo } = useLogin(params)
  }
  return (
    <main className='w-full h-screen flex justify-center items-center bg-#f0f0f0'>
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
