import './SideBar.css'
import { User, Clock, Bell, AlertTriangle } from 'react-feather';

function SideBar() {
    return (
        <div className='sideBar'>
            <div className='boardTitle'>
                <h1>
                    Board
                </h1>
            </div>
            <div className='sideBarList'>
                <div className='sideBarItem'>
                    <User />
                    <p className='sideBarItemText'>My Items</p>
                </div>
                <div className='sideBarItem'>
                    <Clock />
                    <p className='sideBarItemText'>Recent</p>
                </div>
                <div className='sideBarItem'>
                    <Bell />
                    <p className='sideBarItemText'>Notifications</p>
                </div>
                <div className='sideBarItem'>
                    <AlertTriangle />
                    <p className='sideBarItemText'>Important</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar