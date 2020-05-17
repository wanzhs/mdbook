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

Mock.mock('/book/list', 'post', {
    total: 20,
    "records|10": [
        {
            "bookId|+1": 1,
            "bookName": "@cname",
            "bookAge|21-25": 23,
            "bookPress|1": ["南方出版社", "商务出版社"],
            "bookAuthor|1": "@cname",
            "bookEditor": "@cname"
        }
    ]
});