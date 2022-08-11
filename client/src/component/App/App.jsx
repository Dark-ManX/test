import {useEffect} from 'react';
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import Horse from '../Horse/Horse';
import { setHorses } from '../../redux/store';
import {Title} from './App.styled';

function App() {

  const socket = io('http://localhost:3002/');

  const horses = useSelector(state => state.horses);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('disconnect', () => console.log('sorry, connection was lost'))
    socket.on('connection', () => console.log('socket connected'));
    socket.emit('start');

    socket.on('ticker', (socket) => {

      dispatch(setHorses(socket));
      })
  }, [])
    
  return (

  <div className="App">

    <Title>Horserun</Title>

    {!socket && <p>The run will start soon</p>}
    <ul>

      {horses && (horses.map(({name, distance}) => (
        <Horse key={shortid.generate()} name={name} distance={distance}/>
      )))}
      
    </ul>
  </div>
  );
}

export default App;
