import './VerticalBoard.css'
import { Plus, MoreHorizontal } from 'react-feather';
import TaskCard from '../TaskCard/TaskCard';
import { useState } from 'react';

function VerticalBoard(props) {

    const [tasks, setTasks] = useState(props.data.tasks)

    let cards = tasks.map((task) =>
        <TaskCard data={task} />
    )

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
                        setTasks([...tasks, {
                            id: '1246',
                            title: 'Refactor Product Data',
                            type: 'bug',
                            asignee: [
                                'Shamaru Primeira',
                                'Darinka De La Cuadra'
                            ]
                        }])
                    }} />
                    <MoreHorizontal className='vhTabItems' width={20} height={20} />
                </div>
            </div>
            {cards}
        </div>
    )
}

export default VerticalBoard