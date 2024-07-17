import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router.jsx';

export const mountReactApp = ({ element, options }) => {
  console.debug(options);
  const appRoot = element || document.getElementById('root');
  // const root = ReactDOM.createRoot(appRoot);

  //  initialize services from using options passed from the host
  //  eg: coreServices.init(options);

  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={generateRouter({ basename: '/' })} />
    </React.StrictMode>,
    appRoot
  );
};
