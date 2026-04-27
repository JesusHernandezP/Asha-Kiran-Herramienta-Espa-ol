/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { LevelSection } from './pages/LevelSection';
import { LessonDetail } from './pages/LessonDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#3C3633] font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nivel/:level" element={<LevelSection />} />
            <Route path="/leccion/:id" element={<LessonDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
