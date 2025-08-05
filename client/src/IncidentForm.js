import React, { useState } from 'react';

const IncidentForm = ({ setIncidentReport, setParentEmail }) => {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [actionsTaken, setActionsTaken] = useState('');
  const [generateParentEmail, setGenerateParentEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const report = `
      **Incident Report**

      **Student ID#:** ${studentId}
      **Date:** ${date}
      **Time/Period:** ${time}
      **Incident Description:** ${incidentDescription}
      **Actions Taken:** ${actionsTaken}
    `;

    setIncidentReport(report);

    if (generateParentEmail) {
      const email = `
        Dear Parent/Guardian,

        This email is to inform you of an incident that occurred today involving your child, [STUDENT].

        **Incident Description:**
        ${incidentDescription}

        **Actions Taken:**
        ${actionsTaken}

        Please feel free to contact me if you have any questions.

        Sincerely,
        [Teacher's Name]
      `;
      setParentEmail(email);
    } else {
      setParentEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student ID#"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time/Period"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <textarea
        placeholder="Incident Description"
        value={incidentDescription}
        onChange={(e) => setIncidentDescription(e.target.value)}
      />
      <textarea
        placeholder="Actions Taken"
        value={actionsTaken}
        onChange={(e) => setActionsTaken(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={generateParentEmail}
          onChange={(e) => setGenerateParentEmail(e.target.checked)}
        />
        Generate Parent Email
      </label>
      <button type="submit">Generate Report</button>
    </form>
  );
};

export default IncidentForm;
