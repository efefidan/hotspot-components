import React, { useState } from "react";
import { Table, Button, Modal, Row, Col, Card } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DesktopOutlined,
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import CompanyRegister from "./CompanyRegister";

interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  creationDate: string;
  branch: string;
}

const data: Company[] = [
  {
    id: 43,
    name: "İbrahim EV",
    email: "istanbul@mseteknoloji.com",
    phone: "65",
    creationDate: "24.05.2023",
    branch: "Erzurum",
  },
  {
    id: 44,
    name: "Ayşe Yılmaz",
    email: "ayse.yilmaz@ornekfirma.com",
    phone: "123456789",
    creationDate: "15.06.2023",
    branch: "İstanbul",
  },
  {
    id: 45,
    name: "Mehmet Kaya",
    email: "mehmet.kaya@isnet.com",
    phone: "987654321",
    creationDate: "01.03.2023",
    branch: "Ankara",
  },
  {
    id: 46,
    name: "Zeynep Karaca",
    email: "zeynep.karaca@karacagroup.com",
    phone: "555666777",
    creationDate: "10.09.2022",
    branch: "İzmir",
  },
  {
    id: 47,
    name: "Ahmet Çelik",
    email: "ahmet.celik@celikholding.com",
    phone: "445566778",
    creationDate: "20.11.2021",
    branch: "Bursa",
  },
  {
    id: 48,
    name: "Fatma Demir",
    email: "fatma.demir@demirinsaat.com",
    phone: "223344556",
    creationDate: "05.02.2023",
    branch: "Antalya",
  },
  {
    id: 49,
    name: "Ahmet Laz",
    email: "ahmetlaz@karacagroup.com",
    phone: "123456",
    creationDate: "11.09.2042",
    branch: "İzmir",
  },
];

const CompanyList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [isCompanyRegisterOpen, setIsCompanyRegisterOpen] = useState(false);

  const showModal = (content: JSX.Element) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const openCompanyRegister = () => {
    setIsCompanyRegisterOpen(true);
  };

  const closeCompanyRegister = () => {
    setIsCompanyRegisterOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: Company, b: Company) => a.id - b.id,
    },
    {
      title: "Firma Adı",
      dataIndex: "name",
      key: "name",
      sorter: (a: Company, b: Company) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: Company, b: Company) => a.email.localeCompare(b.email),
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
      sorter: (a: Company, b: Company) => a.phone.localeCompare(b.phone),
    },
    {
        title: "Oluşturma Tarihi",
        dataIndex: "creationDate",
        key: "creationDate",
        sorter: (a: Company, b: Company) => {
          const dateA = new Date(a.creationDate.split('.').reverse().join('-')).getTime();
          const dateB = new Date(b.creationDate.split('.').reverse().join('-')).getTime();
          return dateA - dateB;
        },
      },
      
    {
      title: "Şube",
      dataIndex: "branch",
      key: "branch",
      sorter: (a: Company, b: Company) => a.branch.localeCompare(b.branch),
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_: any, record: Company) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            icon={<DesktopOutlined />}
            onClick={() =>
              showModal(<p>Firma Listesini Göster: {record.name}</p>)
            }
            style={{ backgroundColor: "#38B2AC", color: "white" }}
          />
          <Button
            icon={<EyeOutlined />}
            onClick={() =>
              showModal(<p>Firma Detaylarını Görüntüle: {record.name}</p>)
            }
            style={{ backgroundColor: "#FF9900", color: "white" }}
          />
          <Button
            icon={<EditOutlined />}
            onClick={() =>
              showModal(<p>Firma Listesini Düzenle: {record.name}</p>)
            }
            style={{ backgroundColor: "#FFA500", color: "white" }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showModal(<p>Firma Sil: {record.name}</p>)}
            style={{ backgroundColor: "#FF4D4F", color: "white" }}
          />
        </div>
      ),
    },
  ];

  return (
    <Card style={{ margin: "20px", padding: "20px" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: "20px" }}>
        <Col>
          <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Firma Listesi</h2>
        </Col>
        <Col>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              icon={<SearchOutlined />}
              style={{ backgroundColor: "#FFA500", color: "white" }}
            />
            <Button
              icon={<ReloadOutlined />}
              style={{ backgroundColor: "#38B2AC", color: "white" }}
            />
            <Button
              icon={<PlusOutlined />}
              style={{ backgroundColor: "#39C5BB", color: "white" }}
              onClick={openCompanyRegister}
            >
              Ekle
            </Button>
          </div>
        </Col>
      </Row>

      <Table
  dataSource={data}
  columns={columns}
  rowKey="id"
  pagination={{ pageSize: 6 }} // Sayfalama ayarları
/>
      <Modal
        title="Firma Bilgileri"
        visible={isCompanyRegisterOpen}
        onCancel={closeCompanyRegister}
        footer={null}
      >
        <CompanyRegister
          onSave={(data) => console.log("Firma Bilgileri:", data)}
          onClose={closeCompanyRegister}
        />
      </Modal>
    </Card>
  );
};

export default CompanyList;
