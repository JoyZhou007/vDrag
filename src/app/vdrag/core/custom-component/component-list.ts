import { ComponentBaseData } from '../../types/component-type';

// 公共样式
const commonStyle = {
  rotate: '',
  opacity: 1,
};

// 编辑器左侧组件列表
const list: ComponentBaseData[] = [
  {
    id: null,
    component: 'v-text',
    componentData: '',
    label: '文字',
    flag: '',
    propValue: '文字',
    icon: 'icon-edit',
    animations: [],
    events: {},
    style: {
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      borderWidth: '',
      borderColor: '',
    },
  },
  {
    component: 'v-button',
    id: null,
    flag: '',
    componentData: '',
    label: '按钮',
    propValue: '按钮',
    icon: 'icon-thumb',
    animations: [],
    events: {},
    style: {
      width: 100,
      height: 34,
      borderWidth: '',
      borderColor: '',
      borderRadius: '',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-picture',
    componentData: '',
    label: '图片',
    icon: 'icon-picture',
    propValue: './../../assets/logo.png',
    animations: [],
    events: {},
    style: {
      width: 60,
      height: 60,
      borderRadius: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-radio',
    componentData: [
      {
        value: '复查',
      },
      {
        value: '转诊',
      },
    ],
    label: '单选框',
    propValue: '复查',
    icon: 'icon-radio',
    animations: [],
    events: {},
    style: {
      width: 200,
      height: 60,
      textAlign: '',
      color: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-table',
    componentData: '',
    label: '验光表格',
    propValue: '',
    icon: 'icon-table',
    animations: [],
    events: {},
    style: {
      width: 500,
      height: 100,
      borderWidth: '',
      borderColor: '',
      borderRadius: '',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-textarea',
    componentData: '',
    label: '文本域',
    propValue: '',
    icon: 'icon-edit',
    animations: [],
    events: {},
    style: {
      width: 200,
      height: 100,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      borderWidth: '',
      borderColor: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-select',
    componentData: [
      {
        babel: '裂隙灯 浅前房',
        value: '裂隙灯 浅前房',
      },
      {
        label: '前节OCT 浅前房',
        value: '前节OCT 浅前房',
      },
    ],
    label: '下拉框',
    propValue: [],
    icon: 'icon-select',
    animations: [],
    events: {},
    style: {
      width: 200,
      height: 50,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      borderWidth: '',
      borderColor: '',
    },
  },
  {
    id: null,
    flag: '',
    component: 'v-album',
    componentData: '',
    label: '相册',
    icon: 'icon-picture',
    propValue: [
      './../../assets/title.jpg',
      './../../assets/title.jpg',
      './../../assets/title.jpg',
    ],
    animations: [],
    events: {},
    style: {
      width: 600,
      height: 130,
      borderRadius: '',
      borderWidth: '',
      borderColor: '',
    },
  },
];

list.forEach((item) => {
  item.style = { ...item.style, ...commonStyle };
});

export default list;
