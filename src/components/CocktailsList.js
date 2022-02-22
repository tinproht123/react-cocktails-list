import React from 'react';
import { Container, Row, Container, Col, Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context';
import Loading from './Loading';

const CocktailsList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <div className="my-5 text-center">
        <h2>No Cocktail To Return</h2>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        {cocktails.map((cocktail) => (
          <Col sm={12} md={6} lg={4} key={cocktail.id} className="my-3">
            <Card>
              <Card.Img variant="top" src={cocktail.image} />
              <Card.Body>
                <Card.Title>{cocktail.name}</Card.Title>
                <Card.Text>{cocktail.glass}</Card.Text>
                <p>{cocktail.info}</p>
                <Link to={`/cocktail/${cocktail.id}`}>
                  <Button variant="success">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CocktailsList;
