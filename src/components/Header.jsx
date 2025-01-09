function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="https://via.placeholder.com/50" 
          alt="Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>My Website</h1>
      </div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#ddd',
  },
};

export default Header;
