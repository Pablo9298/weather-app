import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import ExportDataForm from './ExportDataForm';

function SearchBar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm />
        <ExportDataForm  />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchBar;