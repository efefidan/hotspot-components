// src/app/company/[id]/page.tsx
"use client";
import CompanyDetail from "@/components/companypage/CompanyDetail";
import BranchList from "@/components/companypage/BranchList";
import UserList from "@/components/companypage/UserList";

const CompanyPage = ({ params }: { params: { id: string } }) => {
  const companyId = params.id;

  // Örnek firma verisi
  const data = [
    { id: 43, name: "İbrahim EV", email: "istanbul@mseteknoloji.com", phone: "65", creationDate: "24.05.2023", branch: "Erzurum" },
    { id: 44, name: "Ayşe Yılmaz", email: "ayse.yilmaz@ornekfirma.com", phone: "123456789", creationDate: "15.06.2023", branch: "İstanbul" },
    { id: 45, name: "Mehmet Kaya", email: "mehmet.kaya@isnet.com", phone: "987654321", creationDate: "01.03.2023", branch: "Ankara" },
    { id: 46, name: "Zeynep Karaca", email: "zeynep.karaca@karacagroup.com", phone: "555666777", creationDate: "10.09.2022", branch: "İzmir" },
    { id: 47, name: "Ahmet Çelik", email: "ahmet.celik@celikholding.com", phone: "445566778", creationDate: "20.11.2021", branch: "Bursa" },
    { id: 48, name: "Fatma Demir", email: "fatma.demir@demirinsaat.com", phone: "223344556", creationDate: "05.02.2023", branch: "Antalya" },
  ];

  // ID'ye göre ilgili firmayı bul
  const company = data.find((item) => item.id === Number(companyId));

  if (!company) {
    return <p>Şirket bulunamadı</p>;
  }

  return <><CompanyDetail company={company} /><BranchList /><UserList/></>;
  
};

export default CompanyPage;
