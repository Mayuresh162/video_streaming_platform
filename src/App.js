import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchScreen from './components/WatchScreen';
import store from './utils/store';

const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: 'watch',
          element: <WatchScreen />
        }
      ]
    }
])

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </ Provider>
  );
}

export default App;
