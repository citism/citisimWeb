import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#222222] z-50 w-full h-48 mt-auto flex justify-center items-center flex-col">
        <div className="footer_container_top">
          <div className="footer_left">
            <div className="footer_title">Network</div>
            <div className="text-gray-400 text-sm">Medibloc</div>
          </div>
          <div className="footer_center">
            <div className="footer_title">Contact Us</div>
            <div className="text-gray-400 text-sm">
              {/* //? 지웅님 메일을 제가 몰라요ㅜㅜ */}
              abcd@gmail.com
            </div>
          </div>
          <div className="footer_right">
            <div className="footer_title">Social</div>
            <div className="text-gray-400 text-sm">Discord</div>
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
