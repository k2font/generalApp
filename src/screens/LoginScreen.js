import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity,
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ようこそ</Text>
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
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          title="ログイン"
          underlayColor="#C70F66"
          onPress={
            () => {
              firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                  const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                  });
                  this.props.navigation.dispatch(resetAction);
                })
                .catch(() => {
                });
            }
          }
        >
          <Text style={styles.buttonTitle}>LOGIN</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={() => { this.props.navigation.navigate('SignupScreen'); }}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>
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

  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },

  signupText: {
    fontSize: 18,
  },
});

export default LoginScreen;
