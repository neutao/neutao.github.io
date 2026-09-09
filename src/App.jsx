import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/SiteLayout';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
import Industry from '@/pages/Industry';
import WindTunnel from '@/pages/WindTunnel';
import Publications from '@/pages/Publications';
import News from '@/pages/News';
import JoinTheLab from '@/pages/JoinTheLab';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">404</p>
        <h1 className="font-heading text-3xl font-medium text-[#0F172A] mb-4">Page not found</h1>
        <a href="/" className="text-[#0EA5E9] font-medium hover:text-[#0284C7]">Return to home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/wind-tunnel" element={<WindTunnel />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/join-the-lab" element={<JoinTheLab />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
