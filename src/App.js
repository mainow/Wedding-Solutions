import Intro from './pages/Intro';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Setup from './pages/Setup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/lista-regalo" element={<Intro />}/>
        <Route path="/gift-list-setup-do-not-visit-link" element={<Setup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
