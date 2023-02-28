import './Menu.scss'

const Menu = ({menuOpen}) => {

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#intro">Profolio</a></li>
        <li><a href="#intro">TestMonios</a></li>
        <li><a href="#intro">Works</a></li>
        <li><a href="#intro">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu