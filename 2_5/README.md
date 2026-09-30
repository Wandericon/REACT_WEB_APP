# Тема 2.5. Context API — AuthContext

Запуск: `npm install && npm run dev`

- `src/context/types.ts` — типы User и AuthContextValue
- `src/context/AuthContext.ts` — createContext<AuthContextValue | undefined>
- `src/context/AuthProvider.tsx` — useState + useEffect (восстановление из localStorage)
- `src/hooks/useAuth.ts` — useContext + проверка на undefined
- Компоненты с useAuth на разной глубине: Header, UserMenu, SidebarProfile, AuthGate, LoginForm, Dashboard
