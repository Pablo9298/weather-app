import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchParams } from '../services/stateService';

function SearchForm({ handleCloseBar }) {
  console.log('SearchForm');

  const [selectedCity, setSelectedCity] = useState(null);
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  const cities = [
    { label: 'Tallinn', lat: 59.436962, lon: 24.753574 },
    { label: 'Tartu', lat: 58.378025, lon: 26.728493 },
    { label: 'Parnu', lat: 58.385808, lon: 24.496577 },
    { label: 'Kuressaare', lat: 58.24806, lon: 22.50389 },
  ];

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

  const handleCitySelect = (event) => {
    const selectedCityObject = cities.find((city) =>
      city.label === event.target.value
    );
    setSelectedCity(selectedCityObject);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      lat: event.target.lat.value,
      lon: event.target.lon.value,
      units: event.target.units.value,
      lang: event.target.lang.value,
    };

    dispatch(setSearchParams({ ...params  }));

    handleCloseBar();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="my-4">
        <Form.Label>City</Form.Label>
        <Form.Select name="city" defaultValue={searchParams.city} onChange={handleCitySelect}>
          {cities.map((city, i) => (
            <option key={city.label} value={city.label}>{city.label}</option>
          ))}
        </Form.Select>
      </FormGroup>

      <Form.Group className="mb-4">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          name="lat"
          placeholder="41.9418284"
          value={selectedCity?.lat || searchParams.lat}
          onChange={() => { }}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Longetude</Form.Label>
        <Form.Control
          type="text"
          name="lon"
          placeholder="2.17403322"
          value={selectedCity?.lon || searchParams.lon}
          onChange={() => { }}
        />
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
            defaultChecked={searchParams.units === unit}
          />
        ))}
      </FormGroup>

      <FormGroup className="my-4">
        <Form.Label>Language</Form.Label>
        <Form.Select name="lang" defaultValue={searchParams.lang}>
          {languages.map((language, i) => (
            <option key={language.code} value={language.code}>{language.label}</option>
          ))}
        </Form.Select>
      </FormGroup>

      <Button className='btn-search w-100' type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SearchForm;