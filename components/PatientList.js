export default function PatientList({ patients, onDelete }) {
    return (
      <>
              <style>
          {`
            .container {
              margin-top: 1.5rem;
            }
            .card {
              border: 1px solid #ccc;
              padding: 1rem;
              margin-bottom: 0.5rem;
              border-radius: 0.5rem;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .delete-button {
              background-color: #ef4444;
              color: white;
              padding: 0.25rem 0.75rem;
              margin-top: 0.5rem;
              border: none;
              border-radius: 0.25rem;
              cursor: pointer;
            }
            .delete-button:hover {
              background-color: #dc2626;
            }
          `}
        </style>


      <div className="mt-6">
        {patients.map(patient => (
          <div key={patient.id} className="border p-4 mb-2 rounded shadow">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <button onClick={() => onDelete(patient.id)} className="bg-red-500 text-white px-3 py-1 mt-2">Delete</button>
          </div>
        ))}
      </div>
      </>
    );
  }
  

