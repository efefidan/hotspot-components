import React, { useState } from 'react';
import { Table, Button, Modal, Row, Col, Card } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, DesktopOutlined, PlusOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import CompanyRegister from './CompanyRegister';

interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  creationDate: string;
  branch: string;
}

const data: Company[] = [
  { id: 43, name: 'İbrahim EV', email: 'istanbul@mseteknoloji.com', phone: '65', creationDate: '24.05.2023', branch: '-' },
  // Diğer firma verilerini buraya ekleyebilirsiniz
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
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Firma Adı', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Telefon', dataIndex: 'phone', key: 'phone' },
    { title: 'Oluşturma Tarihi', dataIndex: 'creationDate', key: 'creationDate' },
    { title: 'Şube', dataIndex: 'branch', key: 'branch' },
    {
      title: 'İşlemler',
      key: 'actions',
      render: (_: any, record: Company) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            icon={<DesktopOutlined />}
            onClick={() => showModal(<p>Firma Listesini Göster: {record.name}</p>)}
            style={{ backgroundColor: '#38B2AC', color: 'white' }}
          />
          <Button
            icon={<EyeOutlined />}
            onClick={() => showModal(<p>Firma Detaylarını Görüntüle: {record.name}</p>)}
            style={{ backgroundColor: '#FF9900', color: 'white' }}
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => showModal(<p>Firma Listesini Düzenle: {record.name}</p>)}
            style={{ backgroundColor: '#FFA500', color: 'white' }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showModal(<p>Firma Sil: {record.name}</p>)}
            style={{ backgroundColor: '#FF4D4F', color: 'white' }}
          />
        </div>
      ),
    },
  ];

  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      {/* Üst kısım: Başlık ve butonlar */}
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Firma Listesi</h2>
        </Col>
        <Col>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button icon={<SearchOutlined />} style={{ backgroundColor: '#FFA500', color: 'white' }} />
            <Button icon={<ReloadOutlined />} style={{ backgroundColor: '#38B2AC', color: 'white' }} />
            <Button icon={<PlusOutlined />} style={{ backgroundColor: '#39C5BB', color: 'white' }} onClick={openCompanyRegister}>
              Ekle
            </Button>
          </div>
        </Col>
      </Row>

      {/* Firma Tablosu */}
      <Table dataSource={data} columns={columns} rowKey="id" />

      {/* Firma Ekle Modal */}
      <Modal
        title="Firma Bilgileri"
        visible={isCompanyRegisterOpen}
        onCancel={closeCompanyRegister}
        footer={null}
      >
        <CompanyRegister onSave={(data) => console.log("Firma Bilgileri:", data)} onClose={closeCompanyRegister} />
      </Modal>
    </Card>
  );
};

export default CompanyList;
