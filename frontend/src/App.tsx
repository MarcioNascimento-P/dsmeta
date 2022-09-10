import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationButton from "./assets/Componentes/NotificationButton"
import SalesCard from "./assets/Componentes/SalesCard"
import Header from "./assets/Componentes/Header"



function App() {





  return (

    <>

    <ToastContainer/>
      <Header />
      <main>
        <section className="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
