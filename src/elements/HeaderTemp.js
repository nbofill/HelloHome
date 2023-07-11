import { HomeOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle = {
  color: 'white',
  fontSize: '450%'
}

function HeaderTemp() {
    return (
        <Header style={headerStyle}><HomeOutlined></HomeOutlined> Hello Home!</Header>
    )
}

export default HeaderTemp
