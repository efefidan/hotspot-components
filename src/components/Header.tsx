"use client";
import { useState } from "react";
import { FiMenu, FiBell } from "react-icons/fi";
import { FaArrowUp, FaArrowDown, FaEllipsisV } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext"; // Dil hook'unu ekle
import translations from "@/locales/translations"; // Çevirileri ekle

const Header = ({
  toggleSidebar,
  userStatsData,
  userInformationData,
  connectionDetailsData,
  currentLogsData,
}: {
  toggleSidebar: () => void;
  userStatsData: any;
  userInformationData: any;
  connectionDetailsData: any;
  currentLogsData: any;
}) => {
  const { language } = useLanguage();
  const content = translations[language] || translations["en"]; // Dil seçimi
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user signed up", read: false },
    { id: 2, message: "Server restarted", read: true },
    { id: 3, message: "New comment on your post", read: false },
  ]);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const toggleReadStatus = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  // CSV formatında veriyi indir
  const downloadCSVData = (data: any[], fileName: string) => {
    if (!data || data.length === 0) { console.error("Data is empty or undefined."); return; }

    const headers = Object.keys(data[0]).join(","); // Başlıkları ekle
    const rows = data.map((row) =>
      Object.values(row).map((value) => `"${value}"`).join(",") // Değerleri CSV uyumlu hale getir
    ).join("\n"); // Satırları ekle
    const csvContent = `${headers}\n${rows}`; // CSV içeriği

    console.log(csvContent);

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.csv`);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white shadow-md relative">
      {/* Üst Sıra */}
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <FiMenu className="text-xl" />
          </div>
          <span className="text-sm font-semibold">
            {content.header.dashboard}
          </span>
        </div>
        {/* Bildirimler */}
        <div className="flex items-center space-x-4 relative">
          <div
            className="relative flex items-center space-x-2 border border-gray-300 bg-white px-2 py-0.5 rounded-md cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <FiBell className="text-xl" />
            <span className="text-sm font-medium">
              {content.header.notification}
            </span>
            <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-md">
              {unreadCount}
            </span>
          </div>

          {/* Bildirim Açılır Menüsü */}
          {isNotificationOpen && (
            <div className="absolute top-12 right-0 w-72 bg-white shadow-lg rounded-md p-4 z-10">
              <h4 className="font-semibold mb-2">
                {content.header.notificationsTitle}
              </h4>
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex justify-between items-center p-2 border-b border-gray-200"
                  >
                    <span
                      className={`text-sm ${
                        notif.read ? "text-gray-500" : "font-bold"
                      }`}
                    >
                      {notif.message}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleReadStatus(notif.id)}
                        className="text-xs text-blue-500"
                      >
                        {notif.read
                          ? content.header.unread
                          : content.header.read}
                      </button>
                      <button
                        onClick={() => handleDelete(notif.id)}
                        className="text-xs text-red-500"
                      >
                        {content.header.delete}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  {content.header.noNotifications}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Alt Sıra */}
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-bold">{content.header.welcome}</h1>
          <p className="text-gray-500">{content.header.updatesMessage}</p>
          <p className="text-sm text-gray-400">{content.header.lastUpdate}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsModalOpen(true)} // Modal açma
        >
          {content.header.exportData}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">
              {content.header.modalTitle}
            </h2>
            <div className="space-y-4">
              {/* Her bir veri kategorisi için indirme seçenekleri */}
              <div className="flex justify-between items-center border-b pb-2">
                <span>{content.header.userStats}</span>
                <button
                  onClick={() => downloadCSVData(userStatsData, "user_stats")}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {content.header.download}
                </button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{content.header.userInformationChart}</span>
                <button
                  onClick={() =>
                    downloadCSVData(userInformationData, "user_information_chart")
                  }
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {content.header.download}
                </button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{content.header.connectionsDetail}</span>
                <button
                  onClick={() =>
                    downloadCSVData(connectionDetailsData, "connections_detail")
                  }
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {content.header.download}
                </button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>{content.header.currentLogs}</span>
                <button
                  onClick={() => downloadCSVData(currentLogsData, "current_logs")}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {content.header.download}
                </button>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsModalOpen(false)} // Modal kapama
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Header;
