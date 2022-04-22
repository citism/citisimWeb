import "./card.css";
import "tailwindcss/tailwind.css";
import mediImg from "../assets/networks/medibloc/medibloc.png";

export default function Card() {
  return (
    <>
      <div class="networkHeader"></div>
      <div class="cardMain">
        <div class="card">
          <div class="cardContent">
            <img src={mediImg} width="40%" />
            <div className="text-m mt-2">Mediblock</div>
            <div class="cardViewButton">
              <a
                className="text-xs"
                href="https://www.mintscan.io/medibloc/validators/panaceavaloper1gvsgxrcv4uuqgxas5nq538f7hydg46mjx6lvuu"
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
