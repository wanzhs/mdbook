import Mock from 'mockjs';

Mock.setup({
    timeout: 800,// 设置延迟响应，模拟向后端请求数据
});

Mock.mock('/user/login', 'post', {
    userId: 1,
    userName: "John",
    userAccount: "John",
    userPassword: "*******",
    accessToken: "AccessTokenAccessTokenAccessTokenAccessToken",
    permissions: ["perm1"],
});
