import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import { useSendNotification } from "../../hooks/useNotification";
import toast from "react-hot-toast";

const SendMessageModal = ({ show, onClose }) => {
  const [option, setOption] = useState("all"); // State for radio button option
  const [recipient, setRecipient] = useState("all");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { mutate, isLoading } = useSendNotification();

  useEffect(() => {
    // Fetch data from API based on searchTerm
    if (option === "to" && searchTerm !== "") {
      // Example fetch implementation
      fetch(
        `http://localhost:4000/api/v1/notification/getUsersbySearch?userName=${searchTerm}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data?.data); // Assuming data is an array of search results
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      // If search term is empty, clear search results
      setSearchResults([]);
      // setRecipient("");
    }
  }, [searchTerm, option]);

  const handleOptionChange = (event) => {
    if (event.target.value == "all") {
      setOption(event.target.value);
      setRecipient(event.target.value);
    }
    if (event.target.value == "to") {
      setOption(event.target.value);
      setRecipient("");
      setSearchTerm("");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    if (option == "all" && recipient == "all") {
      if (!message || !recipient) {
        return toast.error("Please fill all fields");
      }
      mutate({ message, sendTo: recipient });
    } else if (option == "to" && recipient != "all") {
      if (!message || !recipient) {
        return toast.error("Please fill all fields");
      }
      mutate({ message, sendTo: recipient._id });
      setRecipient("");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>TEXT</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter your text here'
            value={message}
            onChange={handleMessageChange}
          />
        </Form.Group>

        <Form.Group>
          <div style={{ marginTop: "10px" }}>
            <Form.Check
              type='radio'
              label='All'
              name='formHorizontalRadios'
              id='formHorizontalRadios1'
              value='all'
              checked={option === "all"}
              onChange={handleOptionChange}
            />
            <Form.Check
              type='radio'
              label={`To: `}
              name='formHorizontalRadios'
              id='formHorizontalRadios2'
              value='to'
              checked={option === "to"}
              onChange={handleOptionChange}
            />
          </div>
          {option === "to" && (
            <div style={{ marginTop: "10px" }}>
              <Form.Control
                type='text'
                placeholder='Enter @username'
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <div>
                {/* Display search results */}
                {searchResults?.map((result) => (
                  <div
                    style={{ marginTop: "10px", cursor: "pointer" }}
                    onClick={() => {
                      setRecipient(result);
                      setSearchTerm(result.userName);
                      setSearchResults([]);
                    }}
                    key={result.id}
                  >
                    {result.userName}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendMessageModal;
