import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAdd}) {
  const [name, setName] = useState("")
  const [hp, setHP] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  const handleClick = () => {
    handleAdd(name, hp, front, back)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleClick}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHP(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
