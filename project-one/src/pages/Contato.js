import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Lorem from "../components/lorem/Lorem,";

function Contato() {
  return (
    <div className="container-xl">
      <h1 className="h1">Contatos</h1>
      <ol>
        <li>
          <IoIosCall /> 41 9 9999-9999
        </li>
        <li>
          <MdEmail /> exemplo@example.com
        </li>
        <li>
          <FaInstagram /> @Contato
        </li>
      </ol>
      <Lorem></Lorem>
    </div>
  );
}

export default Contato;
