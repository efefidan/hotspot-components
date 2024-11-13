import React, { useState } from 'react';
import { Button } from 'antd';

interface CompanyRegisterProps {
  onClose: () => void;
  onSave: (data: any) => void;
}

const CompanyRegister: React.FC<CompanyRegisterProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    fax: '',
    address: '',
    isActive: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium">Firma Adı</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
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
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Telefon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium">Fax</label>
          <input
            type="tel"
            name="fax"
            value={formData.fax}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Adres</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <label className="text-sm font-medium mr-2">Kullanım Durumu</label>
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
          className="form-checkbox h-5 w-5"
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
