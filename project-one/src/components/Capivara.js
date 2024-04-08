import PropTypes from 'prop-types';

function Capivara({ nome, idade, sexo }) {
  return (
    <div>
      <p>
        Olá {nome}, sua idade é {idade} e você é do sexo {sexo}
      </p>
    </div>
  );
}

Capivara.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    sexo: PropTypes.string.isRequired
}

export default Capivara;
