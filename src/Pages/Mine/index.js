/**
 * 我的页面
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { MenuItem } from '../../Components/module';

class Mine extends Component {


  render() {
    const { navigator } = this.props;

    return (
      <View>
        <View style={styles.loginPanel}>
          <Image style={styles.avatar} source={require('../../assets/images/default_avatar.png')} />
          <View style={styles.loginBtn}>
            <Text style={styles.btnText}>登录/注册</Text>
          </View>
        </View>

        <View style={styles.list}>
          <MenuItem itemTitle="观看历史" />
          <MenuItem itemTitle="我的评论" />
          <MenuItem itemTitle="我的收藏" />
          <MenuItem itemTitle="设置" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginPanel: {
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: .5,
  },
  avatar: {
    width: 84,
    height: 84,
    marginTop: 64,
  },
  loginBtn: {
    width: 120,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DF4D4D',
    marginVertical: 8,
  },
  btnText: {
    textAlign: 'center',
    lineHeight: 32,
    color: '#fff',
    fontSize: 14,
  }
});

export default Mine;
