import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="d-flex justify-content-center align-items-center fs-50 my-5">
    <Spinner animation="border" variant="success" />;
  </div>
);

export default Loading;
