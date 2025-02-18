// src/components/layout/withLayout.tsx
import React from 'react';
import Layout from './Layout';

interface WithLayoutProps {
  // Puedes agregar props adicionales si es necesario
}

const withLayout = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & WithLayoutProps) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;