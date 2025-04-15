import { useEffect, useState } from "react";

const TimeLocation = () => {
  const [time, setTime] = useState("00:00:00");
  // Sample coordinates for demonstration
  const coordinates = "51° 30' 35.5140'' N 0°";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update immediately
    updateTime();

    // Set up interval to update every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-xs font-light text-gray-500">
      <div>{coordinates}</div>
      <div>{time}</div>
    </div>
  );
};

export default TimeLocation;
