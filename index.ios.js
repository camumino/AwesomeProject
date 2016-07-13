/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Prueba'};
    this._onPress = this._onPress.bind(this);
  }
  _onPress(){
    this.setState({text: 'hola'})

    fetch('http://iexcusas-server.herokuapp.com/api/v1/randExcuse.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({text: responseJson.excuse.content})
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>

        <TouchableHighlight onPress={this._onPress}>
          <Text>Button</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
