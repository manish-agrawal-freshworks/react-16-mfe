import React from 'react';
import Component from './component';

function Home() {
  const navigateToHostRoute = ({ route }) => {
    return parent.postMessage(
      { type: 'NAVIGATE', payload: { route } },
      window.location.origin,
    );
  };

  return (
    <section>
      <div>v16 - React MFE app home page</div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
        Redirect to Host App
      </button>
      <br />
      <Component />
    </section>
  );
}

export default Home;
