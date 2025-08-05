import React, { useState, useEffect } from 'react';

const SavedReports = () => {
  const [savedReports, setSavedReports] = useState([]);

  useEffect(() => {
    const reports = JSON.parse(localStorage.getItem('incident-reports')) || [];
    setSavedReports(reports);
  }, []);

  const handleDelete = (id) => {
    const updatedReports = savedReports.filter((report) => report.id !== id);
    setSavedReports(updatedReports);
    localStorage.setItem('incident-reports', JSON.stringify(updatedReports));
  };

  return (
    <div>
      <h2>Saved Reports</h2>
      {savedReports.map((report) => (
        <div key={report.id}>
          <pre>{report.report}</pre>
          {report.email && <pre>{report.email}</pre>}
          <button onClick={() => handleDelete(report.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SavedReports;
