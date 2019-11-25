// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Col, Card } from 'react-bootstrap';
import ClientSearch from '../../components/Search/ClientSearch';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  return (
    <div className={styles['sidebar']}>
      <div className={styles['desktop-only']}>
        <div className={styles['sidebar__inner']}>
          <Author author={author} isIndex={isIndex} /> 
          <Menu menu={menu} />
          <Contacts contacts={author.contacts} />
          <Copyright copyright={copyright} />
        </div>
      </div>


      <div className={styles['mobile-only']}>
        <div className={styles['sidebar__innerMobile']}>
          <Navbar bg="white" expand="lg">
            <div>
              <Navbar.Brand href="#home" style={{float:'left', maxWidth:'200px'}}>
                <Author author={author} isIndex={isIndex} /> 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{verticalAlign: 'middle', float:'right', marginLeft: '50px', marginTop: '40px'}} /> 
            </div>
            <hr style={{width: '100%'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Card style={{ width: '100%', marginTop: '-20px'}}>
                  <Card.Img variant="top"/>
                  <Card.Body>
                    <Card.Text>
                      <Nav.Link className={['navHover']} href="/">Publications</Nav.Link>
                      <hr style={{width: '100%'}}/>
                      <Nav.Link className={['navHover']} href="http://www.bii.a-star.edu.sg/">Bioinformatics Institute Website</Nav.Link>
                      <hr style={{width: '100%'}}/>
                      <Nav.Link className={['navHover']} href="/authors">Authors</Nav.Link>
                      <hr style={{width: '100%'}}/>
                      <Nav.Link className={['navHover']} href="/groups">Groups</Nav.Link>
                      <hr style={{width: '100%'}}/>
                      <Nav.Link className={['navHover']} href="/archive">Archive Search</Nav.Link>
                      <hr style={{width: '100%'}}/>
                      <ClientSearch />
                    </Card.Text>
                  </Card.Body>
                </Card>
                
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
