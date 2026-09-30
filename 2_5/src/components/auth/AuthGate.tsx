import { useAuth } from '../../hooks/useAuth';
import { LoginForm } from './LoginForm';
import { Dashboard } from './Dashboard';

export function AuthGate() {
  const { user } = useAuth();
  return user ? <Dashboard /> : <LoginForm />;
}
