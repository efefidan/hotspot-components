import React, { useState } from "react";
import { FaSortUp, FaSortDown, FaTrash, FaSort } from "react-icons/fa";

interface ConnectionData {
  id: string;
  explanation: string;
  firstName: string;
  lastName: string;
  macAddress: string;
  connectionType: string;
  device: string;
  limit: string;
  download: string;
  upload: string;
  sessionDuration: string;
}

const ConnectionDetailsTable: React.FC = () => {
  const initialData: ConnectionData[] = [
    {
      id: "25676",
      explanation: "43474598048",
      firstName: "EFE",
      lastName: "BAĞCI",
      macAddress: "74:6B:AB:7D:70:97",
      connectionType: "TC",
      device: "Android",
      limit: "5M/5M",
      download: "1.1 GB",
      upload: "42.2 MB",
      sessionDuration: "4 Saat 39 dk",
    },
    {
      id: "239802",
      explanation: "10268874916",
      firstName: "MIKAIL",
      lastName: "KAYA",
      macAddress: "1A:EA:54:CF:44:21",
      connectionType: "TC",
      device: "Android",
      limit: "5M/5M",
      download: "2.4 MB",
      upload: "319.9 KB",
      sessionDuration: "8 Saat 14 dk",
    },
    {
      id: "120398",
      explanation: "50182304921",
      firstName: "AYŞE",
      lastName: "YILMAZ",
      macAddress: "45:B2:C3:11:D4:E5",
      connectionType: "WIFI",
      device: "iPhone",
      limit: "10M/10M",
      download: "500 MB",
      upload: "20 MB",
      sessionDuration: "1 Saat 15 dk",
    },
    {
      id: "784512",
      explanation: "78945234112",
      firstName: "MEHMET",
      lastName: "DEMİR",
      macAddress: "98:7A:4B:2C:1D:0E",
      connectionType: "LAN",
      device: "Laptop",
      limit: "50M/50M",
      download: "5 GB",
      upload: "200 MB",
      sessionDuration: "6 Saat 30 dk",
    },
    {
      id: "321980",
      explanation: "63258741259",
      firstName: "FATMA",
      lastName: "ÇELİK",
      macAddress: "12:34:56:78:9A:BC",
      connectionType: "TC",
      device: "iPad",
      limit: "20M/20M",
      download: "800 MB",
      upload: "50 MB",
      sessionDuration: "3 Saat 5 dk",
    },
    {
      id: "562914",
      explanation: "65781234912",
      firstName: "AHMET",
      lastName: "KOÇ",
      macAddress: "DE:AD:BE:EF:12:34",
      connectionType: "WIFI",
      device: "Windows",
      limit: "15M/15M",
      download: "3.5 GB",
      upload: "500 MB",
      sessionDuration: "5 Saat 20 dk",
    },
    {
      id: "294385",
      explanation: "49381234598",
      firstName: "ZEYNEP",
      lastName: "KARACA",
      macAddress: "AB:CD:EF:12:34:56",
      connectionType: "LAN",
      device: "MacBook",
      limit: "10M/10M",
      download: "7.1 GB",
      upload: "800 MB",
      sessionDuration: "7 Saat 50 dk",
    },
    {
      id: "875230",
      explanation: "90345127812",
      firstName: "MURAT",
      lastName: "ŞAHİN",
      macAddress: "A1:B2:C3:D4:E5:F6",
      connectionType: "WIFI",
      device: "Android",
      limit: "30M/30M",
      download: "2.3 GB",
      upload: "300 MB",
      sessionDuration: "4 Saat 10 dk",
    },
    {
      id: "503812",
      explanation: "74830123489",
      firstName: "SELİN",
      lastName: "YILDIRIM",
      macAddress: "AB:CD:34:56:78:90",
      connectionType: "TC",
      device: "Tablet",
      limit: "10M/10M",
      download: "1.4 GB",
      upload: "100 MB",
      sessionDuration: "2 Saat 45 dk",
    },
    {
      id: "698012",
      explanation: "12340987123",
      firstName: "KEREM",
      lastName: "AKSOY",
      macAddress: "BC:DE:F1:23:45:67",
      connectionType: "WIFI",
      device: "Linux",
      limit: "50M/50M",
      download: "6.8 GB",
      upload: "750 MB",
      sessionDuration: "6 Saat 25 dk",
    },
    {
      id: "481209",
      explanation: "67238940123",
      firstName: "ELİF",
      lastName: "AKIN",
      macAddress: "C1:D2:E3:F4:G5:H6",
      connectionType: "LAN",
      device: "MacBook",
      limit: "25M/25M",
      download: "4.2 GB",
      upload: "320 MB",
      sessionDuration: "5 Saat 55 dk",
    },
  ];

  const [data, setData] = useState<ConnectionData[]>(initialData);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field: keyof ConnectionData) => {
    let direction: "asc" | "desc" | null = null;
    if (sortField === field) {
      direction =
        sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
          ? null
          : "asc";
    } else {
      direction = "asc";
    }

    if (!direction) {
      setData([...initialData]);
    } else {
      const sortedData = [...data].sort((a, b) => {
        if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
        if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setData(sortedData);
    }

    setSortField(field);
    setSortDirection(direction);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Define consistent column widths
  const columnWidths = {
    id: "80px",
    explanation: "120px",
    firstName: "120px",
    lastName: "120px",
    macAddress: "150px",
    connectionType: "120px",
    device: "100px",
    limit: "80px",
    download: "100px",
    upload: "100px",
    sessionDuration: "150px",
    actions: "70px",
  };

  return (
    <div style={{ padding: "0 10px", margin: "0 auto", maxWidth: "1400px" }}>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table
          style={{
            minWidth: "100%",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#2d3748",
                color: "#fff",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              {[
                { label: "ID", field: "id" },
                { label: "Açıklama", field: "explanation" },
                { label: "Ad", field: "firstName" },
                { label: "Soyad", field: "lastName" },
                { label: "Mac Address", field: "macAddress" },
                { label: "Bağlantı Türü", field: "connectionType" },
                { label: "Cihaz", field: "device" },
                { label: "Limit", field: "limit" },
                { label: "İndirme", field: "download" },
                { label: "Yükleme", field: "upload" },
                { label: "Çalışma Süresi", field: "sessionDuration" },
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
                  onClick={() => handleSort(field as keyof ConnectionData)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{label}</span>
                    {sortField === field ? (
                      sortDirection === "asc" ? (
                        <FaSortUp />
                      ) : sortDirection === "desc" ? (
                        <FaSortDown />
                      ) : (
                        <FaSort />
                      )
                    ) : (
                      <FaSort />
                    )}
                  </div>
                </th>
              ))}
              <th style={{ padding: "10px", textAlign: "center" }}>İşlemler</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "14px", color: "#4a5568" }}>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: "1px solid #e2e8f0",
                  backgroundColor: "#f7fafc",
                }}
              >
                <td style={{ padding: "10px", width: columnWidths.id }}>
                  {item.id}
                </td>
                <td
                  style={{ padding: "10px", width: columnWidths.explanation }}
                >
                  {item.explanation}
                </td>
                <td style={{ padding: "10px", width: columnWidths.firstName }}>
                  {item.firstName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.lastName }}>
                  {item.lastName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.macAddress }}>
                  {item.macAddress}
                </td>
                <td
                  style={{
                    padding: "10px",
                    width: columnWidths.connectionType,
                  }}
                >
                  {item.connectionType}
                </td>
                <td style={{ padding: "10px", width: columnWidths.device }}>
                  {item.device}
                </td>
                <td style={{ padding: "10px", width: columnWidths.limit }}>
                  {item.limit}
                </td>
                <td style={{ padding: "10px", width: columnWidths.download }}>
                  {item.download}
                </td>
                <td style={{ padding: "10px", width: columnWidths.upload }}>
                  {item.upload}
                </td>
                <td
                  style={{
                    padding: "10px",
                    width: columnWidths.sessionDuration,
                  }}
                >
                  {item.sessionDuration}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button style={{ color: "red" }}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            style={{
              padding: "8px",
              marginRight: "10px",
              borderColor: "#cbd5e0",
              borderRadius: "4px",
            }}
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <span style={{ color: "#718096" }}>Toplam Kayıt: {data.length}</span>
        </div>

        {/* Sayfa Geçiş Butonları */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #cbd5e0",
              borderRadius: "4px",
              marginRight: "8px",
              backgroundColor: "#f7fafc",
              cursor: "pointer",
            }}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <span style={{ padding: "8px" }}>
            {currentPage}/{totalPages}
          </span>
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #cbd5e0",
              borderRadius: "4px",
              backgroundColor: "#f7fafc",
              cursor: "pointer",
            }}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetailsTable;
