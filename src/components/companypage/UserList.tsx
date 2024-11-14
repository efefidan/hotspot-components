import React, { useState } from "react";
import { Table, Button, Row, Col, Card, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UserRegister from "./UserRegister"; // Kullanıcı kayıt popupu için ayrı bir komponent

interface User {
  id: number;
  firstName: string;
  lastName: string;
  branch: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 171,
      firstName: "ibrahim",
      lastName: "test",
      branch: "EV",
      email: "test1@gmail.com",
    },
    // Diğer kullanıcı örnekleri buraya eklenebilir
  ]);

  const [isUserRegisterOpen, setIsUserRegisterOpen] = useState(false);

  const openUserRegister = () => {
    setIsUserRegisterOpen(true);
  };

  const closeUserRegister = () => {
    setIsUserRegisterOpen(false);
  };

  const handleSaveUser = (userData: Omit<User, "id">) => {
    const newUser = {
      ...userData,
      id: users.length ? users[users.length - 1].id + 1 : 1,
    };
    setUsers([...users, newUser]);
    closeUserRegister();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: User, b: User) => a.id - b.id,
    },
    {
      title: "Ad",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Soyad",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Şubeler",
      dataIndex: "branch",
      key: "branch",
      sorter: (a: User, b: User) => a.branch.localeCompare(b.branch),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: User, b: User) => a.email.localeCompare(b.email),
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_: any, record: User) => (
        <div style={{ display: "flex" }}>
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA500", color: "white" }}
          />
          <Button
            icon={<DeleteOutlined />}
            style={{ backgroundColor: "#FF4D4F", color: "white" }}
          />
        </div>
      ),
    },
  ];

  return (
    <Card style={{ margin: "20px" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: "20px" }}>
        <Col>
          <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Kullanıcı Listesi</h2>
        </Col>
        <Col>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button icon={<SearchOutlined />} style={{ backgroundColor: "#FFA500", color: "white" }} />
            <Button icon={<ReloadOutlined />} style={{ backgroundColor: "#38B2AC", color: "white" }} />
            <Button icon={<PlusOutlined />} style={{ backgroundColor: "#39C5BB", color: "white" }} onClick={openUserRegister}>
              Ekle
            </Button>
          </div>
        </Col>
      </Row>

      <Table dataSource={users} columns={columns} rowKey="id" pagination={false} />

      <Modal title="Kullanıcı Bilgileri" visible={isUserRegisterOpen} onCancel={closeUserRegister} footer={null}>
        <UserRegister onSave={handleSaveUser} onClose={closeUserRegister} />
      </Modal>

      <div style={{ marginTop: "10px", textAlign: "left", fontWeight: "bold" }}>
        Toplam Kayıt: {users.length}
      </div>
    </Card>
  );
};

export default UserList;
