import ReactECharts from "echarts-for-react";

const defaultOptions = {
  title: {
    itemGap: 0,
    subtext: "Avg Temp Per Day",
  },
  grid: {
    top: 40,
    right: 8,
    bottom: 24,
    left: 30,
    // containLabel: true,
  },
  toolbox: {
    show: true,
    feature: {
      magicType: {
        type: ["bar"],
      },
      restore: {},
      saveAsImage: {
        type: "png",
        name: "temp_comparison",
      },
    },
  },

  tooltip: {
    show: true,
    trigger: "axis",
    triggerOn: "mousemove|click",
    confine: true,
    renderMode: "html",
    valueFormatter: (value) => `${value}\u00B0C`,
  },
};

const Chart = ({ options }) => {
  return <ReactECharts option={{ ...defaultOptions, ...options }} />;
};
export default Chart;
