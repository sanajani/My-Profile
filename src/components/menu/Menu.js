import './Menu.scss'

const Menu = ({menuOpen,setMenuOpen}) => {
    function closeMenu(){
        setMenuOpen(false)
    }
  return (
    <div className='menu'>
      <h1>hello from Menu</h1>
    </div>
  )
}

export default Menu