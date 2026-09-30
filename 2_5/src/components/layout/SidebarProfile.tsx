import { useAuth } from '../../hooks/useAuth';

export function SidebarProfile() {
  const { user } = useAuth();
  return user ? (
    <dl>
      <dt>Имя</dt>
      <dd>{user.name}</dd>
      <dt>ID</dt>
      <dd className="mono">{user.id.slice(0, 8)}…</dd>
    </dl>
  ) : (
    <p className="muted">Данных нет</p>
  );
}
