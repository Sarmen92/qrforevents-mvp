import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Wedding() {
  return (
    <Layout>
      <h2>💍 Wedding QR Generator</h2>
      <p>Coming soon: Create and customize your {event_title.lower()} QR invite here.</p>
      <Link href="/">⬅ Back Home</Link>
    </Layout>
  );
}
