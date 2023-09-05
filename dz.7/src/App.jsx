import { Route, Routes } from 'react-router';
import Laout from './components/laout/Laout';
import { Page1 } from './pages/page1/Page1';
import { Page2 } from './pages/page2/Page2';
import { Page3 } from './pages/page3/Page3';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route index element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
