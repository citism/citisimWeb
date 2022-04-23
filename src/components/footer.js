import "./footer.css";
import classNames from "classnames";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#222222] z-50 w-full h-48 mt-auto flex justify-center items-center flex-col">
        <div className="footer_container_top">
          <div className="footer_left">
            <div className="footer_title">Network</div>
            <a
              href="https://www.mintscan.io/medibloc/validators/panaceavaloper1gvsgxrcv4uuqgxas5nq538f7hydg46mjx6lvuu"
              target="_blank"
            >
              <div className="text-gray-400 md:text-sm text-xs hover:text-[#1c41e7]">
                Medibloc
              </div>
            </a>
          </div>
          <div className={classNames("footer_center", "md:w-1/4 w-28")}>
            <div className="footer_title">Contact Us</div>
            <div className="text-gray-400 md:text-sm text-xs">
              admin@citism.dev
            </div>
          </div>
          <div className="footer_right">
            <div className="footer_title"></div>
            <div className="text-gray-400 md:text-sm text-xs"></div>
          </div>
        </div>
        <div className="footer_container_bot">
          <div className="footer_copyright">
            ⓒ 2022. CITISM all right reserved
          </div>
        </div>
      </footer>
    </>
  );
}
