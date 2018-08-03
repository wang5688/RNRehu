/**
 * app开屏页面
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  InteractionManager,
} from 'react-native';

import Home from './Homepage';

class Welcome extends Component {

  componentDidMount() {
    const { navigator } = this.props;
    // 配置完成后跳转到首页
    InteractionManager.runAfterInteractions(() => {
      this.timer = setTimeout(() => {
        navigator.resetTo({
          name: 'Home',
          component: Home,
          params: {}, // 传给home的数据
        });
      }, 500);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {}
});

export default Welcome;
