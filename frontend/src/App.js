//import React from 'react'; //<-- agregado por mi
import { BrowserRouter as Router , Routes, Route, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  const RutaAux = () => <CreateNote params={useParams()} />;
  return (
    <Router>
      <Navigation/>
      
      <div className="container p-4">
        <Routes>
            <Route path="/" exact Component={NotesList} />
            <Route path="/edit/:id" element={<RutaAux />} />
            <Route path="/create" Component={CreateNote} />
            <Route path="/user" Component={CreateUser} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
