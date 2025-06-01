-- auto-generated definition
create table user
(
    id    int auto_increment comment '用户ID'
        primary key,
    `key` varchar(100) not null comment '键',
    value varchar(255) not null comment '值'
);
