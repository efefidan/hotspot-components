// components/BranchRegister.tsx
import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";

interface BranchData {
  name: string;
  email: string;
  phone: string;
  sylog: string;
}

interface BranchRegisterProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: BranchData) => void;
}

const BranchRegister: React.FC<BranchRegisterProps> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values as BranchData);
        form.resetFields();
        onClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Şube Bilgileri"
      visible={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Şube Adı"
          name="name"
          rules={[{ required: true, message: "Şube adı gereklidir." }]}
        >
          <Input placeholder="Şube Adı" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Email gereklidir." }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Telefon" name="phone">
          <Input placeholder="Telefon" />
        </Form.Item>
        <Form.Item
          label="Sylog"
          name="sylog"
          rules={[{ required: true, message: "Sylog gereklidir." }]}
        >
          <Input placeholder="Sylog" />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <Button onClick={onClose}>İptal</Button>
          <Button type="primary" onClick={handleSave}>
            Kaydet
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default BranchRegister;
