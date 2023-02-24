import { Provider } from 'react-redux';
import Flight from './component/Flight';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='bg-image'>
        <Flight />
      </div>
    </Provider>

  );
}

export default App;
