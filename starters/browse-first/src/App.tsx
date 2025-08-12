import React, { useState } from 'react';
export function App() {
  const [view, setView] = useState('browse');
  const isAuthenticated = false; // wire real auth
  async function authenticate() { /* prompt with reason */ }
  return (
    <div className="app">
      {view==='browse' && (
        <>
          <h1>Play daily trivia, win USDC</h1>
          <button onClick={async ()=>{ if(!isAuthenticated){ await authenticate(); } setView('play'); }}>Start playing</button>
          <button onClick={()=>setView('personalize')}>Personalize experience</button>
        </>
      )}
      {view==='personalize' && <>
        <h2>Personalize</h2>
        <button onClick={()=>setView('browse')}>Back</button>
      </>}
      {view==='play' && <h2>Game</h2>}
    </div>
  );
}
