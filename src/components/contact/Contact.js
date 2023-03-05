import './Contact.scss'

const Contact = () => {
  // const formSubmit = (e)=> {
    // e.preventDefault()
  
  // }
  return (
    <div className='contact' id='contact'>
      <div className="container">
        <h1>Contact With Me</h1>
        <div className="contactContainer">
          <form action="https://formspree.io/f/xzbqgykb"
            method="POST" >
            <input name='name' type="text" placeholder='Name...' required min={3} />
            <input type="email" name='email' placeholder='Email...' required />
            <textarea placeholder="What Do You Want..." name='textarea' id="" cols="30" rows="10" required minLength={5}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact