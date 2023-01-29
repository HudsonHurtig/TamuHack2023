import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import {motion} from "framer-motion"; 

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Welcome to risk migrated finance. Simplified.",
            "There are many types of risk and exposure. Intuition would have it the safest and most conservative thing to do with the money you have saved up is nothing!",
        ],
        
        delaySpeed:2000,
    })
  return (
    <><motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="h-screen pt-24 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="md:relative rounded-full h-26 w-36 mx-auto object-cover"
        src="https://i.ibb.co/3ksRTKS/Free-Sample-By-Wix-1.jpg" alt="" />
      <div className="z-20">
        <h2 className="md:text-sm text-xs text-center uppercase text-[#a8b2d1] pl-3 pb-2 tracking-[15px]">Portfolio Risk Optimizer</h2>
        <h1 className="text-2xl md:pl-[15rem] md:pr-[15rem] md:text-4xl text-[#ccd6f6] lg:text-4xl font-semibold px-18">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h1 className="pt-8 text-[#a8b2d1]">However, there are many factors that would potentially make this not the case.</h1>
      </div>
      
     <div className="flex md:invisible items-end justify-center mb-11 pr-10 animate-pulse">
      <img
        
      className='h-8 w-8 ml-8 filter invert' src="https://img.icons8.com/ios/50/null/expand-arrow--v1.png" alt="scroll" title="scroll" />
     </div>
    </motion.div><footer className=" sticky bottom-5 w-full ">
        <div className="flex  items-end justify-center pr-10 animate-pulse">
          <motion.img
           initial={{
            x: -300,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
            className="h-16 w-16 ml-8 filter invert" 
            src="https://static.thenounproject.com/png/393311-200.png" alt="scroll" title="scroll" />
            
        </div>
        <div className="flex pl-[3rem] mx-auto text-center items-end justify-center pr-10 animate-pulse">
          <motion.div
           initial={{
            x: -300,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
            className="">
             <em>Created with React, NextJS, TypeScript, TailwindCSS, Sanity.io API, and Framer Motion</em>
        </motion.div>
        </div>
      </footer></>
  )
  
}