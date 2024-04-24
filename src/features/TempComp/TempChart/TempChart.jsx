import { Chart } from "../../../components";
import { useAppContext } from "../../../context/AppContext";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};

const genTempArr = (list) =>
  list.map((item) => {
    const { dt_txt, main } = item;
    return { day: getDayOfWeek(dt_txt), temp: main.temp };
  });

const getAvgPerDay = (arr) => {
  const formattedArr = genTempArr(arr);
  //   console.log(arr, formattedArr);
  const uniqueDays = [...new Set(formattedArr.map((item) => item.day))];
  //   console.log("uniqueDays", uniqueDays);
  const avgTempPerDay = uniqueDays.reduce((accum, curr) => {
    const filtered = formattedArr.filter((item) => item.day === curr);
    const sum = filtered.reduce(
      (total, num) => (total += parseFloat(num.temp)),
      0
    );
    accum.push({
      day: curr,
      avg: sum / filtered.length,
    });
    return accum;
  }, []);

  return { uniqueDays, avgTempPerDay };
};

const genOptions = (data) => {
  const { uniqueDays, avgTempPerDay } = getAvgPerDay(data);
  const seriesData = avgTempPerDay.map((item) =>
    parseFloat(item.avg.toFixed(2))
  );
  //   console.log("uniqueDays", uniqueDays, seriesData);
  return {
    xAxis: {
      type: "category",
      data: uniqueDays,
      boundaryGap: true,
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      max: 50,
    },
    series: [
      {
        data: seriesData,
        type: "line",
        smooth: true,
      },
    ],
  };
};

const TempChart = () => {
  const { data } = useAppContext();
  //   console.log(data);

  return data[0] && <Chart options={genOptions(data[0].list)} />;
};
export default TempChart;
