import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header>
        <img src="./images/logo.svg" alt="logo" className={styles.image} />
      </header>
      <footer>
        <img src="./images/moon.svg" alt="dark mode icon" />
        <div className={styles.divider}></div>
        <img
          src="./images/profile.png"
          className={styles.image}
          alt="profile phot"
        />
      </footer>
    </aside>
  )
}
export default Sidebar
