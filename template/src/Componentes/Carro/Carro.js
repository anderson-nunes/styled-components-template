import carro from '../../assets/carro.png'
import { MeuCarro, Infos } from './styles';

export function Carro(props) {
  return (
    <MeuCarro>
      <h2>Volksvagem</h2>
      <img src={carro} alt="" />
      <Infos>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </Infos>
    </MeuCarro>
  );
}

