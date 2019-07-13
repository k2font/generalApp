import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  plus: '\uf067',
  pencil: '\uf303',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color, name } = this.props;

    let bgColor = '#E31676';
    let textColor = 'white';

    if (color === 'white') {
      bgColor = 'white';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {this.state.fontLoaded ? (
          <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 34,
  },
});

export default CircleButton;
