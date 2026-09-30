import { useAuth } from '../../hooks/useAuth';

export function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) {
    return <span className="muted">Вы не вошли</span>;
  }

  return (
    <div className="user-menu">
      <span>👤 {user.name}</span>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}
