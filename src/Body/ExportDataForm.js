import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ExportDataForm() {

  const modes = ["JSON", "XML", "HTML"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    // const mode = event.target.mode.value;
    // window.open().document.write(`Your choice data format ${mode}`)

    window.open().document.write(`Your choice data format ${event.target.mode.value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="my-4">
        <h5 className='mb-5'>Export</h5>
        <Form.Select name="mode" defaultValue="JSON">
          {modes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </Form.Select>
      </FormGroup>

      <Button className="w-100" variant="warning" type="submit">
        Export
      </Button>
    </Form >
  );
}

export default ExportDataForm;