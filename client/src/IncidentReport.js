import React from 'react';

const IncidentReport = ({ report }) => {
  return (
    <div>
      <h2>Incident Report</h2>
      <pre>{report}</pre>
    </div>
  );
};

export default IncidentReport;
