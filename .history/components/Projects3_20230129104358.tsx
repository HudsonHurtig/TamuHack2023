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
        <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com' />" }} />
      );
    }

export default Projects3




