import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton'

// エポックミリ秒をDate型に変換する
const dateString = (date) => {
  const str = date;
  return str;
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.created_on.seconds)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={
            () => { this.props.navigation.navigate('MemoEditScreen', { ...memo, returnMemo: this.returnMemo.bind(this) }); }
          }
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

  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },

  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  memoHeaderDate: {
    fontSize: 12,
    color: 'white',
  },

  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    fontSize: 15,
    flex: 1,
  },

  editButton: {
    top: 35,
  },
});

export default MemoDetailScreen;
