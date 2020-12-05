import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactCard from './components/ContactCard'
// import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <Header />
      <ContactCard 
        contact={{
          name:"João da Silva", 
          phone:"11 9999 6666", 
          email:"joao@silva.net", 
          imgUrl:"https://picsum.photos/200"
        }}
        />
        
       <ContactCard
        contact={{
          name:"José da Silva", 
          phone:"11 9999 6666", 
          email:"joao@silva.net", 
          imgUrl:"https://picsum.photos/201"
        }}
        />
      <ContactCard
        contact={{
          name:"Maria da Silva", 
          phone:"11 9999 6666", 
          email:"joao@silva.net", 
          imgUrl:"https://picsum.photos/202"
        }}
        />
      <ContactCard
        contact={{
          name:"Joana da Silva", 
          phone:"11 9999 6666", 
          email:"joao@silva.net", 
          imgUrl:"https://picsum.photos/203"
        }}
        />
      {/* <MainContent/> */}
      <Footer/>
    </>
  );
}

export default App;
