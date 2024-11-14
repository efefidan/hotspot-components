// components/BranchList.tsx
import React, { useState } from "react";
import { Table, Button, Row, Col, Card, Tag } from "antd";
import {
  SearchOutlined,
  ReloadOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  BarsOutlined,
  BankOutlined, // Şube Listesi başlığında kullanılacak simge
} from "@ant-design/icons";
import BranchRegister from "./BranchRegister";

interface Branch {
  id: number;
  name: string;
  email: string;
  phone: string;
  sylog: string;
}

const data: Branch[] = [
  { id: 82, name: "EV", email: "istanbulev@gmail.com", phone: "-", sylog: "10010" },
  { id: 121, name: "sds", email: "sd@gmail.com", phone: "123456", sylog: "10036" },
  // Daha fazla şube ekleyebilirsiniz
];

const BranchList: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>(data);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSaveBranch = (branch: Branch) => {
    const newBranch = { ...branch, id: branches.length + 1 };
    setBranches([...branches, newBranch]);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: Branch, b: Branch) => a.id - b.id,
    },
    {
      title: "Şube Adı",
      dataIndex: "name",
      key: "name",
      sorter: (a: Branch, b: Branch) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: Branch, b: Branch) => a.email.localeCompare(b.email),
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
      sorter: (a: Branch, b: Branch) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Sylog",
      dataIndex: "sylog",
      key: "sylog",
      sorter: (a: Branch, b: Branch) => a.sylog.localeCompare(b.sylog),
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_: any, record: Branch) => (
        <div style={{ display: "flex"}}>
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FF9900", color: "white" }}
          />
          <Button
            icon={<BarsOutlined />}
            style={{ backgroundColor: "#38B2AC", color: "white" }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
          />
        </div>
      ),
    },
  ];

  return (
    <Card style={{ margin: "20px"}}>
      <Row justify="space-between" align="middle" style={{ marginBottom: "20px" }}>
        <Col>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <BankOutlined style={{ fontSize: "18px", color: "#555" }} /> {/* Şube Listesi simgesi */}
            <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>Şube Listesi</h2>
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button icon={<SearchOutlined />} style={{ backgroundColor: "#FFA500", color: "white" }} />
            <Button icon={<ReloadOutlined />} style={{ backgroundColor: "#38B2AC", color: "white" }} />
            <Button
              icon={<PlusOutlined />}
              style={{ backgroundColor: "#39C5BB", color: "white" }}
              onClick={() => setIsRegisterOpen(true)}
            >
              Ekle
            </Button>
          </div>
        </Col>
      </Row>

      {/* Şube Tablosu */}
      <Table 
        dataSource={branches} 
        columns={columns} 
        rowKey="id" 
        pagination={false} // Sayfa sınırlaması ve gösterimi kaldırıldı
      />

      {/* Alt bilgi: Toplam kayıt */}
      <div style={{ textAlign: "left", marginTop: "10px" }}>
        <Tag color="blue">Toplam Kayıt: {branches.length}</Tag>
      </div>

      {/* Şube Kayıt Modal */}
      <BranchRegister
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSave={handleSaveBranch}
      />
    </Card>
  );
};

export default BranchList;
