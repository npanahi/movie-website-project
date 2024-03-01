import React, { useState, useEffect } from "react";

function Timer({ maximumDate }) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateRemainingTime = () => {
      const maximumDateObj = new Date(maximumDate);
      const currentDate = new Date();

      const timeDifference = maximumDateObj - currentDate;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const updateRemainingTime = () => {
      const time = calculateRemainingTime();
      setRemainingTime(time);
    };

    const timerInterval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(timerInterval);
  }, [maximumDate]);

  return (
    <div>
      <p>
        {remainingTime.days} days, {remainingTime.hours} hours,{" "}
        {remainingTime.minutes} minutes, {remainingTime.seconds} seconds
      </p>
    </div>
  );
}

export default Timer;
