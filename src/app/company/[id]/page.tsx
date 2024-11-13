"use client"
import { useRouter } from "next/navigation";
import { Button, Card, Row, Col, Tag } from "antd";
import { Company } from "@/components/CompanyList"; // Şirket tipi aynı komponentten alınırsa burada doğru yolu verin
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { HomeOutlined, CheckOutlined, StarOutlined, PhoneOutlined } from "@ant-design/icons";


const CompanyDetail = ({ params }: { params: { id: string } }) => {
    const companyId = params.id;
    const router = useRouter();

  
    // Veriyi ID'ye göre bulmak için örnek veriyi burada kullanabilirsiniz.
    const data = [
      { id: 43, name: "İbrahim EV", email: "istanbul@mseteknoloji.com", phone: "65", creationDate: "24.05.2023", branch: "Erzurum" },
      { id: 44, name: "Ayşe Yılmaz", email: "ayse.yilmaz@ornekfirma.com", phone: "123456789", creationDate: "15.06.2023", branch: "İstanbul" },
      { id: 45, name: "Mehmet Kaya", email: "mehmet.kaya@isnet.com", phone: "987654321", creationDate: "01.03.2023", branch: "Ankara" },
      { id: 46, name: "Zeynep Karaca", email: "zeynep.karaca@karacagroup.com", phone: "555666777", creationDate: "10.09.2022", branch: "İzmir" },
      { id: 47, name: "Ahmet Çelik", email: "ahmet.celik@celikholding.com", phone: "445566778", creationDate: "20.11.2021", branch: "Bursa" },
      { id: 48, name: "Fatma Demir", email: "fatma.demir@demirinsaat.com", phone: "223344556", creationDate: "05.02.2023", branch: "Antalya" },
    ];
  
    // ID'yi sayıya çevirip veriyi buluyoruz
    const company = data.find((item) => item.id === Number(companyId));
  
    if (!company) {
      return <p>Şirket bulunamadı</p>;
    }
    
    
    return (
        <Card
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #f0f0f0",
          }}
        >
          <Row justify="space-between">
            {/* Sol Taraf: İsim, E-posta ve Düzenle/Sil Butonları */}
            <Col span={12}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "4px" }}>{company.name}</h2>
              <p style={{ color: "#888", marginBottom: "16px" }}>{company.email}</p>
              <Button
                icon={<EditOutlined />}
                style={{
                  backgroundColor: "#38B2AC",
                  color: "white",
                  borderRadius: "5px",
                  marginRight: "8px",
                  padding: "0 16px",
                }}
              >
                Düzenle
              </Button>
              <Button
                icon={<DeleteOutlined />}
                danger
                style={{
                  borderRadius: "5px",
                  padding: "0 16px",
                }}
              >
                Sil
              </Button>
            </Col>
    
            {/* Sağ Taraf: Company ID, Status, Kayıt Tarihi, Telefon */}
            <Col span={12}>
              <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <Row justify="space-between" align="middle">
                  <Col style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
                    <HomeOutlined />
                    <span style={{ fontWeight: "bold" }}>Company ID:</span>
                  </Col>
                  <Col style={{ textAlign: "left" }}>{company.id}</Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
                    <CheckOutlined />
                    <span style={{ fontWeight: "bold" }}>Status:</span>
                  </Col>
                  <Col style={{ textAlign: "left" }}>
                    <Tag color="green">Aktif</Tag>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
                    <StarOutlined />
                    <span style={{ fontWeight: "bold" }}>Kayıt Tarihi:</span>
                  </Col>
                  <Col style={{ textAlign: "left" }}>{company.creationDate}</Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
                    <PhoneOutlined />
                    <span style={{ fontWeight: "bold" }}>Telefon:</span>
                  </Col>
                  <Col style={{ textAlign: "left" }}>{company.phone}</Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* Geri Dön Butonu */}
          <Button
        onClick={() => router.push("/")}
        style={{
              marginTop: "20px",
              width: "100%",
              backgroundColor: "#f0f2f5",
              color: "#333",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Geri Dön
          </Button>
        </Card>
      );
};

export default CompanyDetail;
