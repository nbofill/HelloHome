import './App.css';
import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import { Button } from 'antd';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import  { Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const headerStyle = {
  color: 'white',
  fontSize: '4rem'
}

const contentStyle = {
  textAlign: 'center',
  theme: 'dark'
}

const siderStyle = {

}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Menu', '1', null, [
    getItem('Find Homes', '1'),
    getItem('My Liked Homes', '2'),
  ])
];


function App() {
  return (
    <Layout>
      <Header style={headerStyle}><HomeOutlined></HomeOutlined><span style={{ textAlign: 'center' }}> Hello Home!</span></Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <Menu items={items} mode='inline' theme='dark'></Menu>
        </Sider>
        <Content style={contentStyle}>
          <Form>
            <FormItem name='city' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='City'></Input></FormItem>
            <FormItem name='state' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='State'></Input></FormItem>
            <FormItem name='min'><Input size='large' placeholder='Min Price($)'></Input></FormItem>
            <FormItem name='max'><Input size='large' placeholder='Max Price($)'></Input></FormItem>
            <Button type='primary' icon={<SearchOutlined />} size='large' htmlType='submit'>Search for Homes</Button>
          </Form>
        </Content>
        <Sider></Sider>
      </Layout>
    </Layout>
  );
}

export default App;
