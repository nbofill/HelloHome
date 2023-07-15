import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderTemp from "../elements/HeaderTemp";
import SiderTemp from "../elements/SiderTemp";
import Layout, { Content } from 'antd/es/layout/layout';
import Form from 'antd/es/form/Form';
import { Input } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout>
            <HeaderTemp></HeaderTemp>
            <Layout hasSider>
                <SiderTemp></SiderTemp>
                <Content>
                <Form layout='inline'>
                    <FormItem>City <Input /></FormItem>
                    <FormItem>State <Input /></FormItem>
                    <FormItem>Price <Input /></FormItem>
                    <FormItem>Bed <Input /></FormItem>
                    <FormItem>Bath <Input /></FormItem>
                    <FormItem>Sqft <Input /></FormItem>
                </Form>
                </Content>
            </Layout>
        </Layout>
    </React.StrictMode>
);
