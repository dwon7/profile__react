import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css'
import SideBar from './components/sidebar/SideBar';

const {  Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider width={400} theme='gray'>
          <SideBar/>
        </Sider>

        <Layout>
          <Content><div className='bg-red-500'>the</div></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
