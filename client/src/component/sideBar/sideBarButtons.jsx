import React from 'react';
import styles from './sideBarButton.module.css' 

const SideBarButtons = ({content,onClickButton}) => {

    const onClick = () => {
        onClickButton(content.name)
    }

    return(
    <div className={styles.container}>        
        <button className={styles.button} onClick={onClick}>
            <div className={styles.icon}>
                {content.icon}
            </div>
            <div className={styles.name}>
                {content.name}
            </div>
        </button> 
    </div>           
    )};

export default SideBarButtons;