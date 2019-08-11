import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log(params.body);
    this.setState({
      body: params.body,
      key: params.key
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton
          onPress={() => {
            const { currentUser } = firebase.auth();
            const db = firebase.firestore();
            console.log(this.state.key);

            const newdate = new Date();
            db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
              .update({
                body: this.state.body,
                created_on: newdate,
              })
              .then(() => {
                const { navigation } = this.props;
                navigation.state.params.returnMemo({
                  body: this.state.body,
                  key: this.state.key,
                  created_on: newdate,
                });
                navigation.goBack();
              })
              .catch(() => {
              });
          }}
          name="check"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  memoEditInput: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
