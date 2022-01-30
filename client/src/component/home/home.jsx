import React from 'react';
import Body from '../body/body';
import NavBar from '../navBar/navBar';
import RightSideBar from '../rightSIdeBar/rightSideBar';
import SideBar from '../sideBar/sideBar';
import styles from './home.module.css'

const Home = (props) => (
    <React.Fragment>
    <div className={styles.container}>
      <SideBar/>
      <Body/>
      <RightSideBar/>
    </div>
    </React.Fragment>
            
    );

export default Home;