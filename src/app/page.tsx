"use client";
import React, { useState, useEffect } from "react";
import UserStats from "@/components/UserStats";
import StatisticChart from "@/components/StatisticChart";
import LicenseExpireList from "@/components/LicenseExpireList";
import ConnectionDetailsTable from "@/components/ConnectionDetailsTable";
import ConnectionTable from "@/components/ConnectionTable";
import CurrentLogsTable from "@/components/CurrentLogsTable";
import GuestTrafficChart from "@/components/GuestTrafficChart";
import GuestMonitoring from "@/components/GuestMonitoring";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HotelStats from "@/components/HotelStats";
import UserStats2 from "@/components/UserStats2";

const HomePage = () => {
  const [memoryUsage, setMemoryUsage] = useState(65);
  const [diskUsage, setDiskUsage] = useState(75);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Örnek veri setleri
  const userStatsData = [
    { Total: 182, Today: 50, LastWeek: 120, LastMonth: 140 },
    // Diğer veriler...
  ];

  const userInformationData = [
    { ageGroup: "18-24", value: 9200 },
    // Diğer veriler...
  ];

  const connectionDetailsData = [
    { room: "1010", ipAddress: "170.20.12.189", macAddress: "AC:92:32:C1:18:04" },
    // Diğer veriler...
  ];

  const currentLogsData = [
    { hotelName: "Akra Hotel", logName: "All Customer Logs", date: "27.09.2024 - 10:30" },
    // Diğer veriler...
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      <div className="flex-1">
        <Header
          toggleSidebar={toggleSidebar}
          userStatsData={userStatsData}
          userInformationData={userInformationData}
          connectionDetailsData={connectionDetailsData}
          currentLogsData={currentLogsData}
        />

        <div className="container mx-auto p-4">
          <UserStats />
          <HotelStats />

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-3/4">
              <StatisticChart />
            </div>

            <div className="w-full lg:w-1/4">
              <LicenseExpireList />
            </div>
          </div>

          <div>
            <ConnectionDetailsTable />
          </div>
          <div>
            <CurrentLogsTable />
          </div>
          <div className="flex flex-wrap space-x-4">
            <GuestTrafficChart />
          </div>
          <UserStats2 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
