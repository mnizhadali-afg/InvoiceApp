import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
