import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Checkbox } from 'antd';
import {Button} from "antd";

const new_user = ['derek', 'jacob', 'sam'];
const exist_user = ['amy', 'daming', 'lingling', 'xize', 'yitao', 'jibai', 'wuxi', 'lulu', 'xixi']




const App = () => (
    <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(2).fill(null).map((_, i) => {
            const id = String(i + 1);

            if (id === "1") {
                return {
                    label: `Invite`,
                    key: id,
                    children: <>
                        <Checkbox.Group options={new_user} defaultValue={['derek']}/>
                        <Button> Cancel </Button>
                        <Button> Invite </Button>
                    </>
                };
            }
            else {
                return {
                    label: `Ban`,
                    key: id,
                    children: <>
                        <Checkbox.Group options={exist_user} defaultValue={['A']}/>
                        <Button> Cancel </Button>
                        <Button> Ban </Button>
                    </>

                };
            }

        })}
    />
);
export default App;