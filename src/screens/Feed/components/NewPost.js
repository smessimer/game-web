import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const styles = {
  card: {
    marginBottom: '1em',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',

  },
  formLabel: {
    width: 300,
  },
  textField: {
    marginBottom: '2em',
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  title: {
    fontSize: 18,
  },
};

class NewPostForm extends Component {
  state = {
    text: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes, handleSubmit } = this.props;

    const onSubmit = e => {
      e.preventDefault();
      this.props.handleSubmit(this.state.text)
    }

    return (
    <Card className={classes.card}>
      <CardHeader classes={{title: classes.title}} title="Create Post" variant="h6" />
      <CardContent>
        <form classname={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="standard"
          label="text"
          className={classes.textField}
          value={this.state.text}
          onChange={this.handleChange('text')}
          margin="normal"
          variant="outlined"
        />
        <br />
        <Button
          type="submit"
        >
        Share
        </Button>
        </form>
      </CardContent>
    </Card>
    );
  }
}

// NewPostForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NewPostForm);
