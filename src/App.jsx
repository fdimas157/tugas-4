import Language from "./components/Language";

export default function App() {
  const languages = [
    {
      id: 1,
      name: "HTML 5",
      fullName: "Hypertext Markup Language",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/195px-HTML5_logo_and_wordmark.svg.png",
      desc: "Adalah bahasa markup yang sering diguanakan oleh para web developer",
    },
    {
      id: 2,
      name: "CSS 3",
      fullName: "Cascading Style Sheets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png",
      desc: "Adalah bahasa yang biasa digunakan oleh para developer untuk mengubah gaya suatu website",
    },
    {
      id: 3,
      name: "JavaScript",
      fullName: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/JavaScript_screenshot.png/450px-JavaScript_screenshot.png",
      desc: "Adalah suatu bahasa pemorgraman tingkat tinggi dan dinamis",
    },
  ];
  return (
    <div style={{ display:"flex" }}>
      {languages.map((value, index) => {
        return (
          <Language
            key={index}
            nama={value.name}
            fullNama={value.fullName}
            gambar={value.image}
            desk={value.desc}
          />
        );
      })}
    </div>
  );
}
