import React, { useState } from "react";
export function App() {
  const [streak, setStreak] = useState(0);
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);
  const today = new Date().toDateString();

  function playToday() {
    if (lastPlayed === today) return; // already played
    if (lastPlayed && lastPlayed !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      setStreak((s) => (lastPlayed === yesterday ? s + 1 : 1));
    } else {
      setStreak(1);
    }
    setLastPlayed(today);
  }

  return (
    <div className="app">
      <h1>Daily Quiz</h1>
      <p>Come back every day to increase your streak and unlock rewards.</p>
      <div className="card">
        <p>
          Current streak: {streak} day{streak === 1 ? "" : "s"}
        </p>
        <button onClick={playToday} disabled={lastPlayed === today}>
          {lastPlayed === today ? "Come back tomorrow" : "Play today"}
        </button>
      </div>
    </div>
  );
}
