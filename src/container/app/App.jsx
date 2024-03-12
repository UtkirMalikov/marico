import Collects from "../collects/Collects"
import Content from "../content/Content"
import CreateShare from "../crateShare/CreateShare"
import ExpertsEgre from "../expertsEgre/ExpertsEgre"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import HomePage from "../homePage/HomePage"
import Navbar from "../navbar/Navbar"
import "./App.css"

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <Content/>
        <HomePage/>
        <Collects/>
        <CreateShare/>
        <ExpertsEgre/>
        <Footer/>
    </div>
  )
}

export default App