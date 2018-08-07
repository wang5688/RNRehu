/**
 * 评论item
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class CommentItem extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props;
    console.log(data)

    return (
      <View style={styles.container}>
        <View style={styles.itemTop}>
          <Image style={styles.avatar} source={{ uri: data.userInfo && data.userInfo.img_url }} />
          <View style={styles.userinfo}>
            <Text style={styles.userInfo}>{data.userInfo && data.userInfo.nick_name}</Text>
            <Text style={styles.pdate}>{data.pdate}</Text>
          </View>
          <View style={styles.likes}>
            <Image style={styles.likeIcon} />
            <Text>{data.likes}</Text>
          </View>
        </View>

        <Text style={styles.message}>{data.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  itemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    marginRight: 17,
  },
  userInfo: {
    fontSize: 12,
    color: '#8E8E93',
  },
  pdate: {
    fontSize: 10,
    color: '#8E8E93',
  },
  message: {
    marginTop: 8,
    marginLeft: 45,
  }
});
