import styles from './banner.module.css';

const Banner = ({headerText}) => {
    return(
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={styles.logo}/>
            </div>
            <div className="col-7 mt-5">
                <div className={styles.subtitleStyle} >{headerText}</div>
            </div> 
        </header>
    );
};

export default Banner;