import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames'
import Home from './modules/Home/pages/Home'
import ListStudent from './modules/Student/pages/ListStudent'
import FormStudent from './modules/Student/pages/FormStudent'

export default function App() {


  const menus = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'List Students',
      path: '/student/',
    },
    {
      label: 'Create Student',
      path: '/student/new',
    }
  ]

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
              {menus.map(menu => <Link key={menu.path} className={classnames('nav-item nav-link')} to={menu.path}>{menu.label}</Link>)}
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/student/" element={<ListStudent />} />
          <Route path="/student/:id" element={<FormStudent />} />
          <Route path="/student/new" element={<FormStudent />} />
        </Routes>
      </div>
    </Router>
  )

}