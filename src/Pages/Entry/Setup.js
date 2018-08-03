/**
 * app页面入口文件
 * 首先渲染Welcome页
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Welcome from './Welcome';

class Setup extends Component {

  _renderScene = (route, navigator) => {
    const Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'welcome',
          component: Welcome,
          params: {
            data: {},
          },
        }}
        renderScene={this._renderScene}
      />
    );
  }
}

export default Setup;
