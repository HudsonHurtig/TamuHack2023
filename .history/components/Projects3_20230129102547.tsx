/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';
import Papa from "papaparse";


interface Row {
    id: number;
    name: string;
    age: number;
}
  
const Projects3 = () => {
    const rows: Row[] = [
        { id: 1, name: 'John Doe', age: 32 },
        { id: 2, name: 'Jane Doe', age: 28 },
        { id: 3, name: 'Jim Smith', age: 40 },
      ];
  
    const Table = () => {
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
    };

    return (
        <Table />
    );
};

export default Projects3;
