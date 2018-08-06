/**
 * 详情页
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import NavigationBar from '../Components/NavigationBar';
import { GET } from '../Common/fetch';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.getPageData(data.gid);
  }

  getPageData(gid) {
    // 获取详情页数据
    GET('https://rehu.btime.com/trans', {
      protocol: 1,
      gid,
      pro: 'rehu',
    }).then((res) => {
      console.log(res)
      this.setState({
        data: res,
      });
    })
  }

  render() {
    const { name } = this.props;
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <NavigationBar leftButton navigator={this.props.navigator} />

        <View>
          <Image style={styles.player} source={{ uri: data.image }} />

          <View style={styles.article}>
            <Text style={styles.title}>{data.title}</Text>

            <View style={styles.info}></View>

            <View style={styles.content}>
              <Text style={styles.pdate}>{data.time}</Text>

              <Text style={styles.content}>

              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  player: {
    width: 375,
    height: 194,
  },
  article: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 18,
    color: '#202020',
  },
  pdate: {
    fontSize: 12,
    color: '#8E8E93',
  }
});
