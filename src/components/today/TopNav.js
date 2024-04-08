import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../styles/topnav.module.css';

const TopNav = () => {

  const d = new Date();
  const d1 = d.toDateString();
  const url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.quotesgram.com%2Fimg%2F90%2F12%2F1956418586-Time-for-a-change.jpg&f=1&nofb=1&ipt=65fb6f780c912be2c8c52dab2fa2de59712bef33a04f3d2db143cf84e3eb6c9a&ipo=images";

  return (
    <Navbar bg="light" expand="lg" className='shadow-sm'>
      <Container >
        <Navbar.Brand className={styles.decorationLogo}>
          <Link className={styles.decorationLogo} to='/'>
            <img src={url} alt="Home" className='img-fluid rounded-circle' style={{width:'4rem'}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Item as="li">
              <div className={styles.navLeftElem}>
                <Link className={styles.decoration} to='/'>
                <button className='btn btn-outline-primary' >Home</button> </Link>
              </div>
            </Nav.Item> */}
            <Nav.Item as="li">
              <div className={styles.navLeftElem}>
                <Link className={styles.decoration} to='/weekly'> 
                <button className='btn btn-outline-primary ' >Weekly</button></Link>
              </div>
            </Nav.Item>
            <Nav.Item as="li">
              <div className={styles.navRightElem}>
                {`${d1}`}
              </div>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;