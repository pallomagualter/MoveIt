import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/pallomagualter.png" alt="Palloma Gualter" />

            <div>
                <strong>Palloma Gualter</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}