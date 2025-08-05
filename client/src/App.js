import React, { useState } from 'react';
import './App.css';
import IncidentForm from './IncidentForm';
import IncidentReport from './IncidentReport';
import ParentEmail from './ParentEmail';
import SavedReports from './SavedReports';

function App() {
  const [incidentReport, setIncidentReport] = useState('');
  const [parentEmail, setParentEmail] = useState('');

  return (
    <div className="App">
      <h1>Incident Report Generator</h1>
      <IncidentForm
        setIncidentReport={setIncidentReport}
        setParentEmail={setParentEmail}
      />
      {incidentReport && <IncidentReport report={incidentReport} />}
      {parentEmail && <ParentEmail email={parentEmail} />}
      <SavedReports />
    </div>
  );
}

export default App;
