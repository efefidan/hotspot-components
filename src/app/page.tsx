"use client";
import React, { useState, useEffect } from "react";
import UserStats from "@/components/UserStats";
import StatisticChart from "@/components/StatisticChart";
import LicenseExpireList from "@/components/LicenseExpireList";

const HomePage = () => {
  const [memoryUsage, setMemoryUsage] = useState(65);
  const [diskUsage, setDiskUsage] = useState(75);

  useEffect(() => {
    // Burada bir backend ya da database API'sinden veri çekebilirsin.
    // setMemoryUsage ile dinamik veri güncellemesi yapılabilir.
  }, []);

  return (
    <div className="container mx-auto p-4">
      <UserStats /> {/* Kullanıcı istatistiklerini gösteren kısım */}

      {/* Flexbox ile layout'u responsive yapıyoruz */}
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Sol tarafta StatisticChart */}
        <div className="w-full lg:w-3/4">
          <StatisticChart />
        </div>

        {/* Sağ tarafta LicenseExpireList */}
        <div className="w-full lg:w-1/4">
          <LicenseExpireList />
        </div>
      </div>
    </div>
  );

};

export default HomePage;
