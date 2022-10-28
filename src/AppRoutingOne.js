import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage  from './pages/home/HomePage';
import Notfoundpage from './pages/404/NoteFoundPage'
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    
      <div>

        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/profile'>| profile ||</Link>       
        
        </aside>

        <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage></AboutPage>}/>
          <Route path='/faqs' element={<AboutPage></AboutPage>}/>
          <Route path='/profile' element={<ProfilePage></ProfilePage>}/>
          <Route path='/tasks' element={<TasksPage></TasksPage>} />
          <Route path='/tasks/:id' element={<TaskDetailPage></TaskDetailPage>} />

          {/**404 - page no found */}
          <Route path='*' element={<Notfoundpage/>} />

        </Routes>

        </main>

      </div>


      
    
  );
}

export default AppRoutingOne;
