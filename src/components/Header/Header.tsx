import styles from './Header.module.scss';
import profileIcon from '../../static/icons/profile.svg';
import exitIcon from '../../static/icons/exit.svg';

export function Header() {
  return <header className={styles.header}>
    <div className={styles.logo}>СУСИ</div>
    <div className={styles.btns}>
      <button className={styles.btn}>
        <span className={styles.text}>adm_1234</span>
        <img src={profileIcon} alt="" className={styles.icon} />
      </button>
      <button className={styles.btn}>
        <img src={exitIcon} alt="" className={styles.icon} />
      </button>
    </div>
  </header>;
}
