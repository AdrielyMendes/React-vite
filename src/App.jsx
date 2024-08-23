
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"

 export function App(){

  return(
    <>
       <Header/>
        <Main>
          <h3>Conteúdo</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reiciendis optio. Veniam dolorum expedita blanditiis odit impedit aspernatur ratione doloremque animi minima! Autem error pariatur et. At quisquam voluptas nihil.</p>
        </Main>
      
        <Footer autor="Rafael"/>

      
    </>
  
  )
}

