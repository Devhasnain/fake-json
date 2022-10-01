import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import {NavLink1Animation,NavLink2Animation,HeadingAnimation, IconsAnimation, TypeWriterAnimation} from './Animations';
function Home() {
    const { text } = useTypewriter({
        words: [
            '{"id": " 1 " , " name " : " Jhon " ," email " : " jhon@gmail.com "} ',
            '{"id": " 2 " , " title " : " Qui cum asperiores commodi " ," description " : " Qui cum asperiores commodi quidem voluptatibusQui"} ',
            '{"id": " 3 " , " firstname " : " sarah " ," lastname " : " Ali "} ,"email" : "sarah@gmail.com"',
            '{"id": " 4 " , " productname " : " car " ," price " : " 10000$ " ,"color" : "black"} ',
        ],
        cursorStyle: '_',
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 30,
        delaySpeed: 2000
    })
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <motion.h1 className='my-4 display-5 text-center'
                    variants={HeadingAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    drag
                    dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    dragElastic={0.1}
                    >Fake Json {'{"-"}'}</motion.h1>
                    <div className='col-lg-5 my-3 p-2'>
                        <NavLink to='/get-apis' className='text-decoration-none nav-links fs-4'>
                            <motion.div className='p-5 border rounded shadow'
                            variants={NavLink1Animation}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            >
                                <div className='d-flex justify-content-between'>
                                Get Apis  <motion.i className="bi bi-arrow-right fs-3"
                                variants={IconsAnimation}
                                whileHover='hover'
                                ></motion.i>
                                </div>
                            </motion.div>
                        </NavLink>
                        <br />
                        <NavLink to='get-json-data' className='text-decoration-none nav-links fs-4'>
                            <motion.div className='p-5 border rounded shadow'
                            variants={NavLink2Animation}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            >
                                <div className='d-flex justify-content-between'>
                                Get json data <motion.i className="bi bi-arrow-right fs-3"
                                variants={IconsAnimation}
                                whileHover='hover'
                                ></motion.i>
                                </div>
                            </motion.div>
                        </NavLink>
                    </div>
                    <motion.div className='col-lg-5 my-3'
                    variants={TypeWriterAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    drag
                    dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    dragElastic={0.2}
                    >
                        <div className='typewriter-div  m-auto p-3'>
                            {text}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home;
