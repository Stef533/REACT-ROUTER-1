import Counter from './counter';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="counter" element={< Counter />} />
    </Routes>

  );
}

export default App;
