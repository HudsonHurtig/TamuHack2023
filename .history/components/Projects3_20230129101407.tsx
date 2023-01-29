/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';
import Papa from 'papaparse';

type Props = {
    projects: Project[];
}

const Projects3 = ({projects }: Props) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      Papa.parse('path/to/file.csv', {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
          setData(results.data);
        }
      });
    }, []);
    
    return (
        <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Projects3

