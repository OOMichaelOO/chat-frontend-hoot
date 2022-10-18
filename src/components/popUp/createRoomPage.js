import React, { useState } from 'react';
import CreateRoom from "./createRoom"
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Enter Create Room
            </Button>
            <Modal title="Create Room" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <CreateRoom />
            </Modal>
        </>
    );
};

export default App;