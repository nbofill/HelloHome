import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout, Image } from 'antd';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  theme: 'dark',
  height: "100vh", 
}

const onReset = () => {
  document.getElementById('searchForm').reset();
}

function Home() {
    return (
        <Content style={contentStyle}>
            <h2>Begin your search for a new Home</h2>
            <Image width={200} src="HelloHome/public/favicon.png"></Image>
            <Form id='searchForm' style={{ marginLeft: '15%', marginRight: '15%' }}>
                <FormItem name='city' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='City'></Input></FormItem>
                <FormItem name='state' rules={[{ required: true, message: 'Please fill this field' }]}><Input size='large' placeholder='State'></Input></FormItem>
                <FormItem name='min'><Input size='large' placeholder='Min Price($)'></Input></FormItem>
                <FormItem name='max'><Input size='large' placeholder='Max Price($)'></Input></FormItem>
                <Button style={{ marginRight: '2%' }} type='primary' icon={<SearchOutlined />} size='large' htmlType='submit'>Search for Homes</Button>
                <Button type='default' size='large' onClick={onReset}>Clear</Button>
            </Form>
        </Content>
    );
}

export default Home;