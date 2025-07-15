import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Layout from '../../components/Layout';

export default function Baby() {{
  const [formData, setFormData] = useState({{ name: '', date: '', location: '', rsvp: '' }});
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {{
    setFormData({{ ...formData, [e.target.name]: e.target.value }});
  }};

  const generateQR = () => {{
    const text = `Event: ${'{'}formData.name{'}'}\nDate: ${'{'}formData.date{'}'}\nLocation: ${'{'}formData.location{'}'}\nRSVP: ${'{'}formData.rsvp{'}'}`;
    setQrValue(text);
  }};

  return (
    <Layout>
      <h2>👶 Baby Shower QR Generator</h2>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>Event Name</label>
        <input name="name" onChange={handleChange} style={{ width: '100%', marginBottom: '10px' }} />

        <label>Date & Time</label>
        <input name="date" onChange={handleChange} style={{ width: '100%', marginBottom: '10px' }} />

        <label>Location</label>
        <input name="location" onChange={handleChange} style={{ width: '100%', marginBottom: '10px' }} />

        <label>RSVP Link (optional)</label>
        <input name="rsvp" onChange={handleChange} style={{ width: '100%', marginBottom: '10px' }} />

        <button onClick={generateQR} style={{ marginTop: '10px', padding: '10px', background: '#333', color: '#fff', width: '100%' }}>Generate QR</button>

        { '{' }qrValue && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <QRCodeCanvas value={qrValue} size={200} />
            <p>Right-click the QR to save it</p>
          </div>
        ){ '}' }
      </div>
    </Layout>
  );
}}
