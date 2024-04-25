import ReactECharts from "echarts-for-react";

const defaultOptions = {
  title: {
    itemGap: 0,
    subtext: "\u00B0C",
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
    backgroundColor: "rgba(50,50,50,0.8)",
    textStyle: {
      color: "#edededed",
    },
    valueFormatter: (value) => `${parseFloat(value.toFixed(2))}\u00B0C`,
  },
};

const Chart = ({ options }) => {
  return <ReactECharts option={{ ...defaultOptions, ...options }} />;
};
export default Chart;
