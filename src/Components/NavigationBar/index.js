/**
 * 顶部NavigationBar组件
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const STATUS_BAR_HEIGHT = 20;

class NavigationBar extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    titleLayoutStyle: PropTypes.object, // 自定义标题颜色
    visible: PropTypes.bool, // 是否显示
    statusBar: PropTypes.shape({ // 状态栏
      barStyle: PropTypes.oneOf(['light-content', 'default']),
      visible: PropTypes.bool,
      backgroundColor: PropTypes.string, // 背景色
    }),
    // leftButton: PropTypes.element, // 左侧按钮
    rightButton: PropTypes.element, // 右侧按钮
  }

  static defaultProps = {
    style: {

    },
    visible: true,
    statusBar: {
      barStyle: 'default',
      visible: true,
    }
  }

  render() {
    const { leftButton } = this.props;

    return (
      <View style={[styles.container, this.props.style]}>
        {
          this.props.statusBar.visible ? (
            <View style={styles.statusBar}>
              <StatusBar {...this.props.statusBar} />
            </View>
          ) : null
        }
        {
          this.props.visible ? (
            <View style={styles.navBar}>
              {
                leftButton && (typeof leftButton === 'boolean' ? (
                  <TouchableOpacity style={[styles.leftButton, { width: 10, height: 17 }]} onPress={() => { this.props.navigator.pop(); }}>
                    <Image style={[{ width: 10, height: 17 }]} source={require('../../assets/images/arrow_left.png')} />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.rightButton}>{this.props.rightButton}</View>
                ))
              }
              <View style={[styles.navBarTitle, this.props.titleLayoutStyle]}>
                <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>{this.props.title}</Text>
              </View>
              <View style={styles.rightButton}>{this.props.rightButton}</View>
            </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
  },
  navBarTitle: {},
  title: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center'
  },
  navBar: {
    position: 'relative',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    position: 'absolute',
    right: 16,
  },
  leftButton: {
    position: 'absolute',
    left: 16,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  }
});

export default NavigationBar;
