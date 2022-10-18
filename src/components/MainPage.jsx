import { Button, Layout } from 'antd';
import 'antd/dist/antd.css'
import React, { useState } from 'react';
import NavPage from './NavPage';
import SideBar from './SideBar';

const MainPage = () => {
    const {  Sider, Content } = Layout;
    const {theme, setTheme} = useState('dark');

    const handleChangeTheme = () => {
        console.log('change theme')
    }

    return ( 
    <React.Fragment>
      <Layout>
        <Sider width={400}>
          <SideBar/>
        </Sider>

        <Layout theme="black">
          <Content className='h-[100vh] w-[80vw] bg-[#1c1e21]'>
            <Button className='absolute top-0' onClick={handleChangeTheme}>Change Theme</Button>
            <NavPage/>
          </Content>
        </Layout>
      </Layout>

    </React.Fragment>
     );
}
 
export default MainPage;