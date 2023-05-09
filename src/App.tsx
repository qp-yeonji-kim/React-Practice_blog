import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';
//Switch'를 'Routes'로 대체하고, 'Switch'를 사용하던 부분을 'Routes'로 변경해야 합니다. 또한 'exact' 속성은 'Route' 대신 'Element'로 이동해야 합니다.

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          {routes.map((route: any) => {
            return <Route path={route.path} element={<route.component />} key={route.path} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
