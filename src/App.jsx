import React from "react";
import moment from 'moment';
import Comoponent from "./pages/component";
import { MFEController } from './controller';

const App = (props) => {
  const instanceId = props.instanceId;
  const shellUrl = props.shellUrl;
  console.log('app props ', props);

  const alertOnShell = () => {
    console.log('alert clicked - 16');
    MFEController.namespace(instanceId).publish({
      eventName: 'from_child_react_16',
      action: {
        type: 'from_child react-16-mfe',
        sender: 'react-16-mfe',
      },
      payload: { key: 'from child react-16-mfe' },
      targetOrigin: shellUrl,
    });
  };

  const navigateToHostRoute = ({ route }) => {
    return parent.postMessage(
      { type: 'NAVIGATE', payload: { route } },
      window.location.origin,
    );
  };
  
  return (
      <section>
          <div><b>v16</b> - React MFE app home page</div>
          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
          Redirect to Host App
          </button> */}
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => alertOnShell()}>
            Alert on Ember
          </button>
          <br />
          <Comoponent />
      </section>
  )
}

export default App;
