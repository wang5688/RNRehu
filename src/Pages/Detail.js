/**
 * 详情页
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import NavigationBar from '../Components/NavigationBar';
import { ShareItem } from '../Components/module';
import Comments from '../Components/Comment';
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

          <ScrollView style={styles.article}>
            <View style={styles.info}>
              <Text style={styles.title}>{data.title}</Text>

              <ShareItem data={data} />
            </View>

            <View style={styles.content}>
              <Text style={styles.pdate}>{data.time}</Text>

              <View style={styles.textContent}>
                <Text style={styles.text}>公司名下的车违章怎么处理？</Text>
                <Text style={styles.text}>如果公司名下的车的非现场违法行为没有记分，您可以通过自助渠道处理。</Text>
                <Text style={styles.text}>如果公司名下的车的非现场违法行为有记分，您就必须要到执法站现场处理了。</Text>
                <Text style={styles.text}>更多内容与问题请看视频～北京市交管局新闻办公室欣欣警官为您答疑解惑！</Text>
              </View>

              <View style={{ textAlign: 'right', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 10, color: '#B6B6B6', marginRight: 4 }}>展开</Text>
                <Image style={{ width: 12, height: 7 }} source={require('../assets/images/arrow_down.png')} />
              </View>
            </View>

            <View style={styles.comment}>
              <View style={styles.commentInput}>
                <Image style={styles.replyAvatar} source={require('../assets/images/icon_login.png')} />
                <Text style={styles.input}>说点什么吧...</Text>
              </View>

              <Comments />
            </View>
          </ScrollView>
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
    paddingTop: 8,
  },
  info: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    color: '#202020',
  },
  pdate: {
    fontSize: 12,
    color: '#8E8E93',
  },
  content: {
    borderTopWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 16,
    paddingTop: 23,
    paddingBottom: 21,
  },
  textContent: {
    marginVertical: 12,
  },
  text: {
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
  },
  comment: {
    paddingHorizontal: 16,
    backgroundColor: '#F4F4F4',
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5EA',
    paddingVertical: 12,
  },
  replyAvatar: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  input: {
    fontSize: 16,
    color: '#bbb',
  }
});
