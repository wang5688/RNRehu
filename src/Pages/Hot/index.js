import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ListView,
} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Channel from '../../Components/Channel';
import PartItem from '../../Components/ListItem';
import Detail from '../Detail';

const LIST_DATA = [{
  "gid": "i00kvc098ut9mnqnvfefbf9m272",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i00kvc098ut9mnqnvfefbf9m272",
  "data": {
    "title": "刘涛工作室发声明否认刘涛出轨睡小鲜肉 真是锅从天上来",
    "pdate": "1523527658",
    "pdate_str": "2018-04-12 18:07:38",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t0158058d650ea83cd2.png?size=666x374"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "00:48",
    "comments": "9",
    "share": "http:\/\/m.btime.com\/item\/router?gid=i00kvc098ut9mnqnvfefbf9m272&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di00kvc098ut9mnqnvfefbf9m272&gid=i00kvc098ut9mnqnvfefbf9m272&video_id=i00kvc098ut9mnqnvfefbf9m272&video_type=3",
  "s_log": "{\"gid\":\"i00kvc098ut9mnqnvfefbf9m272\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 4,
    "watches": "9.1万",
    "ding": 662,
    "comments": 9,
    "position": "热度：127万",
    "compare": 1
  }
}, {
  "gid": "i111989nj5r8fj9epdkfeedhh3h",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i111989nj5r8fj9epdkfeedhh3h",
  "data": {
    "title": "迪丽热巴baby等力挺杨幂 工作室再发声明",
    "pdate": "1523500392",
    "pdate_str": "2018-04-12 10:33:12",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t01af2e66e8ebf8b5cb.png?size=506x284"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "01:17",
    "comments": "3",
    "share": "http:\/\/m.btime.com\/item\/router?gid=i111989nj5r8fj9epdkfeedhh3h&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di111989nj5r8fj9epdkfeedhh3h&gid=i111989nj5r8fj9epdkfeedhh3h&video_id=i111989nj5r8fj9epdkfeedhh3h&video_type=3",
  "s_log": "{\"gid\":\"i111989nj5r8fj9epdkfeedhh3h\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 6,
    "watches": "8143",
    "ding": 449,
    "comments": 3,
    "position": "热度：79.2万",
    "compare": 1
  }
}, {
  "gid": "i7r074o2r1l8msq15p28r4f6crn",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i7r074o2r1l8msq15p28r4f6crn",
  "data": {
    "title": "昆凌带小周周现身香港 有媒体拍到小周周正面照",
    "pdate": "1523524389",
    "pdate_str": "2018-04-12 17:13:09",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t0123fd7f294793001d.png?size=439x246"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "00:54",
    "comments": "3",
    "share": "http:\/\/m.btime.com\/item\/router?gid=i7r074o2r1l8msq15p28r4f6crn&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di7r074o2r1l8msq15p28r4f6crn&gid=i7r074o2r1l8msq15p28r4f6crn&video_id=i7r074o2r1l8msq15p28r4f6crn&video_type=3",
  "s_log": "{\"gid\":\"i7r074o2r1l8msq15p28r4f6crn\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 2,
    "watches": "8189",
    "ding": 62,
    "comments": 3,
    "position": "热度：56.8万",
    "compare": 3
  }
}, {
  "gid": "i54j8ceapm7889qtj1uihl34v47",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i54j8ceapm7889qtj1uihl34v47",
  "data": {
    "title": "女员工请姨妈假被要求验明正身：去厕所脱衣服检查",
    "pdate": "1523512872",
    "pdate_str": "2018-04-12 14:01:12",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t014d4b03b54b65cc4d.png?size=369x208"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "新浪视频",
    "source_id": "171",
    "duration": "03:02",
    "comments": "3",
    "share": "http:\/\/m.btime.com\/item\/router?gid=i54j8ceapm7889qtj1uihl34v47&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di54j8ceapm7889qtj1uihl34v47&gid=i54j8ceapm7889qtj1uihl34v47&video_id=i54j8ceapm7889qtj1uihl34v47&video_type=3",
  "s_log": "{\"gid\":\"i54j8ceapm7889qtj1uihl34v47\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "1万",
    "ding": 69,
    "comments": 3,
    "position": "热度：36.1万",
    "compare": 3
  }
}, {
  "gid": "i6eqtu5337g9e6buf3m9qaojl39",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i6eqtu5337g9e6buf3m9qaojl39",
  "data": {
    "title": "张杰发布会演唱《我们都一样》，不过中间有一丢丢忘词也很可爱啦",
    "pdate": "1523519130",
    "pdate_str": "2018-04-12 15:45:30",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t018ebcebde311f39e3.png?size=367x206"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "04:42",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i6eqtu5337g9e6buf3m9qaojl39&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di6eqtu5337g9e6buf3m9qaojl39&gid=i6eqtu5337g9e6buf3m9qaojl39&video_id=i6eqtu5337g9e6buf3m9qaojl39&video_type=3",
  "s_log": "{\"gid\":\"i6eqtu5337g9e6buf3m9qaojl39\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "8392",
    "ding": 71,
    "comments": 0,
    "position": "热度：35.8万",
    "compare": 3
  }
}, {
  "gid": "i5nv86piv3s8vap47fj3r549fum",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i5nv86piv3s8vap47fj3r549fum",
  "data": {
    "title": "运动10钟相当于出汗1小时 网红暴汗服能瘦身？小心脱水晕厥",
    "pdate": "1523512908",
    "pdate_str": "2018-04-12 14:01:48",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t015dbec32df672837f.png?size=592x333"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "看看新闻",
    "source_id": "33",
    "duration": "01:20",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i5nv86piv3s8vap47fj3r549fum&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di5nv86piv3s8vap47fj3r549fum&gid=i5nv86piv3s8vap47fj3r549fum&video_id=i5nv86piv3s8vap47fj3r549fum&video_type=3",
  "s_log": "{\"gid\":\"i5nv86piv3s8vap47fj3r549fum\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "7107",
    "ding": 68,
    "comments": 0,
    "position": "热度：33.9万",
    "compare": 3
  }
}, {
  "gid": "i4b4q3e8d8e999ae273m08h91a6",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i4b4q3e8d8e999ae273m08h91a6",
  "data": {
    "title": "李小鹏晒儿女户外游玩照 奥莉大长腿瞩目",
    "pdate": "1523503567",
    "pdate_str": "2018-04-12 11:26:07",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t015511318977724a32.png?size=406x228"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "00:39",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i4b4q3e8d8e999ae273m08h91a6&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di4b4q3e8d8e999ae273m08h91a6&gid=i4b4q3e8d8e999ae273m08h91a6&video_id=i4b4q3e8d8e999ae273m08h91a6&video_type=3",
  "s_log": "{\"gid\":\"i4b4q3e8d8e999ae273m08h91a6\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "7883",
    "ding": 533,
    "comments": 0,
    "position": "热度：31.8万",
    "compare": 3
  }
}, {
  "gid": "i7lfc2t9gkh83koobq00huq5283",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i7lfc2t9gkh83koobq00huq5283",
  "data": {
    "title": "贾装很好？李小璐零点为贾乃亮庆生 风波后首度公开互动",
    "pdate": "1523501418",
    "pdate_str": "2018-04-12 10:50:18",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t019cd3a35c03737372.png?size=502x282"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "00:49",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i7lfc2t9gkh83koobq00huq5283&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di7lfc2t9gkh83koobq00huq5283&gid=i7lfc2t9gkh83koobq00huq5283&video_id=i7lfc2t9gkh83koobq00huq5283&video_type=3",
  "s_log": "{\"gid\":\"i7lfc2t9gkh83koobq00huq5283\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "7032",
    "ding": 86,
    "comments": 0,
    "position": "热度：25.3万",
    "compare": 3
  }
}, {
  "gid": "i662d0b7hpn8p29m276l719m6r9",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i662d0b7hpn8p29m276l719m6r9",
  "data": {
    "title": "李敏镐现身结业典礼，恭喜李小兵结业！",
    "pdate": "1523506327",
    "pdate_str": "2018-04-12 12:12:07",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t013dc82b3deb7d4efe.png?size=434x244"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "娱乐日爆社",
    "source_id": "68",
    "duration": "00:47",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i662d0b7hpn8p29m276l719m6r9&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di662d0b7hpn8p29m276l719m6r9&gid=i662d0b7hpn8p29m276l719m6r9&video_id=i662d0b7hpn8p29m276l719m6r9&video_type=3",
  "s_log": "{\"gid\":\"i662d0b7hpn8p29m276l719m6r9\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "6737",
    "ding": 64,
    "comments": 0,
    "position": "热度：20万",
    "compare": 1
  }
}, {
  "gid": "i798pcg1n7p83h9h9auilb1qg42",
  "type": 3,
  "module": 1,
  "url": "http:\/\/item.btime.com\/i798pcg1n7p83h9h9auilb1qg42",
  "data": {
    "title": "经济学家管清友：现在买不起房就多买两套，不然以后更买不起！",
    "pdate": "1523499374",
    "pdate_str": "2018-04-12 10:16:14",
    "covers": ["https:\/\/p.ssl.qhimg.com\/dmfd\/750_422_\/t01cf462b12f6c34264.png?size=495x279"],
    "author_uid": 0,
    "author_name": "",
    "summary": "",
    "source": "想想就失眠",
    "source_id": "1051",
    "duration": "02:56",
    "comments": 0,
    "share": "http:\/\/m.btime.com\/item\/router?gid=i798pcg1n7p83h9h9auilb1qg42&pro=rehu"
  },
  "open_url": "rehu:\/\/v1\/goto\/video_news?zm=https%3A%2F%2Frehu.btime.com%2Ftrans%3Fm%3Drehu%26fmt%3Djson%26protocol%3D2%26gid%3Di798pcg1n7p83h9h9auilb1qg42&gid=i798pcg1n7p83h9h9auilb1qg42&video_id=i798pcg1n7p83h9h9auilb1qg42&video_type=3",
  "s_log": "{\"gid\":\"i798pcg1n7p83h9h9auilb1qg42\",\"position\":\"\"}",
  "ext": {
    "isCollect": 0,
    "isDing": 0,
    "collect": 1,
    "watches": "6903",
    "ding": 68,
    "comments": 0,
    "position": "热度：17.2万",
    "compare": 1
  }
}];

export default class Hot extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(LIST_DATA),
    };
  }

  componentDidMount() {

  }

  // 跳转详情页
  gotoDetail = (data) => {
    const { navigator } = this.props;

    navigator.push({
      component: Detail,
      params: {
        name: data.title,
        data,
      }
    });
  }

  makeTplData = (data) => {
    return {
      title: data.data.title || '',
      gid: data.gid,
      cover: data.data.covers[0] || '',
      source: data.data.source,
      duration: data.data.duration,
      comments: data.data.comments,
      pdate: data.data.pdate,
      watches: data.ext.watches || 0,
      likes: data.ext.ding,
    };
  }

  render() {
    const LoginBtn = <Image style={styles.loginIcon} source={require('../../assets/images/icon_login.png')} />;

    return (
      <View style={styles.container}>
        <NavigationBar title="热搜榜" rightButton={LoginBtn} />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <PartItem data={this.makeTplData(rowData)} _click={this.gotoDetail} />}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginIcon: {
    width: 28,
    height: 28,
  },
  underline: {
    backgroundColor: '#DF4D4D'
  }
});
