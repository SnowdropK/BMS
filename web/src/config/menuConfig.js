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
                title: '选择器-Select',
                key: '/AntdPackage/Select',
            },
            {
                title: '表格-Tabel',
                key: '/AntdPackage/Tabel',
            },
            {
                title: '时间选择-TimePicker',
                key: '/AntdPackage/TimePicker',
            },
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