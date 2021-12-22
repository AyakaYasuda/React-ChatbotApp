import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';

const FormDialog = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const inputName = useCallback(
    event => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputEmail = useCallback(
    event => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputDescription = useCallback(
    event => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const validateEmailFormat = email => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === '') {
        isBlank = true;
      }
    }
    return isBlank;
  };

  const submitForm = () => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      alert('One or more fields have an error. Please check and try again!');
      return false;
    } else if (!isValidEmail) {
      alert('Your email seems to be wrong. Please check and try again!');
      return false;
    } else {
      const payload = {
        text:
          'You got a contact message! Check it out :)\n' +
          'Name: ' +
          name +
          '\n' +
          'E-mail: ' +
          email +
          '\n' +
          'Message:\n' +
          description +
          '\n',
      };

      const url =
        'https://hooks.slack.com/services/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';

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(() => {
        alert('Message Sent!');
        setName('');
        setEmail('');
        setDescription('');
        return props.handleClose();
      });
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Contact Me</DialogTitle>
      <DialogContent>
        <TextInput
          label={'Name(required)'}
          multiline={false}
          rows={1}
          value={name}
          type={'text'}
          onChange={inputName}
        />
        <TextInput
          label={'E-mail(required)'}
          multiline={false}
          rows={1}
          value={email}
          type={'email'}
          onChange={inputEmail}
        />
        <TextInput
          label={'Message(required)'}
          multiline={true}
          rows={5}
          value={description}
          type={'text'}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={submitForm} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
