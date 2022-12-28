import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import ErrorModal from '../ErrorModal';
import { getWeather, getForecast, defaultSearchParams } from '../services/apiService';

function ExportDataForm() {

  const [errorMessage, setErrorMessage] = useState(null);

  const modes = ["JSON", "XML", "HTML"];
  const endpoints = ['Current', 'Forecast'];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const mode = event.target.mode.value;
    const endpoint = event.target.endpoint.value;

    if (!endpoint) {
      setErrorMessage('Please choose endpoint');
      return;
    }

    const get = endpoint === 'Current' ? getWeather : getForecast;

    get({
      ...defaultSearchParams,
      mode,
    })
      .then((response) => response.text())
      .then((data) => {
        const objectData = JSON.parse(data);
        if (objectData.cod !== 200) {
          throw Error(objectData.message);
        }
        window.open('about:blank').document.body.append(data)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h5 className='my-5'>Export</h5>
        <FormGroup className="my-4">
          <FormLabel>Export type</FormLabel>
          <Form.Select name="mode" defaultValue="JSON">
            {modes.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </Form.Select>
        </FormGroup>

        <FormGroup className='mt-4'>
          <FormLabel>Endpoint</FormLabel>
          {endpoints.map((endpoint) => (
            <Form.Check
              key={endpoint}
              name="endpoint"
              value={endpoint}
              type="radio"
              label={endpoint}
            />
          ))}
        </FormGroup>

        <Button className="w-100 mt-4" variant="warning" type="submit">
          Export
        </Button>
      </Form >
      <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default ExportDataForm;