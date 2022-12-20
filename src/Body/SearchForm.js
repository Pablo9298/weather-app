import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';

function SearchForm(defaultProps) {

  const units = [
    'standart',
    'metric',
    'imperial',
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fi', label: 'Finnish' },
    { code: 'ru', label: 'Russian' },
    { code: 'se', label: 'Swedish' },
    { code: 'zh_cn', label: 'Chinese Simplified' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const data = {
      lat: event.target.lat.value,
      lon: event.target.lon.value,
      units: event.target.units.value,
      lang: event.target.lang.value,
    };
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label>Latitude</Form.Label>
        <Form.Control type="text" name="lat" placeholder="41.9418284" defaultValue={defaultProps.lat} />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Longetude</Form.Label>
        <Form.Control type="text" name="lon" placeholder="2.17403322" defaultValue={defaultProps.lon} />
      </Form.Group>

      <FormGroup>
        <Form.Label>Units of measurement</Form.Label>
        {units.map((unit, i) => (
          <Form.Check
            type="radio"
            id={unit}
            label={unit}
            key={unit}
            name="units"
            value={unit}
            defaultChecked={defaultProps.unit === unit}
          />
        ))}
      </FormGroup>

      <FormGroup className="my-4">
        <Form.Label>Language</Form.Label>
        <Form.Select name="lang" defaultValue={defaultProps.lang}>
          {languages.map((language, i) => (
            <option key={language.code} value={language.code}>{language.label}</option>
          ))}
        </Form.Select>
      </FormGroup>

      <Button className='w-100' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

SearchForm.defaultProps = {
  lat: '58.5953',
  lon: '25.0136',
  unit: 'metric',
  lang: 'en',
}

export default SearchForm;