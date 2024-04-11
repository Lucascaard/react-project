import { useLocation } from "react-router-dom";
import Message from "../../layout/message/Message";

function Projects() {
  const location = useLocation();
  var msg = "";
  if (location.state) {
    msg = location.state.message;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>

      {msg && <Message type="sucess" msg={msg} />}
    </div>
  );
}

export default Projects;
