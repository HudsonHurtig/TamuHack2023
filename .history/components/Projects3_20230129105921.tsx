/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';


type Props = {
    projects: Project[];
}

const Projects3 = ({ projects }: Props) => {

    return (
        <div className="min-h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0 pt-24">
            <h3 className="pl-5 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">Slow and Steady Wins The Race</h3>

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
                                


<a href="https://www.example.com" className="fixed inset-0">Visit Example.com</a>
  



                            </div>
                            <div className='flex-auto'>
                                <div className='space-y-5 md:px-10 lg:max-w-xl text-xs sm:pb-5 md:text-base lg:pl-10 lg:pb-4'><span className='text-[#64ffda]'>{project.linkToBuild}</span></div>
                                </div>
                                
                                <div className="space-y-6  md:w-[31rem] max-w-xl flex-col flex">

                                    
                               
                            </div>
                            
                        </div>
                        <p className="m-auto py-6 text-md text-center text-[#a8b2d1] sm:overflow-y-auto lg:overflow-visible lg:text-lg sm:text-md scrollbar-thin scrollbar-thumb-[#64ffda]/40 justify-center max-w-5xl max-h-96">
                        Safer investments, like bonds, index funds, and low risk stocks are a much slower way of accumulating wealth.
That being said, they are a steady stream of income, with far less potential for losses compared to higher risk investments.
It is important to diversify your portfolio with both high and low risk investments, and lower risk investments are certainly easier to make if you have many financial responsibilities.
Low risk stocks tend to be more well-established companies with long histories of growth.
Food companies such as Coca-Cola, utilities such as Duke Energy, healthcare such as Pfizer are all examples of these.
Dividend stocks, like Microsoft, are another kind of stock that pay a consistent dividend to shareholders.
Arguably the safest option, however, are treasury bonds. Backed by the US Government, these bonds have almost zero risk,as the only potential risk is geopolitical instability.
Company bonds are similar, as their main risk is essentially the company going under or going through a significant loss. 
The downside to these bonds is that they are very long term, often in the range of 10, 20, or 30 years before you receive the payout.

                        </p>
                    </div>

                ))}

            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </div>

    )
}

export default Projects3