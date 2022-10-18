import { Avatar } from 'antd';
import 'antd/dist/antd.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../data/Sidebardata';

const SideBar = () => {
    return ( 
        <div className='mt-[200px] h-[100vh]'>
            <Avatar
                size={200}
                src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/307126267_3307584686180964_5543618417126935890_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=EUoflW4kStAAX_WmWnG&_nc_ht=scontent-hkt1-2.xx&oh=00_AT8zws1MOvE_EiBH8Z6tWskQGdyMc3urpEL1un25AAqcKg&oe=6352B8AB"
                className=''
            />

            <div className='mt-[100px]'>
                {
                    SidebarData.map((item, index) => {
                        return(
                            <div key={index}>
                                <NavLink to={item.path} >
                                    <div className='text-white uppercase text-lg font-bold hover:text-yellow-300 pt-5 pb-5'>{item.title}</div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
            
            
        </div>
        
    );
}
 
export default SideBar;