import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <div className="my-5 text-center">
        <h2>No Cocktail To Return</h2>
      </div>
    );
  } else {
    return (
      <section>
        <Container>
          <Link to="/">
            <Button
              variant="success"
              className="mx-auto d-block my-3"
              style={{ letterSpacing: 5 }}
            >
              BACK HOME
            </Button>
          </Link>
          <Row className="border my-5">
            <Col sm={12} md={6}>
              <Image fluid src={cocktail.image} />
            </Col>
            <Col sm={12} md={6} style={{ minHeight: '100%' }}>
              <ul
                className="d-flex flex-column justify-content-center"
                style={{ minHeight: '100%' }}
              >
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Name:</span>
                  </Badge>
                  {cocktail.name}
                </li>
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Category:</span>
                  </Badge>
                  {cocktail.category}
                </li>
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Info:</span>
                  </Badge>
                  {cocktail.info}
                </li>
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Glass:</span>
                  </Badge>
                  {cocktail.glass}
                </li>
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Instructions:</span>
                  </Badge>
                  {cocktail.instructions}
                </li>
                <li className="my-2 fw-bold">
                  <Badge bg="success" className="me-2">
                    <span className="h5">Ingredients:</span>
                  </Badge>
                  {cocktail.ingredients.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null;
                  })}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
};

export default SingleCocktail;
