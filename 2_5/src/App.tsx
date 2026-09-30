import { AuthProvider } from './context/AuthProvider';
import { Layout } from './components/layout/Layout';
import { Page } from './components/layout/Page';

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Page />
      </Layout>
    </AuthProvider>
  );
}
