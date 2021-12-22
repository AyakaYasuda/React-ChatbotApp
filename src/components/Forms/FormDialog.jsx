import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      description: '',
    };
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.validateRequiredInput = this.validateRequiredInput.bind(this);
    this.validateEmailFormat = this.validateEmailFormat.bind(this);
  }

  inputName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  inputEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  inputDescription = event => {
    this.setState({
      description: event.target.value,
    });
  };

  validateEmailFormat = email => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === '') {
        isBlank = true;
      }
    }
    return isBlank;
  };

  submitForm = () => {
    const name = this.state.name;
    const email = this.state.email;
    const description = this.state.description;

    const isBlank = this.validateRequiredInput(name, email, description);
    const isValidEmail = this.validateEmailFormat(email);

    if (isBlank) {
      alert('One or more fields have an error. Please check and try again!');
      return false;
    } else if (!isValidEmail) {
      alert('Your email seems to be wrong. Please check and try again!');
      return false;
    } else {
        const payload = {
            text: 'You got a contact message! Check it out :)\n' +
                  'Name: ' + name + '\n' +
                  'E-mail: ' + email + '\n' +
                  'Message:\n' + description + '\n' 
        }
        
        const url = 'https://hooks.slack.com/services/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'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('Message Sent!')
            this.setState({
                name: "",
                email: "",
                description: ""
            })
            return this.props.handleClose()
        })
    }
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Contact Me</DialogTitle>
        <DialogContent>
          <TextInput
            label={'Name(required)'}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={'text'}
            onChange={this.inputName}
          />
          <TextInput
            label={'E-mail(required)'}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={'email'}
            onChange={this.inputEmail}
          />
          <TextInput
            label={'Message(required)'}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={'text'}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button onClick={this.submitForm} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
