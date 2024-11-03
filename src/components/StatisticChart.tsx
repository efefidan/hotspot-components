"use client";
import { useState, useRef, Key } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLanguage } from "@/contexts/LanguageContext"; // Dil hook'u
import translations from "@/locales/translations"; // Çevirileri ekle

ChartJS.register(ArcElement, Tooltip, Legend);

// Farklı sekmelere ait veriler (Age Data)
const data1 = 8040;
const data2 = 7560;
const data3 = 9200;
const data4 = 6830;
const data5 = 8250;
const data6 = 9100;
const data7 = 7700;
const data8 = 8650;

// Devices Data
const mobileData = 6400;
const desktopData = 5600;
const tabletData = 2800;

// Browser Data
const chromeData = 7200;
const firefoxData = 3100;
const safariData = 2200;
const edgeData = 1700;

// Dinamik renk hesaplama fonksiyonu
const getColorByValue = (value, minValue, maxValue) => {
  const lightness = 90 - ((value - minValue) / (maxValue - minValue)) * 60; // Açık tonlardan koyuya
  return `hsl(220, 90%, ${lightness}%)`; // Mavi tonları (hue 220) için HSL formatında
};

// Age Data için min-max ve renk hesaplama
const ageValues = [data1, data2, data3, data4, data5, data6, data7, data8];
const ageMinValue = Math.min(...ageValues);
const ageMaxValue = Math.max(...ageValues);

