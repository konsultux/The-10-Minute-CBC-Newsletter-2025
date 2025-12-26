import React, { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import Header from './components/Header';
import Hero from './components/Hero';
import LoomSection from './components/LoomSection';
import UpcomingEvent from './components/UpcomingEvent';
import FutureReadingList from './components/FutureReadingList';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    clarity.init('urji75ntpe');
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LoomSection />
        <UpcomingEvent />
        <FutureReadingList />
      </main>
      <Footer />
    </div>
  );
}

export default App;