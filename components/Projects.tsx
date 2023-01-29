/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    
    const data = {
        labels: ['Savings', 'Bonds', 'Stocks'],
        datasets: [{
            label: 'Percent',
            data: [25,25,50],
            backgroundColor: ['black','red', 'blue'],
            borderColor: ['gray', 'gray', 'gray'],
            borderWidth: 1,
            hoverBackgroundColor: "green",
            
            
        }]
    }

    const options = {

    }
    return (
        
        <motion.div
        initial={{
           x:-500,
           opacity:0,
           scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration: 1.5,
        }} className="min-h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0 pt-24">
            <h3 className="pl-5 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">High Risk, High Reward</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
        scrollbar-track-gray-400/20 scrollbar-thumb-[#a8b2d1]/40">
                {projects?.map((project, i) => (
                    <div key={project._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 itmes-center justify-center px-[3rem] md:px-44">
                        <div className='md:flex md:flex-row'>
                            <div className='flex-auto'>
                                <div className=' text-[#64ffda] pt-[-3rem] md:pb-10 md:pr-24 max-w-xl text-xs sm:pb-4 flex lg:pl-11 lg:mx-auto justify-center text-center invisible md:visible '>
                                    (Hover Over Image to Expand)
                                </div>

                                <motion.img
                                    initial={{
                                        opacity: 0
                                    }}
                                    transition={{ duration: 5 }}
                                    whileHover={{scale: 2.2}}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:h-[26rem] lg:w-[37rem]  pr-5 mt-[-2rem] pt-[3rem] hidden md:block"
                                    src="https://www.gzeromedia.com/media-library/the-graphic-truth-50-years-of-us-inflation-vs-interest-rates.png?id=27667111&width=2400&height=2100"
                                    alt=""
                                />
                                <motion.img
                                    initial={{
                                        opacity: 0
                                    }}
                                    transition={{duration:1.2}}
                                    whileInView={{opacity:1, y:0}}
                                    className="lg:h-72 lg:w-96 mx-auto mt-[-1rem] object-cover pt-[2rem] md:hidden"
                                    src="https://www.gzeromedia.com/media-library/the-graphic-truth-50-years-of-us-inflation-vs-interest-rates.png?id=27667111&width=2400&height=2100"
                                    alt=""
                                />
                            </div>
                            <div className='flex-auto'>
                                <div className='space-y-5 md:px-10 lg:max-w-xl text-xs sm:pb-5 md:text-base lg:pl-10 lg:pb-4'><span className='text-[#64ffda]'>{project.linkToBuild}</span></div>
                                </div>
                                
                                <div className="space-y-6  md:w-[31rem] max-w-xl flex-col flex">
                                <Doughnut
                                data = {data}
                                options = {options}

                                ></Doughnut>
                                    
                               
                            </div>
                            
                        </div>
                        <p className="m-auto py-6 text-md text-center text-[#a8b2d1] sm:overflow-y-auto lg:overflow-visible lg:text-lg sm:text-md scrollbar-thin scrollbar-thumb-[#64ffda]/40 justify-center max-w-5xl max-h-96">
                        In general, the 'riskier' the investment the higher the potential returns. 
But the potential returns are just that: potential, so it is important to be risky responsibly.
That being said, difersifying your portfolio with riskier investments could actually reduce overall risk.
Technology stocks and cryptocurrency IE Tesla, Nvidia, and Bitcoin have a very high volatility, allowing for the potential for very high returns, and losses.
The volatility and potential for returns can be measured by Sharpe, and sortino ratios, as well as beta values. 
There is nothing wrong with taking more risks, given there is inherent risk in any decsion and gaurenteed reduction in buying power if no risk is taken, 
but one should never put all their eggs in one basket.

Tell Me More = button that goes to higher in depth explanations of everything with hard data
                        </p>
                    </div>

                ))}

            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>

    )
}

export default Projects