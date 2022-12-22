import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ExportDataForm(defaultProps) {

  const modes = ["JSON", "XML", "HTML"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    window.open().document.write(`Your choice data format ${event.target.mode.value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="my-4">
        <Form.Label>Modes</Form.Label>
        <Form.Select name="mode" defaultValue={defaultProps.mode}>
          {modes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </Form.Select>
      </FormGroup>

      <Button className="w-100" variant="primary" type="submit">
        Submit
      </Button>
    </Form >
  );
}

export default ExportDataForm;