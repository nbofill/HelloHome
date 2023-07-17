import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import Layout from 'antd/es/layout/layout';
import HeaderTemp from './elements/HeaderTemp';
import SiderTemp from './elements/SiderTemp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Layout>
      <HeaderTemp></HeaderTemp>
      <Layout hasSider>
        <SiderTemp></SiderTemp>
        <Content>
        <App></App>
        </Content>
      </Layout>
    </Layout>
    </React.StrictMode>
  </BrowserRouter>
);

/* 



*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
