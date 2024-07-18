import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { useLanguage } from "./ContextLanguage";

const ContextData = createContext();

export function useData() {
  return useContext(ContextData);
}

const page_tr = {
  headerData: {
    img: "./assets/header/yarımdaire.svg",
    imgDark: "./assets/header/geceyarımdaire.svg",
  },

  heroData: {
    greeting: "Merhaba👋",
    intoductoryText:
      "Ben Sinem. Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend projeleri geliştiriyorum. Görüşelim!",
    img: "/assets/hero/VESİKA.jpg",
    links: [
      {
        to: "https://github.com/sinemablak",
        logoThemeLight: "./assets/hero/githubgunduz.svg",
        logoThemeDark: "./assets/hero/githubG.svg",
      },
      {
        to: "https://www.linkedin.com/in/sinem-ablak-1046b5218/",
        logoThemeLight: "./assets/hero/link.svg",
        logoThemeDark: "./assets/hero/linkG.svg",
      },
    ],
    status: "Freelancer",
    project: "UX, UI, & Web Design",
    inviteMsg: "Beni takımınıza davet etmek için ->",
    email: "sinemablakk1@gmail.com",
    ring: "./assets/hero/yuv.svg",
    ringDark: "./assets/hero/yuvgece.svg",
    pill: "./assets/hero/kenar.svg",
  },

  skillsData: {
    title: "Yetenekler",
    list: [
      { name: "JAVASCRIPT", logo: "./assets/skills/js.png" },
      { name: "REACT", logo: "./assets/skills/rectangle.png" },
      { name: "REDUX", logo: "./assets/skills/redux.png" },
      { name: "NODE", logo: "./assets/skills/node.png" },
      { name: "VS CODE", logo: "./assets/skills/vscode.png" },
      { name: "FIGMA", logo: "./assets/skills/figma.png" },
    ],
    pill: "./assets/skills/light.svg",
    pilldark: "./assets/skills/ellipse.svg",
  },

  projectsData: {
    title: "Projeler",
    list: [
      {
        title: "Pizza Sipariş Sitesi",
        summary:
          "Bu bir pizza sipariş sitesi. Teknolojik Yemekler' markasına, 'Anasayfa', 'Sipariş Formu' ve 'Sipariş Alındı' sayfasından oluşan bir yemek sayfası oluşturulmuştur.Sipariş formu sayesinde pizza için ek malzemeler, hamur kalınlığı, boyut seçebiliyorsunuz.Sipariş notu ekleyebiliyor ve adet değiştirebiliyorsunuz.Seçimler yapıldıktan sonra sipariş özetini görüntüleyebilirsiniz.",
        technologies: [
          "react",
          "axios",
          "router",
          "yup",
          "toastify",
          "cypress.io",
        ],
        links: [
          {
            text: "Github'ta görüntüle.",
            to: "https://github.com/sinemablak/fsweb-s7-challenge-pizza",
          },
          {
            text: "Uygulamaya Git",
            to: "",
            hasLogo: true,
          },
        ],
        bgClrThemeLight: "bg-DDEEFE",
        bgClrThemeDark: "bg-2D3235",

        image2: "./assets/projects/pizza.png",
        image: "./assets/projects/pc.svg",
      },

      {
        title: "DOM Egzersizleri",
        summary:
          "Bu proje de Javascript Dom manipülasyonları ile ilgili örnekler bulunmaktadır.DOM, HTML, XML veya XHTML dokümanlarındaki her bir öğeyi bir nesne olarak temsil eden bir API'dir. Bu API, JavaScript tarafından kullanılarak web sayfasının içeriğine erişilmesini ve değiştirilmesini sağlar.",
        technologies: [
          "react",
          "redux",
          "vercel",
          "redux thunk",
          "localstorage",
        ],
        links: [
          {
            text: "View on Github",
            to: "https://github.com/sinemablak/js-DOM",
          },
          {
            text: "Go to app",
            to: "",
            hasLogo: true,
          },
        ],
        image: "./assets/projects/pc.svg",
        bgClrThemeLight: "bg-D9F6F1",
        bgClrThemeDark: "bg-495351",
      },
    ],

    linkLogo: "",
    linkLogoDark: "",
  },

  profileData: {
    title: "Profil",
    basicInfo: {
      title: "Temel Bilgiler",
      info: [
        { label: "Doğum Tarihi", text: "25.09.1998" },
        { label: "İkamet Şehri", text: "Ankara" },
        {
          label: "Eğitim Durumu",
          text: "Kırıkkale Üniversitesi, Bilgisayar Mühendisliği Lisans, 2023",
        },
        { label: "Tercih Ettiği Rol", text: "Full Stack Developer" },
      ],
    },

    aboutMe: {
      title: "Hakkımda",
      paragraphs: [
        "Kırıkkale Üniversitesi, Bilgisayar Mühendisliği mezunuyum. Teknolojiye olan tutkum, beni sürekli olarak yeni şeyler öğrenmeye ve projeler geliştirmeye yönlendiriyor. ",
        "Burada, teknoloji, yazılım geliştirme ve kişisel projelerim hakkında deneyimlerimi ve bilgilerimi paylaşıyorum. Sizleri bu yolculuğa davet ediyorum! ",
      ],
    },
    ring: "./assets/profile/ellipse.svg",
  },

  footerData: {
    msg: "Yeni projenizde birlikte çalışalım.",
    links: [
      {
        name: "Github",
        to: "https://github.com/sinemablak",
        color: "clr-1769FF",
      },
      {
        name: "Kişisel Blog",
        to: "#",
        color: "clr-black",
        colorThemeDark: "clr-white",
      },
      {
        name: "Linkedin",
        to: "https://www.linkedin.com/in/sinem-ablak-1046b5218/",
        color: "clr-0077B5",
      },
      { name: "Email", to: "#", color: "clr-AF0C48" },
    ],
  },
};

