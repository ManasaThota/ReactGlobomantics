import styles from './banner.module.css';

const Banner = () => {
    return(
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={styles.logo}/>
            </div>
            <div className="col-7 mt-5">
                <div className={styles.subtitleStyle} >Providing houses all over the world</div>
            </div> 
        </header>
    );
};

export default Banner;