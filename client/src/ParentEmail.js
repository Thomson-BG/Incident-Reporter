import React from 'react';

const ParentEmail = ({ email }) => {
  return (
    <div>
      <h2>Parent Email</h2>
      <pre>{email}</pre>
    </div>
  );
};

export default ParentEmail;
