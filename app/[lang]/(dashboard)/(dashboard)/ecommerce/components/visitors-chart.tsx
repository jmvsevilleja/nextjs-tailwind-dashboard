"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getYAxisConfig, getLabel } from "@/lib/appex-chart-options";

const VisitorsReportChart = ({ height = 300 }) => {
  const { theme: config } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const series = [
    {
      name: "Visitors",
      data: [
        {
          x: new Date("2024-01-12").getTime(),
          y: 140,
        },
        {
          x: new Date("2024-01-13").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-01-14").getTime(),
          y: 150,
        },
        {
          x: new Date("2024-01-15").getTime(),
          y: 154,
        },
        {
          x: new Date("2024-01-16").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-01-17").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-01-18").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-01-20").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-01-21").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-01-22").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-01-23").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-01-24").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-01-25").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-01-26").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-01-27").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-01-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-01-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-01-30").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-02-01").getTime(),
          y: 153,
        },
        {
          x: new Date("2024-02-02").getTime(),
          y: 149,
        },
        {
          x: new Date("2024-02-03").getTime(),
          y: 144,
        },
        {
          x: new Date("2024-02-05").getTime(),
          y: 150,
        },
        {
          x: new Date("2024-02-06").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-02-07").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-02-08").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-02-09").getTime(),
          y: 156,
        },
        {
          x: new Date("2024-02-11").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-02-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-02-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-02-14").getTime(),
          y: 150,
        },
        {
          x: new Date("2024-02-15").getTime(),
          y: 154,
        },
        {
          x: new Date("2024-02-16").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-02-17").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-02-18").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-02-20").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-02-21").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-02-22").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-02-23").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-02-24").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-02-25").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-02-26").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-02-27").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-02-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-02-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-02-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-03-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-03-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2024-03-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-03-05").getTime(),
          y: 142,
        },
        {
          x: new Date("2024-03-06").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-03-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-03-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-03-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-03-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-03-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-03-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-03-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2024-03-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-03-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-03-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-03-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2024-03-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2024-03-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-03-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-03-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-03-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-03-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-03-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2024-03-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-03-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-03-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-03-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-04-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-04-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2024-04-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-04-05").getTime(),
          y: 142,
        },
        {
          x: new Date("2024-04-06").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-04-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-04-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-04-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-04-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-04-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-04-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-04-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2024-04-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-04-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-04-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-04-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2024-04-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2024-04-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-04-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-04-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-04-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-04-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-04-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2024-04-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-04-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-04-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-04-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-05-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-05-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2024-05-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-05-04").getTime(),
          y: 142,
        },
        {
          x: new Date("2024-05-05").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-05-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-05-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-05-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-05-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-05-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-05-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-05-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2024-05-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-05-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-05-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-05-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2024-05-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2024-05-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-05-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-05-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-05-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-05-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-05-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2024-05-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-05-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-05-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-05-30").getTime(),
          y: 162,
        },
      ],
    },
  ];

  const options: any = {
    chart: {
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [20, 100, 100],
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),

    xaxis: {
      type: "datetime",
      labels: getLabel(
        `hsl(${
          theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default VisitorsReportChart;
