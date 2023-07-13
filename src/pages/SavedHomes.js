import HeaderTemp from "../elements/HeaderTemp";
import SiderTemp from "../elements/SiderTemp";
import Layout, { Content } from 'antd/es/layout/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Layout>
            <HeaderTemp></HeaderTemp>
            <Layout hasSider>
                <SiderTemp></SiderTemp>
                <Content>
                
                </Content>
            </Layout>
        </Layout>
    </React.StrictMode>
);
