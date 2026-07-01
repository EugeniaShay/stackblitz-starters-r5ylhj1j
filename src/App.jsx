import React, { useState } from 'react';

// ==========================================
// 1. 开场动画：带视频底图的沉浸式车窗
// ==========================================
const IntroScreen = ({ onComplete }) => {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    setIsZooming(true);
    setTimeout(() => { onComplete(); }, 1500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans text-white flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out origin-center ${
          isZooming ? 'scale-[4.0] blur-md' : 'scale-100'
        }`}
      >
        <source src="https://raw.githubusercontent.com/EugeniaShay/trip-vista-assets/main/intro-bg.mp4" type="video/mp4" />
      </video>

      <div className={`absolute inset-0 bg-black transition-opacity duration-[1500ms] ease-in-out ${isZooming ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`relative z-10 flex flex-col items-center transition-opacity duration-700 ${isZooming ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-8xl font-light tracking-tight mb-6 drop-shadow-2xl">
          TRIP<span className="font-serif italic text-[#00FF66]">Vista</span>
        </h1>
        <button onClick={handleStart} className="group relative px-10 py-4 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full overflow-hidden">
          <div className="absolute inset-0 w-0 bg-[#00FF66]/20 transition-all duration-500 group-hover:w-full"></div>
          <span className="text-lg font-medium tracking-wide">Start Experience</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 2. 主界面：车载 HMI 系统
// ==========================================
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="h-screen w-full bg-cover bg-center flex font-sans text-gray-50 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')]">
      <div className="absolute inset-0 bg-black/30"></div>

      <nav className="relative z-10 w-72 h-full bg-black/30 backdrop-blur-2xl border-r border-white/10 p-8 flex flex-col justify-between">
        <h1 className="text-3xl font-light">TRIP<span className="font-serif italic text-[#00FF66]">Vista</span></h1>
        <ul className="space-y-6">
          {['Dashboard', 'Routes', 'Navigation', 'Cabin Control'].map(item => (
            <button key={item} onClick={() => setActiveNav(item)} className={`block text-lg ${activeNav === item ? 'text-white' : 'text-white/50'}`}>
              {item}
            </button>
          ))}
        </ul>
        <div className="text-sm text-white/60">System Online • V1.0</div>
      </nav>

      <main className="relative z-10 flex-1 p-12">
        <header className="mb-12">
          <h2 className="text-6xl font-light">Forest <span className="font-serif italic text-white/80">Exploration</span></h2>
        </header>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8">
            <span className="text-xs tracking-wide">Next Stop</span>
            <h3 className="text-3xl mt-4">Moss Garden</h3>
            <div className="text-6xl font-thin mt-8">1.2<span className="text-2xl ml-1">km</span></div>
          </div>
          
          <div className="col-span-1 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-light">High-confidence <br/><span className="font-serif italic text-white/70">recognition</span></h3>
            <div className="h-32 mt-4 flex items-center justify-center">
              <img src="https://cdn.pixabay.com/photo/2016/11/21/17/04/rock-1846430_1280.jpg" className="h-full grayscale opacity-80" alt="moss" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 3. 根组件
// ==========================================
export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  return !showDashboard ? <IntroScreen onComplete={() => setShowDashboard(true)} /> : <Dashboard />;
}
