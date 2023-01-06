import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Home from './Home'
import NouvelleList from './NouvelleList'
/**
 * Composant principal de l'application. C'est ce composant
 * qui contient les routes de toute l'application
 */
export default function App() {
  return (
    // On active le strict mode pour debugger react
    <React.StrictMode>
      {/* La navigation sur mon navigateur */}
      <BrowserRouter>
        {/* On déclare une suite ou collection de routes */}
        <Routes>
  {/* Route d'inscription (page d'inscription ou écran d'inscription) */}
          <Route path="/" element={<Login />}>
               {/* Ces routes enfant, sont nommé les Outlet. Elles sont
                utilisé dans le composant login et affiché unqiuement lorsque nous
                sommes connécté */} {/* Route pour la page home */}
                 <Route path="" element={<Home />} />
                 <Route path="nouvelleList" element={<NouvelleList />} />
              {/* <Route path="menu" element={<Menu />} /> */}
          </Route>

          {/*--<Route path="/" element={<Registration />}> */}
            
   {/* Route pour la connexion */}
          {/*--<Route path="/connexion" element={<Login />} /> */}
          <Route path="/inscription" element={<Registration />} />
    
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}