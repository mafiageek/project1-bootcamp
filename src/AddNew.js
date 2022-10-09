import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Cards from "./Cards";
import "./AddNew.css";
import { nanoid } from "nanoid";

export default function AddNew() {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    id: 1,
    country: "",
    journal: "",
  });

  // array to store object
  const cardsItems = [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    cardsItems.push(formData);
    setShow(false);

    console.log(cardsItems);
    setFormData((prevFormData) => {
      return {
        id: prevFormData.id + 1,
      };
    });
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const cardItem = Object.keys(cardsItems).map(({ id, country, journal }) => {
    return <Cards key={id} country={country} journal={journal} />;
  });

  return (
    <div className="addnew">
      <Button variant="outline-dark" onClick={handleShow} size="sm">
        Add New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Travel Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="journal">
              <Form.Label>Journal</Form.Label>
              <Form.Control
                as="textarea"
                name="journal"
                onChange={handleChange}
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {cardItem}
    </div>
  );
}
