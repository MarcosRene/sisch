import { Layout, Navigation } from '../../../components';

import { DefaultProps } from '../../../types';

export function DefaultLayout({ children }: DefaultProps) {
  return (
    <Layout>
      {children}
      <Navigation />
    </Layout>
  );
}
