import React from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

class NewCarForm extends React.Component {
  render() {
    return(
      <Form inline>
        <FormGroup>
          <Button color="danger">Add Car</Button>{' '}
        </FormGroup>
      </Form>
    );
  }
}

export default NewCarForm;
