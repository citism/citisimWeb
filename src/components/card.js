import "./card.css";
import mediImg from "../assets/networks/medibloc/medibloc.png"

export default function Card() {
  return (
    <>
      <div class="networkHeader"></div>
      <div class="cardMain">
        <div class="card">
          <div class="cardContent">
            <img src={mediImg} width="50%" />
            <div>
              Mediblock
            </div>
            <div class="cardViewButton">
              <a href="https://www.mintscan.io/medibloc/validators/panaceavaloper1gvsgxrcv4uuqgxas5nq538f7hydg46mjx6lvuu">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
