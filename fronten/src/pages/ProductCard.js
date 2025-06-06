import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isInCart, addToCart, isPhoneNumberSubmitted }) => {
  return (
    <Card className="h-100">
      <div style={{ display: 'flex', gap: '5px', padding: '5px' }}>
        {product.images?.slice(0, 2).map((img, index) => (
          <Card.Img
            key={index}
            variant="top"
            src={img}
            alt={product.title}
            style={{ height: '150px', width: '49%', objectFit: 'cover' }}
          />
        ))}
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-truncate">{product.description}</Card.Text>
        <Card.Text>
          <strong>Rs {product.price}</strong>{' '}
          <span style={{ color: 'red', textDecoration: 'line-through', fontSize: '1.2rem' }}>
            Rs {product.price * 2}
          </span>
        </Card.Text>
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <Button
            variant="success"
            href={`https://wa.me/923059425997?text=I'm interested in ${encodeURIComponent(product.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp className="mb-1" />
          </Button>
          <Button variant="primary" href="tel:03059425997" title="Call">
            <FaPhone />
          </Button>
          <Button as={Link} to={`/product/${product._id}`} variant="info" title="Details">
            Detail
          </Button>
          <Button
            variant={isInCart(product._id) ? "success" : "warning"}
            onClick={() => addToCart(product)}
            disabled={isInCart(product._id) || !isPhoneNumberSubmitted}
            title={
              !isPhoneNumberSubmitted
                ? "Phone number required"
                : isInCart(product._id)
                ? "Already in Cart"
                : "Add to Cart"
            }
          >
            {isInCart(product._id) ? "Added" : "Cart"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
