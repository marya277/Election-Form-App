"use client";
import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import ElectionContext from '../components/ElectionContext';

const ElectionForm = () => {
  const { updateElectionData } = useContext(ElectionContext);
  const [year, setYear] = useState('');
  const [party, setParty] = useState('');
  const [county, setCounty] = useState('');
  const [voteCount, setVoteCount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los campos del formulario antes de enviar los datos
    if (!year || !party || !county || !voteCount) {
      Swal.fire('Error', 'Por favor, completa todos los campos', 'error');
      return;
    }

    // Evitar solicitudes duplicadas mientras se procesa una solicitud anterior
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // Realizar la llamada POST a la API
      const response = await axios.post('http://localhost:3004/electionData', {
        year,
        party,
        county,
        voteCount
      });

      // Llamar a la función de actualización del estado en ElectionList
      updateElectionData(response.data);

      Swal.fire('¡Éxito!', 'Los datos han sido guardados correctamente', 'success');

      // Reiniciar los campos del formulario
      setYear('');
      setParty('');
      setCounty('');
      setVoteCount('');
    } catch (error) {
      Swal.fire('Error', 'Ocurrió un error al guardar los datos', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (year && party && county && voteCount) {
      const newElectionData = { year, party, county, voteCount };
      updateElectionData(newElectionData);
    }
  }, [year, party, county, voteCount]);

  return (
    <div className="bg-gray-100 md:w-1/2 lg:w-2/5">
  <form onSubmit={handleSubmit} className="max-w-full mx-auto p-5 space-y-5 items-center">
    <h3 className="text-center font-bold text-white bg-indigo-500 py-4 mb-5 w-full">Election</h3>

    <label htmlFor="year" className="font-bold mt-2 block">
      Year:
    </label>
    <input
      type="number"
      id="year"
      name="year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      placeholder="Enter year"
      required
      min={1000}
      max={9999}
      pattern="^(?!00)[0-9]{4}$"
      className="border-gray-300 border py-1 px-3 mb-3 w-full"
    />

    <label htmlFor="party" className="font-bold my-2 block">
      Political Party:
    </label>
    <select
      id="party"
      name="party"
      value={party}
      onChange={(e) => setParty(e.target.value)}
      required
      className="border-gray-300 border py-1 px-3 mb-3 w-full"
    >
      <option value="">Select one</option>
      <option value="democrata">Democrata</option>
      <option value="republicano">Republicano</option>
      <option value="nacionalista">Nacionalista</option>
    </select>

    <label htmlFor="county" className="font-bold my-2 block">
      County:
    </label>
    <select
      id="county"
      name="county"
      value={county}
      onChange={(e) => setCounty(e.target.value)}
      required
      className="border-gray-300 border py-1 px-3 mb-3 w-full"
    >
      <option value="">Select one</option>
      <option value="Florida">Florida</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Arizona">Arizona</option>
    </select>

    <label htmlFor="voteCount" className="font-bold my-2 block">
      Vote Count:
    </label>
    <input
      type="number"
      id="voteCount"
      name="voteCount"
      value={voteCount}
      onChange={(e) => setVoteCount(e.target.value)}
      required
      min={1}
      max={99999999999}
      className="border-gray-300 border py-1 px-3 mb-3 w-full"
    />

    <button
      type="submit"
      disabled={loading}
      className="bg-indigo-600 hover:bg-blue-400 uppercase text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer transition-all"
    >
      {loading ? 'Guardando...' : 'Submit'}
    </button>
  </form>
</div>

  );
};

export default ElectionForm;
