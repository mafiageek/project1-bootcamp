import travelpic from "./wheretogo.jpg";
import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div>
      <img src={travelpic} className="img-fluid" alt="travel pic" />
      <h1 className="textstyle">Where to go Next</h1>
    </div>
  );
}
