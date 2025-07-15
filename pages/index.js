import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>Choose your event type:</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'
      }}>
        <Link href="/events/wedding">💍 Wedding</Link>
        <Link href="/events/baby">👶 Baby Shower</Link>
        <Link href="/events/birthday">🎉 Birthday</Link>
        <Link href="/events/business">💼 Business</Link>
      </div>
    </Layout>
  );
}
// force redeploy
