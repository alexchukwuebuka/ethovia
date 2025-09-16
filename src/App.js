import {useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Policy from './pages/Policy';
import './App.css'
import Forex from './pages/forex/Forex';
import Indices from './pages/indices/Indices';
import Futures from './pages/futures/Futures';
import Stocks from './pages/stocks/Stocks';
import News from './pages/news/News';
import TechnicalAnalysisPage from './pages/technicalAnalysis/TechnicalAnalysisPage'
import Heatmaps from './pages/heatmaps/Heatmaps';
import Watchlist from './pages/watchlist/Watchlist';
import Team from './pages/team/Team'
import Aboutpage from './pages/Aboutpage'
import Faq from './components/Faq/Faq';


function App() {
   useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
      AOS.refresh()
    // duration=1200;
    }, [])
    
  
  return (
    <>
    <AnimatePresence >
        <Router>
        <motion.div className="App"
        key={Routes.Route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:0.2}}
        variants={{
          initialState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState:{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }
        }}
        >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<Aboutpage />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/privacy-policy' element={<Policy />}/>
            <Route path='/forex' element={<Forex />}/>
            <Route path='/futures' element={<Futures />}/>
            <Route path='/indices' element={<Indices />}/>
            <Route path='/stocks' element={<Stocks />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/technical-analysis' element={<TechnicalAnalysisPage />}/>
            <Route path='/heatmaps' element={<Heatmaps />}/>
            <Route path='/watchlists' element={<Watchlist />}/>
            <Route path='/team' element={<Team />}/>
          </Routes>
        </motion.div>
      </Router>
      </AnimatePresence>
    </>
  );
}

export default App
