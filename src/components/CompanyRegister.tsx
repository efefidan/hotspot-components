import React, { useState } from 'react';
import { Button } from 'antd';

interface CompanyRegisterProps {
  onClose: () => void;
  onSave: (data: any) => void;
}

const CompanyRegister: React.FC<CompanyRegisterProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creationDate: '',
    branch: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData); // Form verisini üst bileşene gönder
    onClose(); // Modalı kapat
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium">Firma Adı</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">E Mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Telefon</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Kayıt Tarihi</label>
        <input
          type="date"
          name="creationDate"
          value={formData.creationDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Şube</label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
          İptal
        </Button>
        <Button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">
          Ekle
        </Button>
      </div>
    </form>
  );
};

export default CompanyRegister;
