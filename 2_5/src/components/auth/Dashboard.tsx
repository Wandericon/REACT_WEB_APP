import { useAuth } from '../../hooks/useAuth';

export function Dashboard() {
  const { user, logout } = useAuth();
  if (!user) return null;
  return (
    <div>
      <h2>Добро пожаловать, {user.name}!</h2>
      <p>Обновите страницу — сессия восстановится из localStorage.</p>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}
