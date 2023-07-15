import { Routes, Route, redirect} from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';

import { AdminPage } from './pages/AdminPage/AdminPage';

import { Notfoundpage } from './pages/NotFoundPage/Notfoundpage';

import { Layout } from './components/Layout/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="mainPage" element={<MainPage/>}/>
          <Route path="adminPage" element={<AdminPage />}/>
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;