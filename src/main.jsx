import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router.jsx';
import Comoponent from './pages/component.jsx';

const componentMap = {
  'compOnly': Comoponent
}

export const mountReactApp = ({ element, options }) => {
  console.debug(options);
  const appRoot = element || document.getElementById('root');
  // const root = ReactDOM.createRoot(appRoot);

  //  initialize services from using options passed from the host
  //  eg: coreServices.init(options);

  const compName = options?.compName;
  if (compName && compName != '' && Object.keys(componentMap).includes(compName)) {
    const Ccomponent = componentMap[compName];
    ReactDOM.render(
      <Ccomponent />,
      appRoot
    );
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <RouterProvider router={generateRouter({ basename: '/' })} />
      </React.StrictMode>,
      appRoot
    );
  }
};
