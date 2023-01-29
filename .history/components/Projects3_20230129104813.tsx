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
                                <div className='space-y-5 md:px-10 lg:max-w-xl text-xs sm:pb-5 md:text-base lg:pl-10 lg:pb-4'><span className='text-[#64ffda]'>{project.linkToBuild}</span></div>
                                </div>
                                
                                <div className="space-y-6  md:w-[31rem] max-w-xl flex-col flex">
                     
                               
                            </div>
                            
                        </div>
                        return (
        <div className='m-auto py-6 text-md text-center text-[#a8b2d1] sm:overflow-y-auto lg:overflow-visible lg:text-lg sm:text-md scrollbar-thin scrollbar-thumb-[#64ffda]/40 justify-center max-w-5xl max-h-96' dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com' />" }} />
      );
    }
                        
                    </div>

                ))}

            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </div>

    )
}

export default Projects3