
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"
import { TaskList } from "./components/TaskList/TaskList"

import styles from "./App.module.css"

 export function App(){

  return(
    <div className={styles.App}>
       <Header/>
        <Main>

          <form>
          <input type="text" />
          <button>+</button>
          </form>
          <TaskList/> 
          
         
        </Main>
      
        <Footer autor="Rafael"/>

    </div>

  
  )
}
