import { Sidebar } from './Sidebar';
import { AuthGate } from '../auth/AuthGate';

export function Page() {
  return (
    <div className="page">
      <Sidebar />
      <section className="panel">
        <AuthGate />
      </section>
    </div>
  );
}
