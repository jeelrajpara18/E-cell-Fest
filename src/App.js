import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Hero from './sections/hero/hero';
import Leap from './sections/leap/leap';
import Card from './sections/card/card';
import Footer from './sections/footer/footer';
import { Cta } from './sections/cta/cta';
import FaqData from './sections/faq/faqData';
import { Timeline } from './ui/timeline';
import { timelineData } from './utils/timelineData';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" className='h-screen'>
                <Hero />
              </div>
              <div id="event-plan">
                <Leap />
              </div>
              <div id="domains" className="mt-10">
                <Card />
              </div>
              <div>
                <FaqData />
              </div>
              <div className="h-screen flex items-center justify-center">
                <Cta />
              </div>
            </>
          }
        />
        <Route path="/eventroadmap" element={<Timeline data={timelineData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
