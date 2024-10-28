"use client";
import { useState } from "react";
import { FiMenu, FiBell } from "react-icons/fi";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user signed up", read: false },
    { id: 2, message: "Server restarted", read: true },
    { id: 3, message: "New comment on your post", read: false },
  ]);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Okunmamış bildirimlerin sayısını hesapla
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  // Bildirimi silme
  const handleDelete = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  // Bildirimi okunmadı/okundu olarak işaretleme
  const toggleReadStatus = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  return (
    <div className="bg-white shadow-md relative">
      {/* Üst Sıra */}
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          {/* Sol tarafta hamburger menü iconu ve dinamik başlık */}
          <div
            className="cursor-pointer"
            onClick={toggleSidebar} // Sidebar açıp kapama
          >
            <FiMenu className="text-xl" />
          </div>
          <span className="text-sm font-semibold">Dashboard</span>
        </div>
        {/* Sağ tarafta Notifications */}
        <div className="flex items-center space-x-4 relative">
          <div
            className="relative flex items-center space-x-2 border border-gray-300 bg-white px-2 py-0.5 rounded-md cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <FiBell className="text-xl" />
            <span className="text-sm font-medium">Notification</span>
            <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-md">
              {unreadCount}
            </span>
          </div>

          {/* Bildirim Dropdown */}
          {isNotificationOpen && (
            <div className="absolute top-12 right-0 w-72 bg-white shadow-lg rounded-md p-4 z-10">
              <h4 className="font-semibold mb-2">Notifications</h4>
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
                        {notif.read ? "Unread" : "Read"}
                      </button>
                      <button
                        onClick={() => handleDelete(notif.id)}
                        className="text-xs text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No notifications</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Alt Sıra */}
      <div className="flex justify-between items-center p-4">
        {/* Sol Taraf */}
        <div>
          <h1 className="text-2xl font-bold">Welcome Murat,</h1>
          <p className="text-gray-500">You can display all updates here</p>
          <p className="text-sm text-gray-400">Last Update: 26.09.2024</p>
        </div>
        {/* Sağ Taraf */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Export Data
        </button>
      </div>
    </div>
  );
};

export default Header;
