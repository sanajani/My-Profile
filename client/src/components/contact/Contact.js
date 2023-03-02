import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="container">
        <h1>Contact With Me</h1>
        <div className="contactContainer">
          <form method='post'>
            <input type="text" placeholder='Name...' />
            <input type="email" placeholder='Email...' />
            <textarea placeholder="What Do You Want..." id="" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact