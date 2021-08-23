import { ReactNode } from 'react';

export type DefaultProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Occurrence = {
  local: string;
  area: string;
  priority: string;
  equipmentCode: string;
  description: string;
  date: string;
  status: string;
};

export type OccurrencesData = Record<
  string,
  {
    occurrence: Occurrence;
    user: User;
  }
>;

export type Occurrences = {
  id?: string;
  occurrence: Occurrence;
  user: User;
  endedAt?: string | undefined;
};
