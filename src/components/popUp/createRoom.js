import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Select } from 'antd';
import {Divider} from "antd";

const { Option } = Select;
const layout = {
    labelCol: { xs: { span: 4 },  lg: { span: 8 } },
    wrapperCol: { xs: { span: 4 },   lg: { span: 8 } }
}
const tailLayout = {
    wrapperCol: { xs: { span: 4 },  lg: { span: 4, offset: 11 } }
};

class CreateRoom extends React.Component {
    formRef = React.createRef();
    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };


    render() {
        return (
            <>
                <Divider plain>Create a room</Divider>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item
                        name="Room Name"
                        label="Room Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Room Max Size"
                        label="Room Max Size"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Visibility"
                        label="Visibility"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="public">public</Option>
                            <Option value="private">private</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={this.onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>

            </>
        );
    }
}
export default CreateRoom;