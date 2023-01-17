import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Now from './Tabs/Now';
import './body.scss';
import SearchBar from './SearchBar';
import Forecast from './Tabs/Forecast';
import { useDispatch } from 'react-redux';
import { setShowSearchBar } from "../services/stateService";

function Body() {

  const dispatch = useDispatch();

  const handleShowBar = () => dispatch(setShowSearchBar(true));

  return (
    <>
      <Button className="btn-search mb-4" onClick={handleShowBar}>
        Search
      </Button>
      <SearchBar />
      <Tabs
        defaultActiveKey="now"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now />
        </Tab>
        <Tab eventKey="forcast" title="Forcast">
          <Forecast />
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;