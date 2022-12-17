import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from './Map';
import TimeSelector from './TimeSelector';
import OffcanvasButton from './Offcanvas';

import './body.scss';

function Body() {
  return (
    <>
    <OffcanvasButton className="mb-3">
      
    </OffcanvasButton>
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