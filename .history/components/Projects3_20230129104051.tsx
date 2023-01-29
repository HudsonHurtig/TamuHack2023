/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';


type Props = {
    projects: Project[];
}

const Projects3 = ({ projects }: Props) => {
    const rows = [
        { id: 1, name: "John Doe", age: 32 },
        { id: 2, name: "Jane Doe", age: 28 },
        { id: 3, name: "Jim Brown", age: 40 }
      ];

    return (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Projects3