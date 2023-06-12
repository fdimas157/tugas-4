export default function Tombol(props) {
  const condition1 = {
    backgroundColor: props.color,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontFamily: "monospace",
    fontWeight: "bold",
    cursor: "pointer",
  };
  return (
    <button onClick={props.handle} style={condition1}>
      {props.teks}
    </button>
  );
}
