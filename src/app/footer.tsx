import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image src="/logo.png" alt="Tapioca" className={styles.logo} width={100} height={50} /> {/* Update src to your logo path */}
        <p className={styles.copyright}>© Permissionless 2024. All rights reserved</p>
        <nav className={styles.nav}>
          <a href="https://docs.tapioca.xyz/book-of-genesis" className={styles.link} target="_blank" rel="noopener noreferrer">Genesis Guide</a>
          <a href="https://docs.tapioca.xyz" className={styles.link} target="_blank" rel="noopener noreferrer">Tapioca Docs</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
