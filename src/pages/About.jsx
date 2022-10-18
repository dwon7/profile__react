import React from "react";
import 'antd/dist/antd.css'
import './about.css'
import {FacebookFilled, GithubFilled, InstagramFilled, YoutubeFilled} from '@ant-design/icons'
import { Popover, Tooltip } from "antd";
import Facebook from "./facebook";

const About = () => {
    return (  
        <React.Fragment>
            <section className="m-0 absolute top-[40%] translate-y-[-50%] text-left  pl-[3rem]">
                <div className="">
                    <h2 className="text-white text-[4rem] uppercase pt-10 pb-10">Tran Hai Duong</h2>
                    <h3 className="text-white text-2xl uppercase pt-5 pb-5">HOAI DUC - HA NOI - 0862046624 - tranhaiduong.s4c@gmail.com</h3>
                </div>

                <p className="text-lg">Hi! I am Duong. I am intern Front-end ReactJS. I am really happy if you text to me by Instagram instead of Facebook.</p>

                <div>
                    <Popover content={<Facebook/>}>
                        <a href="https://www.facebook.com/bigbanghaiduong"
                            className="text-6xl text-white hover:text-blue-500"
                        >
                            <FacebookFilled />
                        </a>
                    </Popover>

                    <Tooltip title='123'>
                        <a href="https://www.instagram.com/d_won_7/"
                            className="text-6xl text-white pl-6 pr-6 hover:text-pink-400"
                        >
                            <InstagramFilled/>
                        </a>
                    </Tooltip>

                    <Tooltip title='123'>
                        <a href="https://github.com/dwon7"
                            className="text-6xl text-white pr-6 hover:text-yellow-300"
                        >
                            <GithubFilled/>
                        </a>
                    </Tooltip>

                    <Tooltip title='123'>
                        <a href="#"
                            className="text-6xl text-white hover:text-red-600"
                        >
                            <YoutubeFilled/>
                        </a>
                    </Tooltip>

                </div>

            </section>
        </React.Fragment>
    );
}
 
export default About;