import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import ExportDataForm from './ExportDataForm';

function SearchBar({ show, handleClose, setWeatherData }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm handleCloseBar={handleClose} setWeatherData={setWeatherData}/>
        <ExportDataForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchBar;