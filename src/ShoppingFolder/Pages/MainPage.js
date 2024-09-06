
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Collections from '../Components/Collections';
import Footer from '../Components/Footer';
import {Gents} from '../data'
import {Ladies} from '../data'
import WomenCollection from '../Components/WomenCollection';

const MainPage = () => {
  
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={Gents}/>
      <WomenCollection womenFashion={Ladies}/>
      <Footer/>
    </div>
  )
}

export default MainPage
