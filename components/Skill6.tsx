import React from 'react'
import {motion} from "framer-motion"
type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className="group relative flex curser-pointer">
    <motion.img 
        initial={{
            x:directionLeft ? -200:70,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src="https://img.icons8.com/color/344/javascript--v1.png"
        alt='javaScript'
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-28 xl:h-28  filter group-hover:grayscale transition duration-300 ease-in-out"
    />
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 
    rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
        </div>
    </div>
</div>
  )
}

export default Skill