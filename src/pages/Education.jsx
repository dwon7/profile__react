import React from "react";

const Education = () => {
    return ( 
        <React.Fragment>
            <section className="m-0 absolute top-[40%] translate-y-[-50%] text-left w-[70vw] pl-[3rem] max-w-[75rem]">
                <div className="">
                    <h2 className="text-white text-[4rem] uppercase pt-10 pb-10">Education</h2>
                    
                    <div className="flex justify-between mb-10">
                        <div>
                            <h3 className="text-white text-2xl">
                                Posts and Telecommunications Institute of Technology
                            </h3>

                            <div className="text-2xl my-5">
                                Telecommunications
                            </div>

                            <span>GPA : 2.52</span>
                        </div>

                        <div>
                            <span className="text-2xl">August 2016 - May 2019</span>
                        </div>

                    </div>

                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-white text-2xl">
                                LeXoay High School
                            </h3>

                            <div className="text-2xl my-5">
                                Math - Physics - English
                            </div>

                            <span>GPA : 3.55</span>
                        </div>

                        <div>
                            <span className="text-2xl">August 2019 - Now</span>
                        </div>

                    </div>
                </div>

            </section>
        </React.Fragment>
     );
}
 
export default Education;