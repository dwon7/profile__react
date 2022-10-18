import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";

const Goals = () => {
    return ( 
        <React.Fragment>
            <section className="m-0 absolute top-[40%] translate-y-[-40%] text-left  pl-[3rem] max-w-[75rem]">
                <div className="">
                    <h2 className="text-white text-[4rem] uppercase pt-10 pb-10">Goals</h2>
                </div>

                <ul>
                    <li className="text-xl pb-4">
                        <CheckCircleOutlined  className="pr-2 hover:text-yellow-300"/>
                        Became Web Developer
                    </li>

                    <li className="text-xl pb-4"> 
                        <CheckCircleOutlined className="pr-2 hover:text-yellow-300"/>
                        Finish Study at Univesity
                    </li>
                    
                    <li className="text-xl pb-4">
                        <CheckCircleOutlined className="pr-2 hover:text-yellow-300"/>
                        Find a well-paid job
                    </li>

                    <li className="text-xl pb-4">
                        <CheckCircleOutlined className="pr-2 hover:text-yellow-300"/>
                        Take care of my own family
                    </li>
                    
                    <li className="text-xl pb-4"> 
                        <CheckCircleOutlined />
                        Earn so much money for early retired
                    </li>
                </ul>
            </section>
        </React.Fragment>
     );
}
 
export default Goals;