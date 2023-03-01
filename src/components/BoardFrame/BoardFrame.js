import './BoardFrame.css'
import { User, Filter } from 'react-feather';
import VerticalBoard from '../VerticalBoard/VerticalBoard'

function BoardFrame(props) {
    const vboards = props.data.tabs.map((tab) => 
        <VerticalBoard data={tab}/>
    )
    
    return (
        <div className='boardFrame'>
            <div className='boardFrameFlex'>
                <div className='boardName'>
                    <h1>
                        {props.data.boardName}
                    </h1>
                </div>
                <div className='boardFiltersDiv'>
                    <div className='sideBarItem'>
                        <User width={20}/>
                        <p className='sideBarItemText'>People</p>
                    </div>
                    <div className='sideBarItem'>
                        <Filter width={20} />
                        <p className='sideBarItemText'>Filter</p>
                    </div>
                </div>
            </div>
            <div className='boardFrameBoards'>
                {vboards}
            </div>
        </div>
    )
}

export default BoardFrame