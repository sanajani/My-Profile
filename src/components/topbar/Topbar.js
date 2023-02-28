import './Topbar.scss'

// import {Person,Mail} from '@material-ui/icons'

const Topbar = ({menuOpen,setMenuOpen}) => {


  return (
    <div className={"topbar " + (menuOpen && 'active')}>
      <div className="container">
        <div className="logo"><h1><a href="#intro">SanaJani<span>.</span></a></h1></div>
        <div className={"humbergar " + (menuOpen && 'active')} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar