"use client";
import React, { useState } from "react";
import {
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";

interface LogData {
  id: string;
  hotelName: string;
  logName: string;
  date: string;
}

const CurrentLogsTable: React.FC = () => {
  const initialData: LogData[] = [
    {
      id: "1011",
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "2010-09-28T09:15:00",
    },
    {
      id: "1012",
      hotelName: "Elite Hotel",
      logName: "Room Service Logs",
      date: "2007-09-28T09:15:00",
    },
    {
      id: "1013",
      hotelName: "Ocean View",
      logName: "Maintenance Logs",
      date: "2025-09-28T09:15:00",
    },
    {
      id: "1014",
      hotelName: "Sunshine Resort",
      logName: "Guest Complaint Logs",
      date: "2020-09-28T09:15:00",
    },
    {
      id: "1015",
      hotelName: "Grand Palace",
      logName: "Security Logs",
      date: "2013-09-28T09:15:00",
    },
    {
      id: "1016",
      hotelName: "Mountain Lodge",
      logName: "Spa Appointment Logs",
      date: "2016-09-28T09:15:00",
    },
  ];
  const randomNumber = 18; // The number in the blue box for logs


  const [data, setData] = useState<LogData[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LogData | null>(null);

const [originalData, setOriginalData] = useState<LogData[]>(initialData); // Güncellenmiş sıralama sonrası geri dönülecek orijinal veri seti.


const handleSort = (key: string) => {
  let direction = "ascending";
  if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
          direction = "descending";
      } else if (sortConfig.direction === "descending") {
          direction = "default";
      } else {
          direction = "ascending";
      }
  }
  setSortConfig({ key, direction });

  if (direction === "default") {
      setData(originalData); // İlk haline dönmesi için güncel orijinal veriyi kullanıyoruz
      return;
  }

  const sortedData = [...data].sort((a, b) => {
      if (key === "date" || key === "birthday") {
          const dateA = new Date(a[key]);
          const dateB = new Date(b[key]);
          return direction === "ascending"
              ? dateA.getTime() - dateB.getTime()
              : dateB.getTime() - dateA.getTime();
      } else if (!isNaN(Number(a[key])) && !isNaN(Number(b[key]))) {
          return direction === "ascending"
              ? Number(a[key]) - Number(b[key])
              : Number(b[key]) - Number(a[key]);
      } else {
          return direction === "ascending"
              ? a[key].localeCompare(b[key])
              : b[key].localeCompare(a[key]);
      }
  });
  setData(sortedData);
};

const handleSave = () => {
  if (selectedItem) {
      const updatedData = data.map((item) =>
          item.id === selectedItem.id ? { ...selectedItem } : item
      );
      setData(updatedData);
      setOriginalData(updatedData); // Güncellenmiş sıralama sonrası orijinal veri güncellemesi
      setIsEditModalOpen(false);
  }
};


const renderSortIcon = (key: string) => {
  if (!sortConfig || sortConfig.key !== key) {
    return <FaSort />;
  }
  return sortConfig.direction === "ascending" ? (
    <FaSortUp />
  ) : sortConfig.direction === "descending" ? (
    <FaSortDown />
  ) : (
    <FaSort />
  );
};

const handleDelete = (index: number) => {
  const updatedData = data.filter((_, i) => i !== index);
  setData(updatedData);
};

const handleEdit = (item: LogData) => {
  setSelectedItem({ ...item });
  setIsEditModalOpen(true);
};


  // Define column widths for uniformity
  const columnWidths = {
    hotelName: "500px",
    logName: "500px",
    date: "500px",
    actions: "100px",
  };

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-md font-semibold">Current Logs</h2>
          <div className="bg-blue-200 text-blue-900 px-2 py-1 rounded-md font-bold ml-2">
            {randomNumber}
          </div>{" "}
          {/* Random number in blue box */}
        </div>
        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
          See All Connections
        </button>
      </div>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table
          className="min-w-full bg-white border-collapse border border-gray-200"
          style={{
            borderRadius: "8px",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              className="bg-gray-100 text-gray-500"
              style={{
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              {[
                { label: "Hotel Name", field: "hotelName" },
                { label: "Log Name", field: "logName" },
                { label: "Date", field: "date" },
              ].map(({ label, field }) => (
                <th
                  key={field}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    width: columnWidths[field as keyof typeof columnWidths],
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  onClick={() => handleSort(field)}
                >
                  <div className="flex items-center">
                    {label} {renderSortIcon(field)}
                  </div>
                </th>
              ))}
              <th style={{ padding: "10px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-150"
                style={{ borderBottom: "1px solid #e2e8f0" }}
              >
                <td style={{ padding: "10px", width: columnWidths.hotelName }}>
                  {item.hotelName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.logName }}>
                  {item.logName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.date }}>
                {new Date(item.date).toLocaleDateString("tr-TR") +
                    " - " +
                    new Date(item.date).toLocaleTimeString("tr-TR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-500 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Düzenleme Modalı */}
      {isEditModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Edit Connection Details</h2>
            <div className="space-y-2">
              {Object.keys(selectedItem).map((field) => (
                <div key={field}>
                  <label className="block text-gray-700">{field}</label>
                  <input
                    type="text"
                    value={selectedItem[field as keyof LogData]}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        [field]: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentLogsTable;
