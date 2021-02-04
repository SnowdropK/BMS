const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: 'AntD组件二次封装',
        key: '/AntdPackage',
        children: [
            {
                title: '按钮-Button',
                key: '/AntdPackage/Button',
            },
            {
                title: '弹窗-Modal',
                key: '/AntdPackage/Modal',
            },
            {
                title: '下拉选项-Select',
                key: '/AntdPackage/Select',
            },
            {
                title: '表格-Tabel',
                key: '/AntdPackage/Tabel',
            },
            {
                title: '图片画廊',
                key: '/AntdPackage/Gallery',
            },
            {
                title: '轮播图',
                key: '/AntdPackage/Carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '富文本',
        key: '/RichText'
    }
];
export default menuList;