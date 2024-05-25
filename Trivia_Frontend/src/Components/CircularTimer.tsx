import React, { useEffect, useState } from "react";
import "../Styles/CircularTimer.scss";

interface CircularTimerProps {
  duration: number;
  onComplete: () => void;
}

const CircularTimer: React.FC<CircularTimerProps> = ({
  duration,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * circumference;

  return (
    <div className="circular-timer">
      <svg width="120" height="120">
        <circle
          className="circular-timer__background"
          cx="60"
          cy="60"
          r={radius}
        />
        <circle
          className="circular-timer__progress"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
      <div className="circular-timer__text">{timeLeft}s</div>
    </div>
  );
};

export default CircularTimer;
