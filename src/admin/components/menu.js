export const menuItems = [
  {
    id: 1,
    label: "Menu",
    isTitle: true,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: "ri-dashboard-line",
    badge: {
      variant: "success",
      text: "1",
    },
    link: "/admin",
  },
  {
    id: 3,
    label: "KBBI",
    icon: "ri-book-line",
    link: "/admin/kbbi",
  },
  {
    id: 4,
    label: "Translate",
    icon: "ri-store-2-line",
    subItems: [
      {
        id: 5,
        label: "ENG - IND",
        link: "/admin/eng-ind",
      },
      {
        id: 6,
        label: "IND - ENG",
        link: "/admin/ind-eng",
      },
    ],
  },
  {
    id: 7,
    label: "Arti Nama",
    icon: "ri-book-line",
    link: "/admin/artinama",
  },
  {
    id: 8,
    label: "Glossary",
    icon: "ri-book-line",
    link: "/admin/glossary",
  },
  {
    id: 9,
    label: "Report",
    icon: "ri-book-line",
    link: "/admin/report",
  },
];