const ageData = {
  labels: [
    `0-12 age (${data1})`,
    `13-17 age (${data2})`,
    `18-24 age (${data3})`,
    `25-34 age (${data4})`,
    `35-44 age (${data5})`,
    `45-54 age (${data6})`,
    `55-64 age (${data7})`,
    `+64 age (${data8})`,
  ],
  datasets: [
    {
      label: "Age Statistic",
      data: ageValues,
      backgroundColor: ageValues.map((value) =>
        getColorByValue(value, ageMinValue, ageMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Devices Data için min-max ve renk hesaplama
const devicesValues = [mobileData, desktopData, tabletData];
const devicesMinValue = Math.min(...devicesValues);
const devicesMaxValue = Math.max(...devicesValues);

const devicesData = {
  labels: [
    `Mobile (${mobileData})`,
    `Desktop (${desktopData})`,
    `Tablet (${tabletData})`,
  ],
  datasets: [
    {
      label: "Devices Statistic",
      data: devicesValues,
      backgroundColor: devicesValues.map((value) =>
        getColorByValue(value, devicesMinValue, devicesMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Browser Data için min-max ve renk hesaplama
const browserValues = [chromeData, firefoxData, safariData, edgeData];
const browserMinValue = Math.min(...browserValues);
const browserMaxValue = Math.max(...browserValues);

const browserData = {
  labels: [
    `Chrome (${chromeData})`,
    `Firefox (${firefoxData})`,
    `Safari (${safariData})`,
    `Edge (${edgeData})`,
  ],
  datasets: [
    {
      label: "Web Browser Statistic",
      data: browserValues,
      backgroundColor: browserValues.map((value) =>
        getColorByValue(value, browserMinValue, browserMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Tooltip'i özelleştirme ayarları
const options = {
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#3b82f6", // Mavi arkaplan
      titleColor: "#ffffff", // Beyaz başlık
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyColor: "#ffffff", // Beyaz içerik
      bodyFont: {
        size: 12,
      },
      padding: 10, // İç boşluk
      cornerRadius: 8, // Baloncuk şekli için köşe yuvarlama
      displayColors: false, // Renk kutucuğu gizlensin
      borderColor: "#1e40af", // Daha koyu mavi kenar
      borderWidth: 1,
      callbacks: {
        label: function (tooltipItem) {
          const dataIndex = tooltipItem.dataIndex;
          const label = tooltipItem.label.split(" (")[0]; // Yaş aralığı
          const value = tooltipItem.raw; // Değer
          return `${label}: ${value}`;
        },
      },
    },
  },
};

export default function Dashboard() {
  const { language } = useLanguage();
  const content = translations[language] || translations["en"];
  const [activeTab, setActiveTab] = useState("age");
  const chartRef = useRef(null); // Chart.js referansı
  const [hiddenStates, setHiddenStates] = useState({
    age: Array(ageValues.length).fill(false),
    devices: Array(devicesValues.length).fill(false),
    browser: Array(browserValues.length).fill(false),
  }); // Tıklanma durumunu takip ediyor

  const toggleDatasetVisibility = (index) => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const meta = chart.getDatasetMeta(0); // İlk veri seti
      meta.data[index].hidden = !meta.data[index].hidden; // O veriyi gizle/aç
      chart.update(); // Grafiği güncelle
    }
    const updatedHiddenStates = { ...hiddenStates };
    updatedHiddenStates[activeTab][index] =
      !updatedHiddenStates[activeTab][index];
    setHiddenStates(updatedHiddenStates);
  };

  const renderChartData = () => {
    switch (activeTab) {
      case "age":
        return {
          labels: content.dashboard.ageRanges.map((range: any, i: string | number) => `${range} (${ageValues[i]})`),
          datasets: [
            {
              label: content.dashboard.ageStatistic,
              data: ageValues,
              backgroundColor: ageValues.map((value) =>
                getColorByValue(value, ageMinValue, ageMaxValue)
              ),
              borderWidth: 1,
            },
          ],
        };
      case "devices":
        return {
          labels: content.dashboard.devices.map((device: any, i: string | number) => `${device} (${devicesValues[i]})`),
          datasets: [
            {
              label: content.dashboard.devicesStatistic,
              data: devicesValues,
              backgroundColor: devicesValues.map((value) =>
                getColorByValue(value, devicesMinValue, devicesMaxValue)
              ),
              borderWidth: 1,
            },
          ],
        };
      case "browser":
        return {
          labels: content.dashboard.browsers.map((browser: any, i: string | number) => `${browser} (${browserValues[i]})`),
          datasets: [
            {
              label: content.dashboard.browserStatistic,
              data: browserValues,
              backgroundColor: browserValues.map((value) =>
                getColorByValue(value, browserMinValue, browserMaxValue)
              ),
              borderWidth: 1,
            },
          ],
        };
      default:
        return ageData;
    }
  };

  const renderChartTitle = () => {
    switch (activeTab) {
      case "age":
        return content.dashboard.ageStatistic;
      case "devices":
        return content.dashboard.devicesStatistic;
      case "browser":
        return content.dashboard.browserStatistic;
      default:
        return content.dashboard.ageStatistic;
    }
  };

  const renderLabels = () => {
    const currentData = renderChartData();
    return currentData.labels.map((label: string, index: Key | null | undefined) => (
      <li
        key={index}
        className={`flex items-center justify-between text-lg cursor-pointer ${
          hiddenStates[activeTab][index] ? "line-through text-gray-400" : ""
        }`} // Gizlenen veriler çizilmiş ve gri olacak
        onClick={() => toggleDatasetVisibility(index)} // Tıklama olayı
      >
        <span className="flex items-center">
          <span
            className="w-3 h-3 rounded-full mr-2"
            style={{
              backgroundColor: currentData.datasets[0].backgroundColor[index],
            }}
          ></span>
          {label.split(" (")[0]}{" "}
          {/* Yaş grubu, cihaz ya da tarayıcı kısmını gösteriyoruz */}
        </span>
        <span>{label.split("(")[1].replace(")", "")}</span>{" "}
        {/* Sayıyı gösteriyoruz */}
      </li>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between w-full items-center mb-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-l font-bold">{content.dashboard.title}</h1>
        </div>
        <div>
          <button className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6h.01M12 12h.01M12 18h.01"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-start w-full mb-6">
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "age"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } rounded-l-md`}
          onClick={() => setActiveTab("age")}
        >
          {content.dashboard.ageStatistic}
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "devices"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => setActiveTab("devices")}
        >
          {content.dashboard.devicesStatistic}
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "browser"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } rounded-r-md`}
          onClick={() => setActiveTab("browser")}
        >
          {content.dashboard.browserStatistic}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl justify-between">
        <div className="w-full lg:w-2/3">
          <div style={{ width: "500px", height: "500px", margin: "auto" }}>
            <Doughnut data={renderChartData()} options={options} ref={chartRef} />
          </div>
        </div>

        <div className="w-full lg:w-1/3 pl-8 flex flex-col justify-center space-y-2 mt-4 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">{renderChartTitle()}</h2>
          <ul className="text-gray-700 font-semibold space-y-2">
            {renderLabels()}
          </ul>
        </div>
      </div>
    </div>
  );
}
