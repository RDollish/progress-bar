import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [OGprogress, setOGProgress] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const fakeEndNumber = 67;

  useEffect(() => {
    // Set up a timer to increment progress every 5 seconds
    const timer = setInterval(() => {
      if (progress < fakeEndNumber) {
        setProgress((prevProgress) =>
          Math.min(prevProgress + 6, fakeEndNumber)
        );
      }
    }, 5000);

    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, [progress, fakeEndNumber]);

  useEffect(() => {
    // Set OGprogress only once on the first render
    if (!initialized) {
      setOGProgress(0); // Set your initial OGprogress value here
      setInitialized(true);
    }
  }, [initialized]);

  // Calculate the percentage of progress
  const progressPercentage = (progress / fakeEndNumber) * 100;

  return (
    <div className="App">
      <ProgressBar
        animated
        now={progressPercentage}
        label={`${progressPercentage.toFixed(2)}%`}
      />
    </div>
  );
}

export default App;
