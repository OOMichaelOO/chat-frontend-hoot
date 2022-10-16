import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Select } from 'antd';
import {Divider} from "antd";

const layout = {
    labelCol: { xs: { span: 4 },  lg: { span: 8 } },
    wrapperCol: { xs: { span: 4 },   lg: { span: 8 } }
}
const tailLayout = {
    wrapperCol: { xs: { span: 4 },  lg: { span: 4, offset: 11 } }
};

class joinOrCancel extends React.Component {
    formRef = React.createRef();
    render() {
        return (
            <>
                <Divider plain>public room #1</Divider>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Join
                        </Button>
                        <Button htmlType="button" >
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>

            </>
        );
    }
}
export default joinOrCancel;