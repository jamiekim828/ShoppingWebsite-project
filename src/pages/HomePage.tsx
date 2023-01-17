import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import HomeMidpart from '../components/Home/HomeMidpart';
import HomeBottompart from '../components/Home/HomeBottompart';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeMidpart />
      <HomeBottompart />
      <Footer />
    </div>
  );
}
