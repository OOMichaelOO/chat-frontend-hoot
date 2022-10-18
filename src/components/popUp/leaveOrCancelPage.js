import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import LeaveOrCancel from "./leaveOrCancel";


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
                Leave a room or Cancel
            </Button>
            <Modal title="Leave or Cancel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <LeaveOrCancel />
            </Modal>
        </>
    );
};

export default App;