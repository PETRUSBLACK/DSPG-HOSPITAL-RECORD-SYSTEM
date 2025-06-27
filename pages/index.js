import { useEffect, useState } from 'react';
import PatientForm from '../components/PatientForm';
import PatientList from '../components/PatientList';

export default function Home() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('/api/patients')
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  const handleAdd = (patient) => {
    setPatients(prev => [...prev, patient]);
  };

  const handleDelete = async (id) => {
    await fetch('/api/patients', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setPatients(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Hospital Record Management</h1>
      <PatientForm onAdd={handleAdd} />
      <PatientList patients={patients} onDelete={handleDelete} />
    </div>
  );
}
