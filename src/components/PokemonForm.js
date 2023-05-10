import { useState } from "react";
import { Form } from "semantic-ui-react";
import uuid from "uuid";

function PokemonForm({ handleFormData }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
    id: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
      id: uuid(),
    };
    handleFormData(newPokemon);
    setFormData({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
      id: "",
    });
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
