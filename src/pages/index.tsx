import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>
         
        </div>
      </section>

      <section>
        <div>
          <h1>00:00 o'clock!</h1>
        </div>
      </section>
  </div> 
  )
}

 