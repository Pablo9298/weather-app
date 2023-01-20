import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal';


// Komponent v react eto funkcija kotoraja vozvrawaet react element ispolzuja JSX.
// JSX eto novij sintaksis ot react kotorij pozvoljajet pisatj html i js udobnei/vmeste.
// Komponent dolzhen vozvrawjatj tolko odin react element.

// Vse nazvanija komponentov v ract vsegda dolzhni na4inatsja s zaglavnoi bukvoi -
// eto dlja togo 4tobi razlichatj html ot komponentvo.

function App() {

  return (
      <Container>
        <Header />
        <Body />
      <ErrorModal/>
      </Container>
  );
}

export default App;
