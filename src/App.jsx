import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Food from "./components/Food.jsx"
import Card from "./components/Card.jsx"
import Button from "./components/Button.jsx"
import Student from "./components/Student.jsx"


function App() {

  return (
    <>
      <Header />
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Button />
      <Food />
      <Card />
      <Footer />
    </>
  );
  
}

export default App
