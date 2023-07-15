import { Layout } from 'antd';
import  { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

const { Sider } = Layout;

const siderStyle = {
    height: "100vh", 
    minWidth: 0,
    flex: 'auto'
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

function handleSelect(key) {
  if (key === 'sub1') {
    
  } else {

  }
}

function SiderTemp() {
    return (
        <Sider style={siderStyle}>
            <Menu mode='inline' theme='dark' onClick={({key}) => handleSelect(key)}>
              <SubMenu key='sub' title='Menu'>
                <Menu.Item key='sub-1'>Find Homes</Menu.Item>
                <Menu.Item key='sub-2'>My Saved Homes</Menu.Item>
              </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SiderTemp