import React from "react";
import {Button, Table, Tag, Space, Pagination } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import './user.less'

function User() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags: any) => (
                <>
                    {tags.map((tag: any) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: any) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const pagination = {
        current: 1,
        pageSize: 10,
    }
    return (
        <div className="layout">
            <div className="layout_head">
                <div className="layout_head_left">
                    <Button type="primary" icon={<PlusOutlined />}>
                        <span className="button_font">新增用户</span>
                    </Button>
                </div>
                <div className="layout_head_right" />
            </div>
            <div className="layout_content">
                <Table style={{
                    flex: 1,
                }} columns={columns} dataSource={data} pagination={false} />
            </div>
            <div className="layout_footer">
                <Pagination
                    total={85}
                    showSizeChanger
                    showQuickJumper
                    showTotal={total => `共 ${total} 条`}
                />
            </div>
        </div>
    )
}

export default User
