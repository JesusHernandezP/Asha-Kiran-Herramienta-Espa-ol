/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { AulaVirtual } from './pages/AulaVirtual';
import { LevelSection } from './pages/LevelSection';
import { LessonDetail } from './pages/LessonDetail';
import { RecursosMalaga } from './pages/RecursosMalaga';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#3C3633] font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/aula-virtual" element={<AulaVirtual />} />
              <Route path="/nivel/:level" element={<LevelSection />} />
              <Route path="/leccion/:id" element={<LessonDetail />} />
              <Route path="/recursos-malaga" element={<RecursosMalaga />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
