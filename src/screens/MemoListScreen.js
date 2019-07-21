import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          onPress={() => {
            const { params } = this.props.navigation.state;
            this.props.navigation.navigate('MemoCreateScreen', { currentUser: params.currentUser });
          }}
          name="plus"
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
});

export default MemoListScreen;
