import Table from "react-bootstrap/Table";

function Data({ data }) {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td><b>Weather</b></td>
          <td>{data?.weather[0].description}</td>
          <td>{data?.weather[0].main}</td>
        </tr>
        <tr>
          <td><b>Main</b></td>
          <td>{!isNaN(data?.main.feels_like) ? Math.ceil(data?.main.feels_like) : '-'}</td>
          <td>{!isNaN(data?.main.temp) ? Math.ceil(data?.main.temp) : '-'}</td>
          <td>{!isNaN(data?.main.temp_min) ? Math.ceil(data?.main.temp_min) : '-'}</td>
          <td>{!isNaN(data?.main.temp_max) ? Math.ceil(data?.main.temp_max) : '-'}</td>
        </tr>
        <tr>
          <td><b>Wind</b></td>
          <td>{!isNaN(data?.wind.speed) ? Math.ceil(data?.wind.speed) : '-'}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Data;