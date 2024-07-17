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
      <button onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
        Redirect to Host App
      </button>
      <Component />
    </section>
  );
}

export default Home;
