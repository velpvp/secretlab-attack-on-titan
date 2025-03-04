export function Footer() {
  return (
    <footer className="pt-10 flex items-center justify-center flex-col text-center">
      <div className="w-full max-w-[80%] p-5 border-b-[1px] border-gray-600 flex items-center justify-center">
        <p>
          ©Hajime Isayama, Kodansha/"ATTACK ON TITAN" Production committee. All
          Rights Reserved.
        </p>
      </div>
      <div className="p-5">
        <p>
          by{" "}
          <a
            href="https://velp.netlify.app"
            target="_blank"
            className="font-bold"
          >
            VELP
          </a>
        </p>
      </div>
    </footer>
  );
}
