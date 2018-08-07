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
 * 播放量、分享功能
 * @type {Object}
 */
export class ShareItem extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.shareContent}>
        <View style={[styles.bottomLeft, { flexDirection: 'row' }]}>
          <View style={[styles.watches, styles.leftBtn]}>
            <Image style={[styles.leftBtnIcon, { width: 15, height: 16 }]} source={require('../../assets/images/play.png')} />
            <Text style={styles.word}>{data.watches}</Text>
          </View>
          <View style={[styles.likes, styles.leftBtn]}>
            <Image style={styles.leftBtnIcon} source={require('../../assets/images/upvote_nor.png')} />
            <Text style={styles.word}>{data.likes || data.ding}</Text>
          </View>
        </View>
        <View style={[styles.bottomRight, { flexDirection: 'row' }]}>
          <Image style={styles.bottomBtn} source={require('../../assets/images/icon_circle.png')} />
          <Image style={styles.bottomBtn} source={require('../../assets/images/icon_wechat.png')} />
          <Image style={styles.bottomBtn} source={require('../../assets/images/icon_weibo.png')} />
          <Image style={[styles.bottomBtn, { width: 16, height: 16 }]} source={require('../../assets/images/icon_comments.png')} />
        </View>
      </View>
    );
  }
}

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
  },
  // 分享
  shareContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  word: {
    fontSize: 13,
    color: '#888'
  },
  leftBtn: {
    flexDirection: 'row',
    marginRight: 12,
  },
  leftBtnIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  bottomBtn: {
    width: 18,
    height: 16,
    marginHorizontal: 10,
  }
});
