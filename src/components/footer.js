import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#222222] z-50 w-full h-40 px-5 py-2 mt-auto flex justify-center items-center">
        <div className="justify-around">
          <div className="flex items-center text-white">
            <span className="font-semibold text-2xl ml-3">Network</span>
          </div>
          <div className="text-sm "></div>
          <div>
            <a
              href="https://github.com/citismTeam/citisimWeb"
              className="inline-block text-sm px-6 py-2 leading-none text-white hover:text-[#1C41E7] mt-4"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
