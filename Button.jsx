import "../App.css"

export default function Button(props) {
  return (
    <button onClick={props.click} className="generate-btn">
      Generate Quote
    </button>   
  );
}
