import { FC } from "react";
import { Link } from "react-scroll";

const Footer: FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-white/5 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2025 Emali Media. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <Link
            to="datenschutz"
            smooth={true}
            duration={700}
            offset={-80}
            className="cursor-pointer hover:text-white"
          >
            Datenschutz
          </Link>
          <Link
            to="impressum"
            smooth={true}
            duration={700}
            offset={-80}
            className="cursor-pointer hover:text-white"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
