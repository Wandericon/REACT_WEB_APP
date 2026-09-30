import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from './UserMenu';

export function Header() {
  const { user } = useAuth();
  return (
    <header className="header">
      <h1>Context API demo</h1>
      <span className="status">{user ? 'Онлайн' : 'Гость'}</span>
      <UserMenu />
    </header>
  );
}
