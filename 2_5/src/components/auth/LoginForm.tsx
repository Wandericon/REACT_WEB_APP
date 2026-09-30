import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';

export function LoginForm() {
  const { login } = useAuth();
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Вход</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
        autoFocus
      />
      <button type="submit" disabled={name.trim() === ''}>
        Войти
      </button>
    </form>
  );
}
