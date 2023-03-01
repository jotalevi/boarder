import './VerticalBoard.css'
import { Plus, MoreHorizontal } from 'react-feather';
import TaskCard from '../TaskCard/TaskCard';
import { useState } from 'react';
import Modal from 'react-modal';
import NewCardModal from '../NewCardModal/NewCardModal';

function VerticalBoard(props) {

    const [tasks] = useState(props.data.tasks)
    const [modalIsOpen, setIsOpen] = useState(false);

    let cards = tasks.map((task) =>
        <TaskCard data={task} />
    )

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='vhBoard'>
            <div className='vhBoardTitleBar'>
                <div>
                    <p className='vhTabItems'>
                        {props.data.title}
                    </p>
                </div>
                <div>
                    <Plus className='vhTabItems' width={20} height={20} onClick={() => {
                        openModal()
                        //setTasks([...tasks, {
                        //    id: '1246',
                        //    title: 'Refactor Product Data',
                        //    type: 'bug',
                        //    asignee: [
                        //        'Shamaru Primeira',
                        //        'Darinka De La Cuadra'
                        //    ]
                        //}])
                    }} />
                    <MoreHorizontal className='vhTabItems' width={20} height={20} />
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <NewCardModal></NewCardModal>
                    </Modal>
                </div>
            </div>
            {cards}
        </div>
    )
}

export default VerticalBoard