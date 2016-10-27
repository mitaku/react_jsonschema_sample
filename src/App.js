import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-jsonschema';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleSubmitButton() {
    this.handleSubmit(this.f.state.formData);
  }

  handleSubmit(data) {
    console.log(data)
  }

  render() {
    const schema = {
      "title": "Basic Demo",
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First Name",
        },
        "lastName": {
          "type": "string",
          "title": "Last Name",
        },
        "age": {
          "type": "integer",
          "title": "Age",
          "description": "Age in years",
        },
      },
    };

    const formData = {
      firstName: '',
      lastName: '',
      age: '',
    };

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          </p>
          <div>
            <Form
                schema={schema}
                formData={formData}
                onError={errors => {
                  console.log(errors);
                }}
                onSubmit={this.handleSubmit}
                ref={(f) => { this.f = f; }}
              />
              <RaisedButton label="Submit" onClick={this.handleSubmitButton} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
