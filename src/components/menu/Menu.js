import './Menu.scss'

const Menu = ({menuOpen,setMenuOpen}) => {

  function closeMenu() {
    setMenuOpen(false)
  }
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={closeMenu}><a href="#intro">Home</a></li>
        <li onClick={closeMenu}><a href="#profolio">Profolio</a></li>
        <li onClick={closeMenu}><a href="#work">Works</a></li>
        <li onClick={closeMenu}><a href="#testmonios">TestMonios</a></li>
        <li onClick={closeMenu}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu

// export {Menu}