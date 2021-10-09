import { useState } from 'react';
import useDebounce from 'useDebounce';

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return <input type="search" value={displayValue} onChange={handleChange} />;
};

export default SearchInput;
