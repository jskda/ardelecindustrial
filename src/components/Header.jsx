import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-xl font-bold text-primary">ARDELEC</a>
        <nav className="space-x-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}>
            Home
          </NavLink>
          <NavLink to="/company" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}>
            Company
          </NavLink>
          <NavLink to="/activities" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}>
            Activities
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}