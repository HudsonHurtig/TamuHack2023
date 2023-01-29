import React from 'react'
import { motion } from "framer-motion"
import TypeScript from './Skill1'
import Angular from './Skill2'
import Node from './Skill3'
import HTML from './Skill4'
import CSS from './Skill5'
import JS from './Skill6'
import AWS from './Skill7'
import SQL from './Skill8'
import GCP from './Skill9'
import Mongo from './Skill10'
import Python from './Skill11'
import Go from './Skill12'
import OpenCV from './Skill13'
import REACT from './Skill14'
import Next from './Skill15'
import Tailwind from './Skill16'
import Django from './Skill17'
import Solidity from './Skill18'
import Jquery from './Skill19'
import Java from './Skill20'


type Props = {}

const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="min-h-screen flex md:relative flex-col text-center md:text-left text-2xl max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center pt-24">
            <h3 className="md:mt-0 pl-5 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            <p className="uppercase tracking-[3px] text-gray-500 text-sm invisible md:visible mb-10">
                Hover over a skill for currenct proficiency
            </p>
            <p className="uppercase tracking-[3px] pb-6 mt-[-1rem] text-gray-500 text-sm md:invisible mb-10">
                Tap on skill for currenct proficiency (Check out the hover feature on a computer!)
            </p>

            <div className="grid grid-cols-4 gap-t pt-15">
                <TypeScript />
                <Angular />
                <Node />
                <HTML />
                <CSS />
                <JS />
                <AWS />
                <SQL />
                <GCP />
                <Mongo />
                <Python />
                <Go />
                <OpenCV />
                <REACT />
                <Next />
                <Tailwind />
                <Django />
                <Solidity />
                <Jquery />
                <Java />
            </div>
        </motion.div>
    )
}

export default Skills