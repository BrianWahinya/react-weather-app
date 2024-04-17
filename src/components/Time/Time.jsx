import { useEffect, useLayoutEffect, useRef } from "react";
import "./css/time.css";

const userLocale = navigator?.language || "en-US";
// console.log("userLocale", userLocale);

const options = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true, // Use 12-hour format
  weekday: "long",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const getCurrentTime = () => {
  const formatter = new Intl.DateTimeFormat(userLocale, options);
  const currentTime12hrs = formatter.format(new Date());
  return currentTime12hrs;
};

const Time = () => {
  const timeRef = useRef(getCurrentTime());

  useLayoutEffect(() => {
    timeRef.current.textContent = getCurrentTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log(getCurrentTime());
      timeRef.current.textContent = getCurrentTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span className="spanTime" ref={timeRef}></span>;
};
export default Time;
