import styles from './Home.module.scss';
import { Layout } from '../../components/Layout/Layout';

export function Home() {
  return (
    <Layout>
      <header className={styles.header}>Инвентарь</header>
      <div className={styles.list}>
        
      </div>
    </Layout>
  )
}