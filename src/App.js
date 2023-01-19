import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal';
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from './services/stateService';

function App() {

  const errorMessage = useSelector(state => state.errorMessage);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(setErrorMessage(false));

  return (
      <Container>
        <Header />
        <Body />
      <ErrorModal
        message={errorMessage}
        handleClose={handleClose}
      />
      </Container>
  );
}

export default App;
