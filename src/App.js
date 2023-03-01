import './App.css';
import SideBar from './components/SideBar/SideBar';
import BoardFrame from './components/BoardFrame/BoardFrame';

let data = {
  boardName: 'Sprint 7',
  tabs: [
    {
      title: 'New',
      tasks: [
        {
          id: '1245',
          title: 'Login from IOP',
          type: 'task',
          asignee: [
            'Eros Talevi'
          ]
        },
        {
          id: '1246',
          title: 'Refactor Product Data',
          type: 'bug',
          asignee: []
        },
        {
          id: '1247',
          title: 'Notification Mails',
          type: 'task',
          asignee: [
            'Luis Prieto',
            'Jorge Fereira'
          ]
        },
        {
          id: '1248',
          title: 'Data analisis',
          type: 'task',
          asignee: []
        }
      ]
    },
    {
      title: 'Active',
      tasks: [
        {
          id: '1246',
          title: 'Refactor Product Data',
          type: 'bug',
          asignee: [
            'Shamaru Primeira',
            'Darinka De La Cuadra'
          ]
        },
        {
          id: '1247',
          title: 'Notification Mails',
          type: 'bug',
          asignee: [
            'Luis Prieto',
            'Jorge Fereira'
          ]
        },
        {
          id: '1248',
          title: 'Data analisis',
          type: 'bug',
          asignee: [
            'Eros Talevi'
          ]
        }
      ]
    },
    {
      title: 'Resolved',
      tasks: [
        {
          id: '1246',
          title: 'Refactor Product Data',
          type: 'task',
          asignee: [
            'Shamaru Primeira',
            'Darinka De La Cuadra',
            'Eros Talevi'
          ]
        }
      ]
    },
    {
      title: 'Closed',
      tasks: [
        {
          id: '1246',
          title: 'Refactor Product Data',
          type: 'bug',
          asignee: [
            'Shamaru Primeira',
            'Darinka De La Cuadra'
          ]
        },
        {
          id: '1248',
          title: 'Data analisis',
          type: 'task',
          asignee: [
            'Eros Talevi'
          ]
        }
      ]
    }
  ]
}

function App() {
  return (
    <div className='mainFrame'>
      <SideBar></SideBar>
      <BoardFrame data={data}></BoardFrame>
    </div>
  );
}

export default App;
