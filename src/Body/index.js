import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Now from './Tabs/Now';
import './body.scss';
import SearchBar from './SearchBar';
import Forecast from './Tabs/Forecast';

function Body() {

  const [showBar, setShowBar] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleCloseBar = () => setShowBar(false);
  const handleShowBar = () => setShowBar(true);

  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShowBar}>
        Search
      </Button>
      <SearchBar
        setWeatherData={setWeatherData}
        show={showBar}
        handleClose={handleCloseBar} />
      <Tabs
        defaultActiveKey="now"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now weatherData={weatherData} setWeatherData={setWeatherData} />
        </Tab>
        <Tab eventKey="forcast" title="Forcast">
          <Forecast />
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;