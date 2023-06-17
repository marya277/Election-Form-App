"use client";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import ElectionContext from "../components/ElectionContext";

const ElectionList = () => {
    const { electionData, updateElectionData } = useContext(ElectionContext);

    useEffect(() => {
    const fetchData = async () => {
        try {
        // Realizar la llamada GET a la API para obtener los datos
        const response = await axios.get("http://localhost:3004/electionData");

        // Actualizar el estado con los datos obtenidos
        updateElectionData(response.data);
        } catch (error) {
        console.error(error);
        }
    };

    fetchData();
    }, []);

    return (
    <div className="container mx-auto px-5">
        <h2 className="text-center text-2xl font-bold mb-4">Election Data</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b">Year</th>
                <th className="py-2 px-4 border-b">Party</th>
                <th className="py-2 px-4 border-b">County</th>
                <th className="py-2 px-4 border-b">Vote Count</th>
            </tr>
            </thead>
            <tbody>
            {electionData.map((data) => (
                <tr key={data.id}>
                <td className="py-2 px-4 border-b">{data.year}</td>
                <td className="py-2 px-4 border-b">{data.party}</td>
                <td className="py-2 px-4 border-b">{data.county}</td>
                <td className="py-2 px-4 border-b">{data.voteCount}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default ElectionList;
