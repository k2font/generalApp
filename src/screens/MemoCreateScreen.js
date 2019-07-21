import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={
            (text) => {
              this.setState({ body: text });
            }
          }
        />
        <CircleButton
          onPress={(body) => {
            const { params } = this.props.navigation.state;
            // this.props.navigation.navigate('MemoEditScreen');
            const db = firebase.firestore();
            db.collection(`users/${params.currentUser.user.uid}/memos`).add({
              body: this.state.body,
              created_on: new Date(),
            }).then((docRef) => {
              console.log(docRef.id);
            }).catch((error => {
              console.log(error);
            }));
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

export default MemoCreateScreen;
