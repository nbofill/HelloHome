import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';


const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  theme: 'dark',
  height: "100vh", 
}

function App() {
  return (
        <Content style={contentStyle}>
          <h2>Begin your search for a new Home</h2>
          <Form style={{ marginLeft: '5%', marginRight: '5%'}}>
            <FormItem name='city' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='City'></Input></FormItem>
            <FormItem name='state' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='State'></Input></FormItem>
            <FormItem name='min'><Input size='large' placeholder='Min Price($)'></Input></FormItem>
            <FormItem name='max'><Input size='large' placeholder='Max Price($)'></Input></FormItem>
            <Button type='primary' icon={<SearchOutlined />} size='large' htmlType='submit'>Search for Homes</Button>
          </Form>
        </Content>
        
  );
}

export default App;
