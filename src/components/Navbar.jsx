import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-3xl">
        <FaFilePdf
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1gGflo61D4a6yJUyA6Nq_yD-L2ASu2gq0/view?usp=sharing"
            ),
              "_blank";
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin
          onClick={() => {
            window.open("https://www.linkedin.com/in/anurag-narula-83035b213/"),
              "_blank";
          }}
          style={{ cursor: "pointer" }}
        />
        <FaGithub
          onClick={() => {
            window.open("https://github.com/Anurag519Narula"), "_blank";
          }}
          style={{ cursor: "pointer" }}
        />
        <SiLeetcode
          onClick={() => {
            window.open("https://leetcode.com/u/anurag519narula/"), "_blank";
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
