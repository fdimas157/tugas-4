import { useState } from "react";
import Tombol from "./Tombol";

export default function Language(props) {
  const [showMore, setShowMore] = useState(false);
  const [like, setLike] = useState(false);
  const [color, setColor] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleLike() {
    setLike(!like);
    setColor(!color);
  }

  const styleCard = {
    display: "flex",
    padding: 10,
    margin: 10,
    backgroundColor: "rgb(6,57,112)",
    width: 250,
    height: 450,
  };

  const styleGambar = {
    width: 250,
    height: 250,
  };

  const styleH2 = {
    fontFamily: "monospace",
    textAlign: "center",
    color: "white"
  };

  const styleButton ={
    display: "flex",
    justifyContent: "center",
  }

  const teks = {
    textAlign: "justify",
    fontFamily: "monospace",
    fontSize: 15,
    color: "white"
  }

  return (
    <div style={styleCard}>
      <div>
        <img src={props.gambar} alt="" style={styleGambar} />
        <h1 style={styleH2}>{props.nama}</h1>
        {showMore && (
          <p style={teks}>
            {props.fullNama} {props.desk}
          </p>
        )}
        <div style={styleButton}>
          <Tombol handle={handleLike} color={color? "red" : "white"} teks={like? "Batal Suka" : "Suka"} />
          <Tombol handle={handleMoreClick} teks={showMore ? "Sembunyikan" : "Baca Selengkapnya"}/>
        </div>
      </div>
    </div>
  );
}
