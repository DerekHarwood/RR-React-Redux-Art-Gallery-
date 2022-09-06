import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {fetchData, nextImage, prevImage, setArtId, reset} from './features/dataSlice'

function App() {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.data)

  const renderImage = () => {
    return currentState.apiData ?
    <img src={currentState.apiData.primaryImage}/> :
    <h3>No Image Found</h3>
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {dispatch(reset())}}>Clear</button>
        <button onClick={() => {dispatch(nextImage())}}>Next</button>
        <button onClick={() => {dispatch(prevImage())}}>Back</button>
      </div>
      <h1>{currentState.artId}</h1>
      <input value={currentState.artId} onChange={(e) => {dispatch(setArtId(e.target.value))}} />
      <div>
        {
          renderImage()
        }
      </div>
    </div>
  );
}

export default App;
