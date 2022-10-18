import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import JoinOrCancel from "./joinOrCancel";


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
                Join a room or Cancel
            </Button>
            <Modal title="Join or Cancel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <JoinOrCancel />
            </Modal>
        </>
    );
};

export default App;