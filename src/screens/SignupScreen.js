import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          value={this.state.email}
          style={styles.input}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          value={this.state.password}
          style={styles.input}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          title="送信"
          onPress={() => {
            firebase.auth().createUserWithEmailAndPassword(
              this.state.email,
              this.state.password
            ).then((user) => {
              console.log('success!', user);
            }).catch((error) => {
              console.log(error);
            });
          }}
        >
          <Text style={styles.buttonTitle}>SIGNUP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: 'white',
  },

  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },

  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default SignupScreen;
