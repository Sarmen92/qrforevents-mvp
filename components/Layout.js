export default function Layout({ children }) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: '#f8f6f4',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>🎉 QRforEvents</h1>
        <p>Smart QR Invitations for Any Occasion</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
