"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";
import Image from "next/image";

const SidebarItem = ({ title, dropdown, items, icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-all duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <div className="flex items-center space-x-2">
          <Image src={icon} alt="icon" width={20} height={20} /> {/* Icon */}
          <span>{title}</span>
        </div>
        {dropdown ? (
          isOpen ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )
        ) : null}
      </div>
      {isOpen && dropdown && (
        <ul className="pl-4">
          {items.map((item: string, index: number) => (
            <li
              key={index}
              className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false); // For company dropdown

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white shadow-lg p-4 transition-all duration-300 flex flex-col`}
      style={{ width: "256px", height: "975px" }} // Sidebar 256x1022 boyutlarına ayarlandı
    >
      {/* MSE Teknoloji Logosu */}
      <div style={{ width: "200px", height: "100px", position: "absolute", top: "20px" }}> {/* Yükseklik ve konum ayarlandı */}
        <Image
          src="/büyüklogo.svg"
          alt="MSE Teknoloji"
          width={isOpen ? 200 : 40} // Logo büyütüldü
          height={isOpen ? 100 : 40}
          className="mx-auto"
        />
      </div>

      {/* Company Section */}
      <div
        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
        style={{ width: "200px", height: "60px", position: "absolute", top: "80px" }} // Alt bölümlerin yeri ayarlandı
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-colors duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <div className="flex items-center space-x-2">
          <Image
            src="/küçüklogo.svg"
            alt="Küçük Logo"
            width={isOpen ? 30 : 20}
            height={isOpen ? 30 : 20}
          />
          {isOpen && (
            <div>
              <h2 className="font-semibold">MSE General</h2>
              <p className="text-sm text-gray-400">Seçili Şube: Aktif</p>
            </div>
          )}
        </div>
        {isOpen && (
          <div>
            {isCompanyOpen ? (
              <FiChevronDown className="ml-2" />
            ) : (
              <FiChevronRight className="ml-2" />
            )}
          </div>
        )}
      </div>

      {/* Search Section */}
      <div
        className="flex items-center bg-white border border-gray-300 rounded-lg p-1"
        style={{ width: "222px", height: "38px", position: "absolute", left: "17px", top: "150px" }} // Konumlandırma yapıldı
      >
        <FiSearch className="text-gray-500" />
        {isOpen && (
          <input
            className="ml-2 bg-white outline-none w-full text-gray-900"
            placeholder="Search..."
          />
        )}
      </div>

      {/* Menü Öğeleri */}
      <ul
        className="flex-1 overflow-auto"
        style={{ width: "223px", height: "314px", position: "absolute", left: "17px", top: "200px" }} // Menü öğeleri yerleşimi
      >
        <SidebarItem
          title="Dashboard"
          dropdown={false}
          icon="/Vectordashboard.svg"
        />
        <SidebarItem
          title="Group Analysis"
          dropdown={true}
          items={["Analysis 1", "Analysis 2"]}
          icon="/Vectorgroup.svg"
        />
        <SidebarItem
          title="Guest Relations"
          dropdown={true}
          items={["Guest 1", "Guest 2"]}
          icon="/Vectorguest.svg"
        />
        <SidebarItem
          title="Settings"
          dropdown={true}
          items={["Profile", "Account Settings"]}
          icon="/Vectorsettings.svg"
        />
        <SidebarItem
          title="Integrations"
          dropdown={true}
          items={["Integration 1", "Integration 2"]}
          icon="/Vectorintegrations.svg"
        />
        <SidebarItem
          title="Log"
          dropdown={true}
          items={["Log 1", "Log 2"]}
          icon="/Vectorlog.svg"
        />
        <SidebarItem
          title="Modules"
          dropdown={true}
          items={["Module 1", "Module 2"]}
          icon="/Vectormodules.svg"
        />
      </ul>

      {/* Support, English, Version */}
      <div
        style={{
          width: "222px",
          height: "130px",
          position: "absolute",
          left: "16px",
          top: "818px",
        }}
      >
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <img src="/Vectorsupport.svg" alt="Support Icon" className="w-6 h-6" />
          {isOpen && <span>Support</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <img src="/Vectorenglish.svg" alt="Language Icon" className="w-6 h-6" />
          {isOpen && <span>English</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <img src="/Vectorversion.svg" alt="Version Icon" className="w-6 h-6" />
          {isOpen && <span>v12.5.23</span>}
        </div>
      </div>

      {/* Kullanıcı Profili Kısmı */}
      <div
        className="flex items-center space-x-2"
        style={{ width: "256px", height: "66px", position: "absolute", top: "919px" }}
      >
        <img src="/profil.svg" alt="Profile Icon" className="w-8 h-8" />
        {isOpen && (
          <div>
            <h2 className="font-semibold">Murat Tenil</h2>
            <p className="text-xs text-gray-500">murattenil@icloud.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
