import { AuthProvider } from './auth';

import { DefaultProps } from '../types';

export function AppProvider({ children }: DefaultProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
