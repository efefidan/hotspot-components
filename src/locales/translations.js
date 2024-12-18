// translations.js
const translations = {
  en: {
    guestTrafficChart: {
      title: "Guest Traffic",
      download: "Download",
      upload: "Upload",
      processor: "Processor",
      memory: "Memory",
      timeOptions: {
        "10 min": "10 min",
        "30 min": "30 min",
        "60 min": "60 min",
      },
      unit: "mbps",
    },
    currentLogsTable: {
      title: "Current Logs",
      hotelName: "Hotel Name",
      logName: "Log Name",
      date: "Date",
      actions: "Actions",
      edit: "Edit",
      delete: "Delete",
      editTitle: "Edit Log Details",
      cancel: "Cancel",
      save: "Save",
      seeAll: "See All Connections",
    },
    connectionDetailsTable: {
      title: "Current Connections",
      room: "Room",
      ipAddress: "IP Address",
      macAddress: "MAC",
      fullName: "Full Name",
      email: "Email",
      date: "Date",
      birthday: "Birthday",
      actions: "Actions",
      edit: "Edit",
      delete: "Delete",
      editTitle: "Edit Connection Details",
      cancel: "Cancel",
      save: "Save",
      seeAll: "See All Connections",
    },
    licenseExpireList: {
      title: "License Expire List",
      daysLeft: "Days Left",
    },
    dashboard: {
      title: "User Information Chart",
      ageStatistic: "Age Statistic",
      devicesStatistic: "Devices Statistic",
      browserStatistic: "Web Browser Statistic",
      ageRanges: [
        "0-12 age",
        "13-17 age",
        "18-24 age",
        "25-34 age",
        "35-44 age",
        "45-54 age",
        "55-64 age",
        "+64 age",
      ],
      devices: ["Mobile", "Desktop", "Tablet"],
      browsers: ["Chrome", "Firefox", "Safari", "Edge"],
      settings: "Settings",
    },
    hotelStats: {
      totalHotel: "Total Hotel",
      activeGuest: "Active Guest",
      hotelActivityRank: "Hotel Activity Rank",
      active: "Active",
    },
    sidebar: {
      dashboard: "Dashboard",
      groupAnalysis: "Group Analysis",
      guestRelations: "Guest Relations",
      settings: "Settings",
      integrations: "Integrations",
      log: "Log",
      modules: "Modules",
      support: "Support",
      language: "Language",
      english: "English",
      turkish: "Turkish",
      german: "German",
      version: "v12.5.23",
      branchStatus: "Selected Branch: Active", // Added
      searchPlaceholder: "Search...", // Added
    },
    userProfile: {
      name: "Murat Tenil",
      email: "murattenil@icloud.com",
    },
    header: {
      dashboard: "Dashboard",
      notification: "Notification",
      notificationsTitle: "Notifications",
      noNotifications: "No notifications",
      welcome: "Welcome Murat,",
      updatesMessage: "You can display all updates here",
      lastUpdate: "Last Update: 26.09.2024",
      exportData: "Export Data",
      modalTitle: "Export Data",
      userStats: "User Stats",
      userInformationChart: "User Information Chart",
      connectionsDetail: "Connections Detail",
      currentLogs: "Current Logs",
      download: "Download",
      read: "Read",
      unread: "Unread",
      delete: "Delete",
    },
    userStats: {
      totalDealer: "Total Dealer",
      todayDealer: "Today Dealer",
      lastWeekDealer: "Last Week Dealer",
      lastMonthDealer: "Last Month Dealer",
      totalClient: "Total Client",
      todayClient: "Today Client",
      lastWeekClient: "Last Week Client",
      lastMonthClient: "Last Month Client",
      activeGuest: "Active Guest",
      guestAllTheTime: "Guest All The Time",
      dateRange: "Date Range",
      ranges: {
        total: "Total",
        today: "Today",
        lastWeek: "Last Week",
        lastMonth: "Last Month",
      },
    },
  },
  tr: {
    guestTrafficChart: {
      title: "Misafir Trafiği",
      download: "İndir",
      upload: "Yükle",
      processor: "İşlemci",
      memory: "Hafıza",
      timeOptions: {
        "10 min": "10 dk",
        "30 min": "30 dk",
        "60 min": "60 dk",
      },
      unit: "mbps",
    },
    currentLogsTable: {
      title: "Güncel Kayıtlar",
      hotelName: "Otel Adı",
      logName: "Kayıt Adı",
      date: "Tarih",
      actions: "İşlemler",
      edit: "Düzenle",
      delete: "Sil",
      editTitle: "Kayıt Detaylarını Düzenle",
      cancel: "İptal",
      save: "Kaydet",
      seeAll: "Tüm Bağlantıları Gör",
    },
    connectionDetailsTable: {
      title: "Mevcut Bağlantılar",
      room: "Oda",
      ipAddress: "IP Adresi",
      macAddress: "MAC",
      fullName: "Ad Soyad",
      email: "E-posta",
      date: "Tarih",
      birthday: "Doğum Günü",
      actions: "İşlemler",
      edit: "Düzenle",
      delete: "Sil",
      editTitle: "Bağlantı Detaylarını Düzenle",
      cancel: "İptal",
      save: "Kaydet",
      seeAll: "Tüm Bağlantıları Gör",
    },
    licenseExpireList: {
      title: "Lisans Süresi Dolacaklar",
      daysLeft: "Gün Kaldı",
    },
    dashboard: {
      title: "Kullanıcı Bilgi Grafiği",
      ageStatistic: "Yaş İstatistiği",
      devicesStatistic: "Cihaz İstatistiği",
      browserStatistic: "Tarayıcı İstatistiği",
      ageRanges: [
        "0-12 yaş",
        "13-17 yaş",
        "18-24 yaş",
        "25-34 yaş",
        "35-44 yaş",
        "45-54 yaş",
        "55-64 yaş",
        "+64 yaş",
      ],
      devices: ["Mobil", "Masaüstü", "Tablet"],
      browsers: ["Chrome", "Firefox", "Safari", "Edge"],
      settings: "Ayarlar",
    },
    hotelStats: {
      totalHotel: "Toplam Otel",
      activeGuest: "Aktif Misafir",
      hotelActivityRank: "Otel Aktivite Sıralaması",
      active: "Aktif",
    },
    sidebar: {
      dashboard: "Gösterge Paneli",
      groupAnalysis: "Grup Analizi",
      guestRelations: "Misafir İlişkileri",
      settings: "Ayarlar",
      integrations: "Entegrasyonlar",
      log: "Kayıtlar",
      modules: "Modüller",
      support: "Destek",
      language: "Dil",
      english: "İngilizce",
      turkish: "Türkçe",
      german: "Almanca",
      version: "v12.5.23",
      branchStatus: "Seçili Şube: Aktif", // Added
      searchPlaceholder: "Ara...", // Added
    },
    userProfile: {
      name: "Murat Tenil",
      email: "murattenil@icloud.com",
    },
    header: {
      dashboard: "Gösterge Paneli",
      notification: "Bildirim",
      notificationsTitle: "Bildirimler",
      noNotifications: "Bildirim yok",
      welcome: "Hoş geldin Murat,",
      updatesMessage: "Tüm güncellemeleri burada görüntüleyebilirsiniz",
      lastUpdate: "Son Güncelleme: 26.09.2024",
      exportData: "Veriyi Dışa Aktar",
      modalTitle: "Veriyi Dışa Aktar",
      userStats: "Kullanıcı İstatistikleri",
      userInformationChart: "Kullanıcı Bilgi Grafiği",
      connectionsDetail: "Bağlantı Detayları",
      currentLogs: "Güncel Kayıtlar",
      download: "İndir",
      read: "Okundu",
      unread: "Okunmadı",
      delete: "Sil",
    },
    userStats: {
      totalDealer: "Toplam Bayi",
      todayDealer: "Bugünkü Bayi",
      lastWeekDealer: "Geçen Hafta Bayi",
      lastMonthDealer: "Geçen Ay Bayi",
      totalClient: "Toplam Müşteri",
      todayClient: "Bugünkü Müşteri",
      lastWeekClient: "Geçen Hafta Müşteri",
      lastMonthClient: "Geçen Ay Müşteri",
      activeGuest: "Aktif Misafir",
      guestAllTheTime: "Her Zaman Misafir",
      dateRange: "Tarih Aralığı",
      ranges: {
        total: "Toplam",
        today: "Bugün",
        lastWeek: "Geçen Hafta",
        lastMonth: "Geçen Ay",
      },
    },
  },
  de: {
    guestTrafficChart: {
      title: "Gastverkehr",
      download: "Herunterladen",
      upload: "Hochladen",
      processor: "Prozessor",
      memory: "Speicher",
      timeOptions: {
        "10 min": "10 Min",
        "30 min": "30 Min",
        "60 min": "60 Min",
      },
      unit: "mbps",
    },
    currentLogsTable: {
      title: "Aktuelle Protokolle",
      hotelName: "Hotelname",
      logName: "Protokollname",
      date: "Datum",
      actions: "Aktionen",
      edit: "Bearbeiten",
      delete: "Löschen",
      editTitle: "Protokolldetails bearbeiten",
      cancel: "Abbrechen",
      save: "Speichern",
      seeAll: "Alle Verbindungen anzeigen",
    },
    connectionDetailsTable: {
      title: "Aktuelle Verbindungen",
      room: "Raum",
      ipAddress: "IP Adresse",
      macAddress: "MAC",
      fullName: "Vollständiger Name",
      email: "E-Mail",
      date: "Datum",
      birthday: "Geburtstag",
      actions: "Aktionen",
      edit: "Bearbeiten",
      delete: "Löschen",
      editTitle: "Verbindungsdetails bearbeiten",
      cancel: "Abbrechen",
      save: "Speichern",
      seeAll: "Alle Verbindungen ansehen",
    },
    licenseExpireList: {
      title: "Lizenzablaufliste",
      daysLeft: "Tage Übrig",
    },
    dashboard: {
      title: "Benutzerinformationsdiagramm",
      ageStatistic: "Altersstatistik",
      devicesStatistic: "Gerätestatistik",
      browserStatistic: "Browser-Statistik",
      ageRanges: [
        "0-12 Jahre",
        "13-17 Jahre",
        "18-24 Jahre",
        "25-34 Jahre",
        "35-44 Jahre",
        "45-54 Jahre",
        "55-64 Jahre",
        "+64 Jahre",
      ],
      devices: ["Mobil", "Desktop", "Tablet"],
      browsers: ["Chrome", "Firefox", "Safari", "Edge"],
      settings: "Einstellungen",
    },
    hotelStats: {
      totalHotel: "Gesamthotel",
      activeGuest: "Aktiver Gast",
      hotelActivityRank: "Hotel Aktivitätsrang",
      active: "Aktiv",
    },
    sidebar: {
      dashboard: "Instrumententafel",
      groupAnalysis: "Gruppenanalyse",
      guestRelations: "Gästebetreuung",
      settings: "Einstellungen",
      integrations: "Integrationen",
      log: "Protokoll",
      modules: "Module",
      support: "Unterstützung",
      language: "Sprache",
      english: "Englisch",
      turkish: "Türkisch",
      german: "Deutsch",
      version: "v12.5.23",
      branchStatus: "Ausgewählte Filiale: Aktiv", // Added
      searchPlaceholder: "Suchen...", // Added
    },
    userProfile: {
      name: "Murat Tenil",
      email: "murattenil@icloud.com",
    },
    header: {
      dashboard: "Instrumententafel",
      notification: "Benachrichtigung",
      notificationsTitle: "Benachrichtigungen",
      noNotifications: "Keine Benachrichtigungen",
      welcome: "Willkommen Murat,",
      updatesMessage: "Alle Updates können Sie hier anzeigen",
      lastUpdate: "Letztes Update: 26.09.2024",
      exportData: "Daten exportieren",
      modalTitle: "Daten exportieren",
      userStats: "Benutzerstatistiken",
      userInformationChart: "Benutzerinformationsdiagramm",
      connectionsDetail: "Verbindungsdetails",
      currentLogs: "Aktuelle Protokolle",
      download: "Herunterladen",
      read: "Gelesen",
      unread: "Ungelesen",
      delete: "Löschen",
    },
    userStats: {
      totalDealer: "Gesamthändler",
      todayDealer: "Heutiger Händler",
      lastWeekDealer: "Letzte Woche Händler",
      lastMonthDealer: "Letzten Monat Händler",
      totalClient: "Gesamtkunde",
      todayClient: "Heutiger Kunde",
      lastWeekClient: "Letzte Woche Kunde",
      lastMonthClient: "Letzten Monat Kunde",
      activeGuest: "Aktiver Gast",
      guestAllTheTime: "Immer Gast",
      dateRange: "Datumsbereich",
      ranges: {
        total: "Toplam",
        today: "Bugün",
        lastWeek: "Geçen Hafta",
        lastMonth: "Geçen Ay",
      },
    },
  },
};

export default translations;
