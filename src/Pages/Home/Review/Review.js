import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <h1 className="text-center fw-bold my-5 text-dander">Review</h1>

      <Row>
        {reviews.map((review) => (
          <Col key={review._id} lg={3} sm={12}>
            <div className="border p-3">
              <h4>{review.name}</h4>
              <p>{review.email}</p>
              <div className="text-info">
                Review:{" "}
                <Rating
                  className="text-warning"
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={review.review}
                  readonly
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Review;
