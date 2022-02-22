import React from 'react';
import { useGlobalContext } from '../context';

import { Container, Form } from 'react-bootstrap';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  return (
    <Container>
      <Form
        className="mx-auto shadow-lg p-4 rounded-3 my-5 border bg-light"
        style={{ maxWidth: 500 }}
      >
        <p className="fw-bold">Search Your Favourite Cocktails</p>
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default SearchForm;
