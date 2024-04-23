import { useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import TimelineItem from "./TimelineItem/TimelineItem";
import "./css/timeline.css";

const genElems = (data = []) => {
  return data.map((item, idx) => <TimelineItem key={idx} content={item} />);
};

const Timeline = () => {
  const { data } = useAppContext();
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    const handleWheel = (event) => {
      // Only scroll horizontally
      timeline.scrollTo({
        left: timeline.scrollLeft + event.deltaY * 3,
        behavior: "smooth",
      });
    };

    if (timeline) {
      timeline.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (timeline) {
        timeline.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div ref={timelineRef} className="div-timeline">
      {genElems(data[0]?.list)}
    </div>
  );
};
export default Timeline;
