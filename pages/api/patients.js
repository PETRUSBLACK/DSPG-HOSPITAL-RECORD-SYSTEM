let patients = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(patients);
  } else if (req.method === 'POST') {
    const patient = req.body;
    patient.id = Date.now();
    patients.push(patient);
    res.status(201).json({ message: 'Patient added', patient });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    patients = patients.filter(p => p.id !== id);
    res.status(200).json({ message: 'Deleted successfully' });
  } else {
    res.status(405).end();
  }
}
