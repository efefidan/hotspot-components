import React, { useState } from 'react';
import { Button } from 'antd';

interface UserRegisterProps {
  onClose: () => void;
  onSave: (data: any) => void;
}

const UserRegister: React.FC<UserRegisterProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    branch: '',
    email: '',
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
        <label className="block text-sm font-medium">Ad</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Soyad</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Şubeler</label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
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

export default UserRegister;
