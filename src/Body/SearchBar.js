import Offcanvas from "react-bootstrap/Offcanvas";
import ExportDataForm from "./ExportDataForm";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from 'react-redux';
import { setShowSearchBar } from "../services/stateService";

function SearchBar() {

  // useSelector eto react-redux hook dlja slushanja sostojanija redux.
  // pri izmenenii sostojanija useSelector zapuskaet render/otrisovku komponenta. 
  const showSearchBar = useSelector((state) => state.showSearchBar);

  // useDispatch eto react-redux hook dlja trigera izmenenija sostojanija.
  // useDispatch sna4alo nuzhno inicializirovatj, a potom ispolzovatj.
  // useDispatch vozvrashaet funkciju dispatcher.
  const dispatch = useDispatch();

  // dispatchery mi peredaem Action s novimi dannimi.
  const handleClose = () => dispatch(setShowSearchBar(false));

  return (
    <Offcanvas show={showSearchBar} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm
          handleCloseBar={handleClose}
        />
        <ExportDataForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchBar;