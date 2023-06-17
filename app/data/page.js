
"use client"
import React, { useState } from 'react';
import ElectionForm from '../components/ElectionForm';
import ElectionList from '../components/ElectionList';
import ElectionContext from '../components/ElectionContext';

const PageData = () => {
  const [electionData, setElectionData] = useState([]);

  const updateElectionData = (data) => {
    setElectionData((prevData) => [...prevData, data]);
  };

  return (
    <ElectionContext.Provider value={{ electionData, updateElectionData }}>
      <div>
        <div className="mt-12  md:flex bg-white p-10">
          <ElectionForm updateElectionData={updateElectionData} />
          <ElectionList />
        </div>
      </div>
    </ElectionContext.Provider>
  );
};

export default PageData;
