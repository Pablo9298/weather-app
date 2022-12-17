import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from './Map';
import TimeSelector from './TimeSelector';
import OffcanvasBtn from 'react-bootstrap/Button';

import './body.scss';

function Body() {
  return (
    <>
    <OffcanvasBtn />
    <Tabs
      defaultActiveKey="now"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="now" title="Now">
        <TimeSelector id="now" />
        <Map />
      </Tab>
      <Tab eventKey="forcast" title="Forcast">
        <TimeSelector id="forcast" />
        <Map />
      </Tab>
    </Tabs>
    </>
  );
}

export default Body;