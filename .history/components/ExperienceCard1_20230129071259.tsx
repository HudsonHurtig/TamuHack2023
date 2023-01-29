import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
type Props = {}

export default function ExperienceCard({ }: Props) {
    
    return <Link href='#projects1'><div><button><article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-
    [500px] sm:w-[600px] xl:w-[786px] snap-center bg-[#292929] mb-5 p-5 pb-3 md:mb-3 md:p-3 md:pb-3 md:hover:opacity-100 md:opacity-80
     transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,

            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-24 invert md:w-27 md:h-27 rounded-md xl:w-[300px] xl:h-[200px]
         object-center"
            src=
            "https://i.ibb.co/YjHFypj/ac32d8d7810328ab827142c1434ba10f-removebg-preview.png"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-left text-[#ccd6f6] font-light">Slow and Steady Wins the Race</h4>
            <p className="font-bold items-center sm:text-xl text-left lg:text-2xl nt-1">Long Term, Shorter Risk</p>
            <div className="flex  lg:space-x-2 my-2 sm:space-x-1">
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/angularjs.png" alt='AngularJS' title='AngularJS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/css3.png" alt='CSS' title='CSS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/344/node-js.png" alt='NodeJS' title='NodeJS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/amazon-web-services.png" alt='AWS' title='AWS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png" alt='Django' title='Django' />



                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            
            <p className="uppercase py-5 text-left text-gray-300 lg:text-m text-sm">
                Pros
                </p>

                <ul className=" overflow-y-auto  max-w-[15rem] text-left text-[#a8b2d1] md:max-w-lg lg:max-w-xl  list-disc md:mt-3 space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Low risk: Safe investments such as savings accounts, certificates of deposit (CDs), and government bonds generally have a <span className=" decoration-[#64ffda] text-[#64ffda]">low risk</span> of losing principal.</li>
                <li>• Predictability: The return on safe investments is usually <span className=" decoration-[#64ffda] text-[#64ffda]">predictable</span> and <span className=" decoration-[#64ffda] text-[#64ffda]">consistent</span>, which can make it easier to plan for the future.
</li>
            </ul>
            <p className="uppercase text-left py-5 text-[#ccd6f6] lg:text-m text-sm">
                Cons
            </p>
            <ul className=" overflow-y-auto  max-w-[15rem] text-left text-[#a8b2d1] md:max-w-lg lg:max-w-xl  list-disc md:mt-3 space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Low returns: Safe investments tend to have <span className=" decoration-[#64ffda] text-[#64ffda]">lower returns</span> than <span className=" decoration-[#64ffda] text-[#64ffda]">riskier</span> investments, such as stocks or real estate.</li>
                <li>• Inflation risk: The returns on safe investments may not keep up with inflation, which means the purchasing power of the investment will <span className=" decoration-[#64ffda] text-[#64ffda]">decrease</span> over time.
</li>
            </ul>
        </div>
    </article>
    </button>
    </div>
    </Link>
}