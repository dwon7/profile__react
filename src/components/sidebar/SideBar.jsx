import { Avatar, Switch } from 'antd';
import 'antd/dist/antd.css'
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from '../content/about/About';
import Education from '../content/education/Education';
import Goals from '../content/goals/Goals';
import Interest from '../content/interest/Interest';

const SideBar = () => {
    return ( 
        <div className='mt-[200px] h-[100vh]'>
            <Avatar
                size={200}
                src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/307126267_3307584686180964_5543618417126935890_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=EUoflW4kStAAX_WmWnG&_nc_ht=scontent-hkt1-2.xx&oh=00_AT8zws1MOvE_EiBH8Z6tWskQGdyMc3urpEL1un25AAqcKg&oe=6352B8AB"
                className=''
            />

            <div>
                <ul>
                    <li>
                        <Link to='/'> about</Link>
                    </li>

                    <li>
                        <Link to='education'> education</Link>
                    </li>

                    <li>
                        <Link to='/interst'>interest</Link>
                    </li>

                    <li>
                        <Link to='/goals'>goals</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/interest" element={<Interest/>}/>
                    <Route path="/goals" element={<Goals/>}/>
                </Routes>
            </Switch>
        </div>
        
    );
}
 
export default SideBar;