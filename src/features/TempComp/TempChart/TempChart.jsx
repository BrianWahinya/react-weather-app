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

const getCategoryData = (arr) => {
  const formattedArr = genTempArr(arr);
  //   console.log(arr, formattedArr);
  const uniqueDays = [...new Set(formattedArr.map((item) => item.day))];
  //   console.log("uniqueDays", uniqueDays);
  const categories = {
    max: {
      name: "Max",
      data: [],
    },
    avg: {
      name: "Avg",
      data: [],
    },
    min: {
      name: "Min",
      data: [],
    },
  };

  uniqueDays.forEach((day) => {
    const filtered = formattedArr.filter((item) => item.day === day);
    const tempArr = filtered.map((item) => item.temp);
    const tempMax = Math.max(...tempArr);
    const tempMin = Math.min(...tempArr);
    const tempAvg =
      tempArr.reduce((sum, num) => (sum += num), 0) / tempArr.length;

    categories.max.data.push(tempMax);
    categories.avg.data.push(tempAvg);
    categories.min.data.push(tempMin);
  });

  return { uniqueDays, categoryData: Object.values(categories) };
};
const seriesColors = { max: "#b93800b3", avg: "#6c9602bb", min: "#02a5ebbb" };

const genOptions = (data) => {
  const { uniqueDays, categoryData } = getCategoryData(data);
  return {
    legend: {
      data: ["Max", "Avg", "Min"],
    },
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
    series: categoryData.map((item) => ({
      ...item,
      type: "line",
      smooth: true,
      symbolSize: 8,
      itemStyle: {
        color: seriesColors[item.name.toLowerCase()],
      },
      lineStyle: {
        width: 2,
      },
    })),
  };
};

const TempChart = () => {
  const { data } = useAppContext();
  //   console.log(data);

  return data[0] && <Chart options={genOptions(data[0].list)} />;
};
export default TempChart;
