import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function ExportDataForm(defaultProps) {

  const modes = [
    { code: 'xml', label: 'XML' },
    { code: 'html', label: 'HTML' },
    { code: 'JSON', label: 'JSON' },
  ];

  return (
    <FormGroup className="my-4">
      <Form.Label>Modes</Form.Label>
      <Form.Select name="modes" defaultValue={defaultProps.mode}>
      {modes.map((mode, i) => (
            <option key={mode.code} value={mode.code}>{mode.label}</option>
          ))}
      </Form.Select>
    </FormGroup>
  );
}

export default ExportDataForm;