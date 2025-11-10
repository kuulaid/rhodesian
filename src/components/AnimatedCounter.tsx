import { useEffect, useState } from "react";

interface AnimatedRandomCounterProps {
  value: number;
  duration?: number; // total animation duration in ms
  intervalTime?: number; // how fast the numbers update
}

export default function AnimatedRandomCounter({
  value,
  duration = 1000,
  intervalTime = 50,
}: AnimatedRandomCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;

      if (elapsed >= duration) {
        setCount(value); // final value
        clearInterval(interval);
      } else {
     
        setCount(Math.floor(Math.random() * value));
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value, duration, intervalTime]);

  return <>{count}</>;
}
