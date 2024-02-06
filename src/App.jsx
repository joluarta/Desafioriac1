
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MyCard from './components/Mycard'

     
 
function App() {
  const linkData = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Acerca de',
      url: '/about'
    },
    {
      name: 'Contacto',
      url: '/contact'
    },
    {
      name: 'Faq',
      url: '/faq'
    }
  ]

  const cardData = [
    {
      title:'Titulo 1',
      text:'Texto 1',
      btn:'Boton 1',
    },
    {
      title:'Titulo 2',
      text:'Texto 2',
      btn:'Boton 2',
    }


  ]


  return (
    <>
      <Navbar links={linkData} />
      <Header day="Lunes" />
      <Footer>
        <Navbar links={linkData} />
      </Footer>
      {
     cardData.map((card) => (
      <MyCard
        title={card.title}
        text={card.text}
        btn={card.btn}
      />
      ))
      }
    </>
  )
}

export default App
