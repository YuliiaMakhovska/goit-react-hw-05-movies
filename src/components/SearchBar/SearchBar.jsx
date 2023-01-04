import { useState } from "react";
import Notiflix from 'notiflix';
import { Form, Input, Button } from './SearchBar.styled';
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({ value, onChange }) => {
    const [query, setQuery] = useState(value ? value : '')
    const handleChange = e => {
        setQuery(e.currentTarget.value)
    }
    const onFormSubmit = e => {
        e.preventDefault();
        const newQuery = e.target.elements.query.value.toLowerCase();
        onChange(newQuery.trim())

    if (newQuery.trim() === '') {
      Notiflix.Notify.failure("Please, enter correct name");
      return;
        }
    }

    return (
        <Form onSubmit={onFormSubmit}>
    <Input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoFocus={true}
    />
    <Button type="submit">
      <BsSearch size={30} />
    </Button>
  </Form>
    )
}
export default SearchBar;