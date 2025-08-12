import React, { useState } from 'react';
export function App() {
  const [view, setView] = useState('value');
  const isAuthenticated = false;
  async function authenticate() { /* prompt with reason */ }
  return (
    <div className="app">
      {view==='value' && (
        <>
          <h1>Track your crypto portfolio</h1>
          <p>Real-time updates and alerts</p>
          <button onClick={async()=>{ ${immediateAuth ? "await authenticate();" : ""} setView('portfolio'); }}>Get started</button>
          <button onClick={()=>setView('demo')}>Try demo first</button>
        </>
      )}
      {view==='demo' && <h2>Demo portfolio</h2>}
      {view==='portfolio' && <h2>Your portfolio</h2>}
    </div>
  );
}
