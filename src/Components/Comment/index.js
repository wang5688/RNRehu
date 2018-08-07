/**
 * 评论列表
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CommentItem from './commentItem';

export default class CommentList extends Component {
  static propTypes = {
    listData: PropTypes.array,
  }

  static defaultProps = {
    listData: [{
    	"id": "73081",
    	"pdate": "2018-05-25 14:25:17",
    	"pid": "0",
    	"uid": "2412077",
    	"page_id": "23700101",
    	"status": "1",
    	"sub_comment": [{
    		"page_id": "23700101",
    		"id": "88975",
    		"status": "1",
    		"reply_to": "[]",
    		"message": "ID简简单单觉得暖暖的",
    		"pid": "73081",
    		"pdate": "2018-06-25 14:42:43",
    		"anonymous": "0",
    		"uid": "2257636",
    		"ext": "",
    		"likes": "2",
    		"user_info": "{\"user_name\":\"\",\"nick_name\":\"\北\京\二\嫂\",\"img_url\":\"https:\\\/\\\/p2.ssl.qhimg.com\\\/t0149aea15980abb802.jpg?size=240x240\"}"
    	}, {
    		"page_id": "23700101",
    		"id": "88976",
    		"status": "1",
    		"reply_to": "[]",
    		"message": "一句话",
    		"pid": "73081",
    		"pdate": "2018-06-25 15:00:19",
    		"anonymous": "0",
    		"uid": "2257636",
    		"ext": "",
    		"likes": "1",
    		"user_info": "{\"user_name\":\"\",\"nick_name\":\"\北\京\二\嫂\",\"img_url\":\"https:\\\/\\\/p2.ssl.qhimg.com\\\/t0149aea15980abb802.jpg?size=240x240\"}"
    	}, {
    		"page_id": "23700101",
    		"id": "88977",
    		"status": "1",
    		"reply_to": "[]",
    		"message": "开心快打开电视看",
    		"pid": "73081",
    		"pdate": "2018-06-25 15:18:43",
    		"anonymous": "0",
    		"uid": "2257636",
    		"ext": "",
    		"likes": "0",
    		"user_info": "{\"user_name\":\"\",\"nick_name\":\"\北\京\二\嫂\",\"img_url\":\"https:\\\/\\\/p2.ssl.qhimg.com\\\/t0149aea15980abb802.jpg?size=240x240\"}"
    	}],
    	"message": "还得多久",
    	"sub_next": 1,
    	"user_info": "{\"user_name\":\"\",\"nick_name\":\"185****2009\",\"img_url\":\"https:\\\/\\\/p3.ssl.cdn.btime.com\\\/t01d860e5e97b6dfd9b.png\"}",
    	"ext": "{\"sub_num\":8}",
    	"likes": "12",
    	"anonymous": "0",
    	"reply_to": "[]",
    	"group_label": "热门评论"
    }, {
    	"id": "73084",
    	"pdate": "2018-05-25 14:25:52",
    	"pid": "0",
    	"uid": "2412077",
    	"page_id": "23700101",
    	"status": "1",
    	"sub_comment": [],
    	"message": "嘿嘿",
    	"sub_next": 0,
    	"user_info": "{\"user_name\":\"\",\"nick_name\":\"185****2009\",\"img_url\":\"https:\\\/\\\/p3.ssl.cdn.btime.com\\\/t01d860e5e97b6dfd9b.png\"}",
    	"ext": "",
    	"likes": "5",
    	"anonymous": "0",
    	"reply_to": "[]",
    	"group_label": "热门评论"
    }, {
    	"id": "89034",
    	"pid": "0",
    	"page_id": "23700101",
    	"uid": "58066",
    	"user_info": "{\"user_name\":\"\",\"nick_name\":\"\第\一\现\场\独\家\报\道17\",\"img_url\":\"https:\\\/\\\/p5.ssl.qhimg.com\\\/t01d7509745a1a51184.jpg?size=480x480\"}",
    	"reply_to": "[]",
    	"message": "1111",
    	"likes": "0",
    	"status": "1",
    	"pdate": "2018-07-18 14:33:36",
    	"anonymous": "0",
    	"ext": "",
    	"sub_comment": [],
    	"sub_next": 0,
    	"group_label": "最新评论"
    }, {
    	"id": "89000",
    	"pid": "0",
    	"page_id": "23700101",
    	"uid": "2327285",
    	"user_info": "{\"user_name\":\"\",\"nick_name\":\"152****7893\",\"img_url\":\"https:\\\/\\\/p3.ssl.qhimg.com\\\/t01d860e5e97b6dfd9b.png\"}",
    	"reply_to": "[]",
    	"message": "啊啊啊",
    	"likes": "3",
    	"status": "1",
    	"pdate": "2018-06-28 18:10:25",
    	"anonymous": "0",
    	"ext": "",
    	"sub_comment": [],
    	"sub_next": 0,
    	"group_label": "最新评论"
    }, {
    	"id": "88999",
    	"pid": "0",
    	"page_id": "23700101",
    	"uid": "2327285",
    	"user_info": "{\"user_name\":\"\",\"nick_name\":\"152****7893\",\"img_url\":\"https:\\\/\\\/p3.ssl.qhimg.com\\\/t01d860e5e97b6dfd9b.png\"}",
    	"reply_to": "[]",
    	"message": "未登录评论",
    	"likes": "1",
    	"status": "1",
    	"pdate": "2018-06-28 18:06:56",
    	"anonymous": "0",
    	"ext": "",
    	"sub_comment": [],
    	"sub_next": 0,
    	"group_label": "最新评论"
    }],
  }

  render() {
    const { listData } = this.props;
    const itemData = (data) => {
      let userInfo = null;
      if (data && data.user_info) {
        try {
          userInfo = JSON.parse(data.user_info);
          data.userInfo = userInfo;
        } catch(e) {
          console.error('解析评论信息错误', e);
        }
      }
      return data;
    }

    return (
      <View style={styles.container}>
        {
          listData.map((item, index) =>
            <CommentItem data={itemData(item)} key={index} />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
