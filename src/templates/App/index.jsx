import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styles from './styles';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
