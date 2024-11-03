import React, { useState } from "react";
import {
  FaEllipsisV,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext"; // Dil hook'u
import translations from "@/locales/translations"; // Çevirileri ekle

interface ConnectionData {
  room: string;
  ipAddress: string;
  macAddress: string;
  fullName: string;
  email: string;
  date: string;
  birthday: string;
}

const ConnectionDetailsTable: React.FC = () => {
  const { language } = useLanguage();
  const content = translations[language]?.connectionDetailsTable || translations["en"].connectionDetailsTable;
  const initialData: ConnectionData[] = [
    {
      room: "1011",
      ipAddress: "170.21.14.190",
      macAddress: "AB:23:65:EF:12:45",
      fullName: "Ali Demir",
      email: "ali.demir@example.com",
      date: "2010-09-28T09:15:00",
      birthday: "1990-02-15",
    },
    {
      room: "1012",
      ipAddress: "172.20.15.175",
      macAddress: "DC:45:76:FA:21:34",
      fullName: "Fatma Yıldız",
      email: "fatma.yildiz@example.com",
      date: "2005-09-28T11:00:00",
      birthday: "1985-05-23",
    },
    {
      room: "1013",
      ipAddress: "173.25.20.188",
      macAddress: "CD:56:87:AB:34:56",
      fullName: "Mehmet Kaya",
      email: "mehmet.kaya@example.com",
      date: "2018-09-29T14:45:00",
      birthday: "1975-11-12",
    },
    {
      room: "1014",
      ipAddress: "170.22.16.200",
      macAddress: "EF:67:98:CD:45:67",
      fullName: "Ayşe Çelik",
      email: "ayse.celik@example.com",
      date: "2023-09-30T08:30:00",
      birthday: "1992-07-30",
    },
    {
      room: "1015",
      ipAddress: "170.19.18.185",
      macAddress: "GH:78:12:DE:56:78",
      fullName: "Mustafa Aydın",
      email: "mustafa.aydin@example.com",
      date: "2025-10-01T13:20:00",
      birthday: "1988-03-06",
    },
    {
      room: "1016",
      ipAddress: "171.24.22.177",
      macAddress: "HI:89:34:EF:67:89",
      fullName: "Elif Güngör",
      email: "elif.gungor@example.com",
      date: "2019-10-02T10:15:00",
      birthday: "1995-08-08",
    },
  ];

  const [data, setData] = useState<ConnectionData[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ConnectionData | null>(null);

const [originalData, setOriginalData] = useState<ConnectionData[]>(initialData); // Güncellenmiş sıralama sonrası geri dönülecek orijinal veri seti.

const handleSort = (key: keyof ConnectionData) => {
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
            item.room === selectedItem.room ? { ...selectedItem } : item
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

  const handleEdit = (item: ConnectionData) => {
    setSelectedItem({ ...item });
    setIsEditModalOpen(true);
  };


  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-md font-semibold">{content.title}</h2>
          <div className="bg-blue-200 text-blue-900 px-2 py-1 rounded-md font-bold ml-2">
            {data.length}
          </div>
        </div>
        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
          {content.seeAll}
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
              style={{ fontSize: "14px", textAlign: "left" }}
            >
              {[
                { label: content.room, field: "room" },
                { label: content.ipAddress, field: "ipAddress" },
                { label: content.macAddress, field: "macAddress" },
                { label: content.fullName, field: "fullName" },
                { label: content.email, field: "email" },
                { label: content.date, field: "date" },
                { label: content.birthday, field: "birthday" },
              ].map(({ label, field }) => (
                <th
                  key={field}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort(field as keyof ConnectionData)}
                >
                  <div className="flex items-center">
                    {label} {renderSortIcon(field)}
                  </div>
                </th>
              ))}
              <th style={{ padding: "10px", textAlign: "center" }}>{content.actions}</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-150"
                style={{ borderBottom: "1px solid #e2e8f0" }}
              >
                <td style={{ padding: "10px" }}>{item.room}</td>
                <td style={{ padding: "10px" }}>{item.ipAddress}</td>
                <td style={{ padding: "10px" }}>{item.macAddress}</td>
                <td style={{ padding: "10px" }}>{item.fullName}</td>
                <td style={{ padding: "10px" }}>{item.email}</td>
                <td style={{ padding: "10px" }}>{new Date(item.date).toLocaleDateString(language) + " - " + new Date(item.date).toLocaleTimeString(language, { hour: "2-digit", minute: "2-digit" })}</td>
                <td style={{ padding: "10px" }}>{new Date(item.birthday).toLocaleDateString(language)}</td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button onClick={() => handleEdit(item)} className="text-blue-500 mr-2">
                    <FaEdit /> 
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-500">
                    <FaTrash /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">{content.editTitle}</h2>
            <div className="space-y-2">
              {Object.keys(selectedItem).map((field) => (
                <div key={field}>
                  <label className="block text-gray-700">{content[field] || field}</label>
                  <input
                    type="text"
                    value={selectedItem[field as keyof ConnectionData]}
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
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">
                {content.cancel}
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                {content.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ConnectionDetailsTable;
