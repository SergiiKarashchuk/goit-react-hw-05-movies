import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  SearchButton,
  SearchbarInput,
} from './SearchBar.Styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <SearchbarInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton>
          <FcSearch />
        </SearchButton>
      </SearchForm>
    </SearchBox>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
