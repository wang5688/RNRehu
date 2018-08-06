import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

/**
 * 菜单列表
 * @type {Object}
 */
export class MenuItem extends Component {
  static propTypes = {
    itemTitle: PropTypes.string,
    tipText: PropTypes.string,
  }

  render() {
    return (
      <TouchableHighlight underlayColor='#f6f6f6' onPress={this.props._click}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>{this.props.itemTitle}</Text>
          <Text style={styles.menuItemTip}>{this.props.tipText}</Text>
          <Image style={styles.rightIcon} source={require('../../assets/images/arrow_right.png')} />
        </View>
      </TouchableHighlight>
    );
  }
}

/**
 * 左方向按钮
 * @type {Object}
 */
export class LeftButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }

  render() {
    return (
      <TouchableOpacity style={styles.leftButton} onPress={this.props.onClick}>
        <Image style={styles.leftButton} source={require('../../assets/images/arrow_left.png')} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // 菜单项
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 47,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  rightIcon: {
    width: 8,
    height: 13,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  menuItemTip: {
    fontSize: 14,
    color: '#999',
    position: 'absolute',
    right: 32
  },
  // 左方向按钮
  leftButton: {
    width: 10,
    height: 17,
  }
});
