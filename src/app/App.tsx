import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../helpers/classNames/classNames/classNames';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
      <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="">
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
