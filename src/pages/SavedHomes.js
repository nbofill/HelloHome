import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderTemp from "../elements/HeaderTemp";
import SiderTemp from "../elements/SiderTemp";
import Layout, { Content } from 'antd/es/layout/layout';
import Form from 'antd/es/form/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout>
            <HeaderTemp></HeaderTemp>
            <Layout hasSider>
                <SiderTemp></SiderTemp>
                <Content>
                <Form layout='inline'>
                    <FormItem> </FormItem>
                </Form>
                </Content>
            </Layout>
        </Layout>
    </React.StrictMode>
);
