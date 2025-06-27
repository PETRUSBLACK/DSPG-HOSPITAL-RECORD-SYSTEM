import { useState } from 'react';

export default function PatientForm({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patient = { name, age, diagnosis };
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patient),
    });
    const data = await res.json();
    onAdd(data.patient);
    setName('');
    setAge('');
    setDiagnosis('');
  };

  const formStyle = {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    display: 'block',
    marginBottom: '8px',
    padding: '8px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    backgroundColor: '#3B82F6', // Tailwind's blue-500
    color: 'white',
    padding: '8px 16px',
    marginTop: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input style={inputStyle} placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input style={inputStyle} placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <input style={inputStyle} placeholder="Diagnosis" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} />
      <button style={buttonStyle} type="submit">Add Patient</button>
    </form>
  );
}
