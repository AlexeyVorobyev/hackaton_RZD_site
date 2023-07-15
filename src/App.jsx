import { Routes, Route } from 'react-router-dom';

import { CabinetPage } from './pages/CabinetPage/CabinetPage';
import { CabinetMainPanel} from './components/CabinetMainPanel/CabinetMainPanel'


import { Notfoundpage } from './pages/NotFoundPage/Notfoundpage';

import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cabinet" element={<CabinetPage />}>
            <Route path="mainPanel" element={<CabinetMainPanel/>}></Route>
          </Route>
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;