const page_en = {
  headerData: {
    img: "./assets/header/yarımdaire.svg",
    imgDark: "./assets/header/geceyarımdaire.svg",
  },

  heroData: {
    greeting: "Hello👋",
    intoductoryText:
      "I’m Sinem. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
    img: "/assets/hero/VESİKA.jpg",
    links: [
      {
        to: "https://github.com/sinemablak",
        logoThemeLight: "./assets/hero/githubgunduz.svg",
        logoThemeDark: "./assets/hero/githubG.svg",
      },
      {
        to: "https://github.com/sinemablak",
        logoThemeLight: "./assets/hero/link.svg",
        logoThemeDark: "./assets/hero/linkG.svg",
      },
    ],

    status: "Freelancing",
    project: "UX, UI, & Web Design",
    inviteMsg: "Invite me to join your team ->",
    email: "sinemablakk1@gmail.com",
    ring: "./assets/hero/yuv.svg",
    ringDark: "./assets/hero/yuvgece.svg",
    pill: "./assets/hero/kenar.svg",
  },

  skillsData: {
    title: "Skills",
    list: [
      { name: "JAVASCRIPT", logo: "./assets/skills/js.png" },
      { name: "REACT", logo: "./assets/skills/rectangle.png" },
      { name: "REDUX", logo: "./assets/skills/redux.png" },
      { name: "NODE", logo: "./assets/skills/node.png" },
      { name: "VS CODE", logo: "./assets/skills/vscode.png" },
      { name: "FIGMA", logo: "./assets/skills/figma.png" },
    ],
    pill: "./assets/skills/ellipse.svg",
  },

  profileData: {
    title: "Profile",
    basicInfo: {
      title: "Basic Information",
      info: [
        { label: "Date of Birth", text: "25.09.1998" },
        { label: "Current City", text: "Ankara" },
        {
          label: "Education",
          text: "Kırıkkale University, Licence Computer Engineering, 2023",
        },
        { label: "Preferred Role", text: "Full Stack Developer" },
      ],
    },

    aboutMe: {
      title: "About Me",
      paragraphs: [
        "I graduated from Kırıkkale University, Computer Engineering. My passion for technology constantly leads me to learn new things and develop projects.",
        "Here, I share my experiences and knowledge about technology, software development and my personal projects. I invite you to this journey! ",
      ],
    },
    ring: "./assets/profile/ellipse.svg",
  },

  projectsData: {
    title: "Projects",
    list: [
      {
        title: "Pizza Ordering Website",
        summary:
          "This is a pizza ordering site. A food page consisting of 'Home Page', 'Order Form' and 'Order Received' page is registered to the Teknolojik Yemek brand. Thanks to the order form, you can choose additional features, dough shaping and size for the pizza. You can add an order note and quantity 'You can view the order summary after the selections are made.'",
        technologies: [
          "react",
          "axios",
          "router",
          "yup",
          "toastify",
          "cypress.io",
        ],
        links: [
          {
            text: "View on Github",
            to: "https://github.com/sinemablak/fsweb-s7-challenge-pizza",
          },
          {
            text: "Go to app",
            to: "https://github.com/sinemablak/fsweb-s7-challenge-pizza",
            hasLogo: true,
          },
        ],
        bgClrThemeLight: "bg-DDEEFE",
        bgClrThemeDark: "bg-2D3235",

        image: "./assets/projects/pc.svg",
      },
      {
        title: "DOM Exercises",
        summary:
          "This project also contains examples of Javascript Dom manipulations. DOM is an API that represents each element in HTML, XML or XHTML documents as an object. This API is used by JavaScript to access and modify the content of the web page.",
        technologies: [
          "react",
          "redux",
          "vercel",
          "javascript",
          "localstorage",
          "DOM",
        ],
        links: [
          {
            text: "View on Github",
            to: "https://github.com/sinemablak/js-DOM",
          },
          {
            text: "Go to app",
            to: "https://github.com/sinemablak/js-DOM",
            hasLogo: true,
          },
        ],
        image: "./assets/projects/pc.svg",
        bgClrThemeLight: "bg-D9F6F1",
        bgClrThemeDark: "bg-495351",
      },
    ],

    linkLogo: "",
    linkLogoDark: "",
  },

  footerData: {
    msg: "Let's work togetger on your next product.",
    links: [
      {
        name: "Github",
        to: "https://github.com/sinemablak",
        color: "clr-1769FF",
      },
      {
        name: "Personal Blog",
        to: "#",
        color: "clr-black",
        colorThemeDark: "clr-white",
      },
      {
        name: "Linkedin",
        to: "https://www.linkedin.com/in/sinem-ablak-1046b5218/",
        color: "clr-0077B5",
      },
      { name: "Email", to: "sinemablakk1@gmail.com", color: "clr-AF0C48" },
    ],
  },
};

export function ContextDataProvider({ children }) {
  const { eLanguage, language } = useLanguage();
  const [data, setData] = useState({});

  useEffect(() => {
    let payload = null;
    switch (language) {
      case eLanguage.tr:
        payload = page_tr;
        break;
      case eLanguage.en:
        payload = page_en;
        break;
      default:
        payload = page_tr;
        break;
    }

    axios
      .post("https://reqres.in/api/users", payload)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [language, eLanguage]);

  return (
    <ContextData.Provider value={{ data }}>{children}</ContextData.Provider>
  );
}
