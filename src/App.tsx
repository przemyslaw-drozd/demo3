import React from 'react';
import ResponsiveTable from './components/ResponsiveTable';

interface AppProps {
  initialCount?: number;
}

const App: React.FC<AppProps> = () => {
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ResponsiveTable />
    </div>
  );
};

export default memo(App);
