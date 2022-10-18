import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import ManipulateRoom from "./manipulateRoom";


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
                Enter Manipulate room
            </Button>
            <Modal title="Manipulate room" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ManipulateRoom />
            </Modal>
        </>
    );
};

export default App;