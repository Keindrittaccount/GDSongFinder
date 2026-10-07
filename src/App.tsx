import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import HomePage from '@/pages/HomePage';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-gd-muted text-lg">
      404 — Page not found
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gd-bg">
        {/* Background grid */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.12) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: 'auto, 40px 40px, 40px 40px',
          }}
        />
        <div className="relative z-0">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: '#1a1f2e',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}
