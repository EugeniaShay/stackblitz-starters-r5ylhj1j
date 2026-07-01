import React, { useState } from 'react';

const IntroScreen = ({ onComplete }) => {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    setIsZooming(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans text-white flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out origin-center ${
          isZooming ? 'scale-[4.0] blur-md' : 'scale-100'
        }`}
      >
        <source
          src="https://github.com/EugeniaShay/trip-vista-assets/raw/refs/heads/main/intro-bg.mp4.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[1500ms] ease-in-out pointer-events-none ${
          isZooming ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div
        className={`relative z-10 flex flex-col items-center transition-opacity duration-700 ${
          isZooming ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-8xl font-light tracking-tight mb-6 drop-shadow-2xl">
          TRIP<span className="font-serif italic text-[#00FF66]">Vista</span>
        </h1>

        <div className="px-10 py-8 bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center">
          <p className="text-white/80 font-light mb-8 tracking-widest uppercase text-sm">
            Immersive Sightseeing Journey
          </p>

          <button
            onClick={handleStart}
            className="group relative px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 rounded-full transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-0 bg-[#00FF66]/20 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative flex items-center space-x-3 text-lg font-medium tracking-wide">
              <span>Start Experience</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex overflow-hidden font-sans text-gray-50 animate-[fadeIn_1.5s_ease-in-out]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <nav className="relative z-10 w-72 h-full bg-black/30 backdrop-blur-2xl border-r border-white/10 flex flex-col justify-between p-8">
        <div>
          <h1 className="text-3xl font-light tracking-tight mb-16">
            TRIP<span className="font-serif italic text-[#00FF66]">Vista</span>
          </h1>
          <ul className="space-y-6">
            {['Dashboard', 'Routes', 'Navigation', 'Cabin Control'].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveNav(item)}
                    className={`text-lg transition-all duration-300 ${
                      activeNav === item
                        ? 'text-white font-medium'
                        : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex items-center space-x-3 text-white/60 text-sm">
          <div className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]"></div>
          <span>System Online • V1.0</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 p-12 flex flex-col justify-between">
        <header className="flex justify-between items-end mb-8">
          <div>
            <p className="text-white/60 uppercase tracking-[0.2em] text-sm mb-2">
              Current Route
            </p>
            <h2 className="text-6xl font-light tracking-tight leading-tight">
              Forest{' '}
              <span className="font-serif italic text-white/80">
                Exploration
              </span>
            </h2>
            <p className="max-w-md mt-4 text-white/70 font-light leading-relaxed">
              A structured approach to experiencing the complex ecosystem—from
              canopy to ground level operation.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center space-x-2">
              <span className="text-sm font-medium">14:30 PM</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center space-x-2">
              <span className="text-[#00FF66]">●</span>
              <span className="text-sm font-medium">24°C</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/15 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF66]/20 blur-[50px] rounded-full"></div>
            <div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium tracking-wide border border-white/10">
                Next Stop
              </span>
              <h3 className="mt-6 text-3xl font-light">Moss Garden</h3>
              <p className="text-white/50 text-sm mt-2">Arriving in 5 mins</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div className="text-6xl font-thin tracking-tighter">
                1.2<span className="text-2xl text-white/50 ml-1">km</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between relative">
            <div>
              <p className="text-white/50 text-sm mb-1">[ FEATURED ]</p>
              <h3 className="text-2xl font-light">
                High-confidence <br />
                <span className="font-serif italic text-white/70">
                  recognition
                </span>
              </h3>
            </div>
            <div className="h-32 w-full mt-4 flex justify-center items-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/21/17/04/rock-1846430_1280.jpg"
                alt="Moss rock"
                className="h-full object-cover mix-blend-screen opacity-80 rounded-2xl grayscale"
              />
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs leading-relaxed">
                Observe diverse samples from global climates.
              </p>
            </div>
          </div>

          <div className="col-span-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between">
            <h3 className="text-2xl font-light">
              Cabin <span className="font-serif italic">Mode</span>
            </h3>
            <div className="space-y-4 mt-8">
              <button className="w-full flex items-center justify-between px-6 py-4 bg-white/20 border border-white/30 rounded-full">
                <span className="text-sm font-medium">Eco Viewing</span>
                <div className="w-4 h-4 rounded-full border-2 border-[#00FF66] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00FF66]"></div>
                </div>
              </button>
              <button className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/60">Comfort Mode</span>
                <div className="w-4 h-4 rounded-full border-2 border-white/30"></div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          30% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {!showDashboard ? (
        <IntroScreen onComplete={() => setShowDashboard(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}
