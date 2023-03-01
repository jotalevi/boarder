import './TaskCard.css'
import { Plus } from 'react-feather';
import { useState } from 'react';

function TaskCard(props) {

    const [asignee, setAsignee] = useState(props.data.asignee)

    let peopleCircles = asignee.map((name) => (
        <div className='peopleCircle' onClick={() => {
            let index = asignee.indexOf(name)
            if (index !== -1)
                setAsignee([...asignee.slice(0, index), ...asignee.slice(index + 1)])
        }}>
            <h3>
                {name.match(/\b(\w)/g).join('').slice(0, 2)}
            </h3>
        </div>
    ))

    peopleCircles = [
        ...peopleCircles,
        <div className='peopleCircle' onClick={() => { setAsignee([...asignee, 'Added New']) }}>
            <Plus width={30} height={30} />
        </div>
    ]



    return (
        <div className='taskCard'>
            <div className='taskColorLip'>

            </div>
            <div className='cardFlexContent'>
                <p className='taskIdp'>
                    {props.data.id}
                </p>
                <h3 className='taskTitle'>
                    {props.data.title}
                </h3>
                <div className='peopleListOrAdd'>
                    {peopleCircles}
                </div>
            </div>
        </div>
    )
}

export default TaskCard