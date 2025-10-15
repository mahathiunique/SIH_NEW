import React, { useState } from 'react';
import { Layers, Plus, Search, CheckCircle, Loader2, GitMerge, FileText, Package, TrendingUp, Info, AlertCircle, Sparkles, Waypoints, Globe, Mic, Headphones, Book, Zap, Lightbulb, UploadCloud, Rocket, PlayCircle, Star, Handshake, Trello, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data, updated to be more descriptive and comprehensive
const mockProjects = [
  { id: 1, name: 'Welding Safety Protocols', status: 'in-progress', progress: 75, languages: 'EN → HI, MR', type: 'Video', eta: '2 hrs' },
  { id: 2, name: 'Intro to Plumbing', status: 'completed', languages: 'EN → TA, TE', type: 'SCORM', eta: 'Done' },
  { id: 3, name: 'Healthcare Assistant', status: 'review-needed', languages: 'EN → ML, KN', type: 'Audio', eta: 'Pending' },
  { id: 4, name: 'Retail POS Systems', status: 'failed', languages: 'EN → BN, PA', type: 'Document', eta: 'Error' },
  { id: 5, name: 'Vehicle Maintenance Guide', status: 'completed', languages: 'EN → HI, PA, GU', type: 'Document', eta: 'Done' },
];

const mockActivityLog = [
  { id: 1, message: 'AI translation started for Welding Safety Protocols.', time: '12:01 PM' },
  { id: 2, message: 'Ingestion of Intro to Plumbing complete.', time: '11:58 AM' },
  { id: 3, message: 'System flagged "Sterilization" term for review.', time: '11:55 AM' },
  { id: 4, message: 'TTS voices generated for Retail POS.', time: '11:45 AM' },
  { id: 5, message: 'Content parsing initiated for Electrical Safety module.', time: '11:30 AM' },
];

const LandingPage = ({ onEnterSih }) => {
  const [activeTech, setActiveTech] = useState(null);
  const [activeInnovation, setActiveInnovation] = useState(null);

  const handleTechClick = (techName) => {
    setActiveTech(techName);
    setActiveInnovation(null);
  };

  const handleInnovationClick = (innovationName) => {
    setActiveInnovation(innovationName);
    setActiveTech(null);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle size={16} className="mr-1 text-green-400" />;
      case 'in-progress': return <Loader2 size={16} className="mr-1 animate-spin text-yellow-400" />;
      case 'review-needed': return <Info size={16} className="mr-1 text-blue-400" />;
      case 'failed': return <AlertCircle size={16} className="mr-1 text-red-400" />;
      default: return null;
    }
  };

  const PipelineStep = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center w-36">
      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-indigo-500/20 text-indigo-400 mb-2">
        <Icon size={48} />
      </div>
      <span className="text-sm font-semibold text-white">{title}</span>
      <p className="text-xs text-slate-400 mt-1">{description}</p>
    </div>
  );

  const FeatureCard = ({ title, description, technologies, onClick, isActive }) => (
    <motion.div
      className={`p-4 rounded-xl border cursor-pointer transition-colors duration-200 ${isActive ? 'border-fuchsia-400' : 'border-slate-700 hover:border-fuchsia-400'}`}
      style={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-2">
        <h3 className="font-bold text-white text-sm">{title}</h3>
      </div>
      <p className="text-xs text-slate-400">{description}</p>
      <p className="text-xs font-semibold text-fuchsia-300 mt-2">{technologies}</p>
    </motion.div>
  );

  const DashboardCard = ({ title, children, className = '' }) => (
    <div className={`bg-slate-900 rounded-2xl p-6 shadow-xl flex flex-col ${className}`}>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-950 text-white font-sans w-screen h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <Layers size={36} className="text-fuchsia-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
            Localization Control Center
          </h1>
        </div>
        <div className="text-sm font-light text-slate-400 hidden md:block">
          <p>System Status: <span className="text-green-400">Online</span></p>
          <p>Active Projects: <span className="font-semibold">{mockProjects.length}</span></p>
        </div>
        <button
          onClick={onEnterSih}
          className="px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-fuchsia-500 text-white hover:bg-fuchsia-600"
        >
          Enter Dashboard &rsaquo;
        </button>
      </header>

      {/* Main Control Center Layout */}
      <div className="flex flex-1 overflow-hidden p-4 space-x-4">
        {/* Left Panel: Project Status & Core Technologies */}
        <div className="w-1/4 flex flex-col space-y-4 overflow-hidden">
          <DashboardCard title="Projects" className="flex-1">
            <div className="space-y-4">
              {mockProjects.map(project => (
                <motion.div
                  key={project.id}
                  className="p-4 rounded-xl shadow-lg border border-slate-700 hover:border-fuchsia-400 transition-colors cursor-pointer"
                  style={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-white">{project.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{project.languages}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center ${project.status === 'completed' ? 'bg-green-500/20 text-green-400' : project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : project.status === 'review-needed' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}`}>
                      {getStatusIcon(project.status)} {project.eta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardCard>
          <DashboardCard title="Core Technology" className="h-1/3">
            <div className="space-y-4">
              <FeatureCard
                title="Multilingual Translation"
                description="Translates content into all 22 Indian languages for mass accessibility."
                technologies="Powered by IndicTrans2."
                onClick={() => handleTechClick('translation')}
                isActive={activeTech === 'translation'}
              />
              <FeatureCard
                title="Hands-Free Learning"
                description="Generates accurate captions and voice-overs for low-literacy and differently-abled learners."
                technologies="Powered by IndicConformer & IndicTTS."
                onClick={() => handleTechClick('asr-tts')}
                isActive={activeTech === 'asr-tts'}
              />
              <FeatureCard
                title="Vocational Accuracy"
                description="Maintains consistency of industry and skill-specific terms across all languages."
                technologies="Powered by Domain Termbanks."
                onClick={() => handleTechClick('termbank')}
                isActive={activeTech === 'termbank'}
              />
            </div>
          </DashboardCard>
        </div>

        {/* Center Panel: Live Localization Pipeline & Upload */}
        <div className="flex-1 bg-slate-900 rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Start a New Localization Project</h2>
            <p className="text-slate-400">A seamless, automated workflow from source to learner.</p>
          </div>
          
          {/* Main Display/Interaction Area */}
          <div className="w-full flex-1 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              {activeTech === 'translation' && (
                <motion.div key="translation-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Live Translation Demo</h3>
                  <p className="text-sm text-slate-400 mb-4">Original Text (EN): "The hydraulic pump generates pressure to operate the system."</p>
                  <div className="w-2/3 p-4 rounded-xl border border-fuchsia-400 text-left bg-slate-900/80">
                    <p className="text-white">Hindi (HI): "हाइड्रोलिक पंप सिस्टम को संचालित करने के लिए दबाव उत्पन्न करता है।"</p>
                  </div>
                </motion.div>
              )}
              {activeTech === 'asr-tts' && (
                <motion.div key="asr-tts-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Live ASR/TTS Demo</h3>
                  <div className="w-2/3 p-4 rounded-xl border border-fuchsia-400 text-center bg-slate-900/80">
                    <p className="text-white">"The instructor said, 'Now let's check the torque, which is the घुमाव'."</p>
                    <p className="text-sm text-fuchsia-300 mt-2">[Transcript: "The instructor said, 'Now let's check the torque, which is the <span className="text-white font-semibold">घुमाव</span>'."]</p>
                  </div>
                </motion.div>
              )}
              {activeTech === 'termbank' && (
                <motion.div key="termbank-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Live Termbank Demo</h3>
                  <div className="w-2/3 p-4 rounded-xl border border-fuchsia-400 text-left bg-slate-900/80">
                    <h4 className="text-white font-semibold">Term: Torque</h4>
                    <p className="text-sm text-slate-400">Hindi: टॉर्क</p>
                    <p className="text-sm text-slate-400">Tamil: முறுக்கு விசை</p>
                  </div>
                </motion.div>
              )}
              {activeInnovation === 'bilingual' && (
                <motion.div key="bilingual-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Bilingual Toggles Demo</h3>
                  <div className="w-2/3 p-4 rounded-xl border border-fuchsia-400 text-left bg-slate-900/80">
                    <p className="text-white">English: Check the power steering pump for any leaks.</p>
                    <p className="text-sm text-slate-400 mt-2">Hindi: पावर स्टीयरिंग पंप को किसी भी रिसाव के लिए जांचें।</p>
                    <button className="mt-4 px-4 py-2 rounded-full bg-indigo-500 text-white text-sm">Toggle Language</button>
                  </div>
                </motion.div>
              )}
              {activeInnovation === 'glossary' && (
                <motion.div key="glossary-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Tap-to-Glossary Demo</h3>
                  <p className="text-sm text-slate-400 mb-4">Select a vocational term from the text below.</p>
                  <div className="w-2/3 p-4 rounded-xl border border-fuchsia-400 text-left bg-slate-900/80 relative">
                    <p className="text-white">The mechanic uses a <span className="font-bold text-fuchsia-300 cursor-pointer hover:underline" onClick={() => alert("Torque: A twisting force that tends to cause rotation. In Hindi, it's called 'टॉर्क'.")}>torque</span> wrench to tighten the bolt to its correct specification.</p>
                  </div>
                </motion.div>
              )}
              {activeInnovation === 'safety' && (
                <motion.div key="safety-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Safety Guard Demo</h3>
                  <p className="text-sm text-slate-400 mb-4">Original Text: "Wear your PPE."</p>
                  <div className="w-2/3 p-4 rounded-xl border border-red-400 text-left bg-slate-900/80">
                    <p className="text-white">Final Translation (Hindi): "अपना PPE पहनें।" <span className="text-red-400 font-semibold">(Guarded term 'PPE' is not translated).</span></p>
                  </div>
                </motion.div>
              )}
              {activeInnovation === 'heatmaps' && (
                <motion.div key="heatmaps-demo" className="w-full h-full p-8 rounded-3xl bg-slate-800/60 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Learnability Heatmap Demo</h3>
                  <div className="w-2/3 p-4 rounded-xl border border-sky-400 text-left bg-slate-900/80">
                    <p className="text-white mb-2">Topic: Welding Joints</p>
                    <p className="text-sm text-slate-400">Hindi Learner struggle: 85% <span className="text-red-400">(High)</span></p>
                    <p className="text-sm text-slate-400">Tamil Learner struggle: 70% <span className="text-yellow-400">(Medium)</span></p>
                    <p className="text-xs text-sky-400 mt-2">Insight: Rewrites needed for welding term definitions in Hindi module.</p>
                  </div>
                </motion.div>
              )}
              {!activeTech && !activeInnovation && (
                <motion.div key="main-upload" className="w-full h-full flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <motion.div
                    className="w-2/3 p-10 border-2 border-dashed rounded-3xl text-center cursor-pointer transition-colors duration-300 hover:border-indigo-400"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <UploadCloud size={64} className="text-indigo-400 mx-auto mb-4" />
                    <p className="font-semibold text-lg text-white">Click to upload or drag and drop your file.</p>
                    <p className="text-sm text-slate-400 mt-1">Supports: PDF, PPT, DOCX, MP4, MP3, SCORM, and more.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex items-center space-x-10 mt-10">
              <PipelineStep icon={UploadCloud} title="Ingestion" description="Parses content & detects format." />
              <span className="w-12 h-1 bg-fuchsia-400 animate-pulse-short origin-left"></span>
              <PipelineStep icon={Trello} title="Processing" description="AI translation, adaptation & asset gen." />
              <span className="w-12 h-1 bg-fuchsia-400 animate-pulse-short origin-left animation-delay-500"></span>
              <PipelineStep icon={Package} title="Delivery" description="Packages SCORM/xAPI bundles." />
            </div>
          </div>
        </div>

        {/* Right Panel: Innovations & Recent Activity */}
        <div className="w-1/4 flex flex-col space-y-4 overflow-hidden">
          <DashboardCard title="Innovations" className="flex-1">
            <div className="space-y-4">
              <FeatureCard
                title="Bilingual Toggles"
                description="Live toggle between regional and English/Hindi for tough concepts."
                technologies="Utilizes sentence-level alignment from MT pipeline."
                onClick={() => handleInnovationClick('bilingual')}
                isActive={activeInnovation === 'bilingual'}
              />
              <FeatureCard
                title="Tap-to-Glossary"
                description="One-tap definitions and pronunciations for vocational terms inside any content."
                technologies="Integrates with the Glossary Service and TTS."
                onClick={() => handleInnovationClick('glossary')}
                isActive={activeInnovation === 'glossary'}
              />
              <FeatureCard
                title="Safety Guard"
                description="Ensures critical instructions are never distorted by translation."
                technologies="Uses constrained decoding and post-edit validators."
                onClick={() => handleInnovationClick('safety')}
                isActive={activeInnovation === 'safety'}
              />
              <FeatureCard
                title="Learnability Heatmaps"
                description="Analytics pinpoint where learners struggle most to guide content improvements."
                technologies="Powered by xAPI and LMS analytics."
                onClick={() => handleInnovationClick('heatmaps')}
                isActive={activeInnovation === 'heatmaps'}
              />
            </div>
          </DashboardCard>
          <DashboardCard title="Recent Activity" className="h-1/3">
            <div className="space-y-4">
              {mockActivityLog.map(log => (
                <motion.div
                  key={log.id}
                  className="p-3 rounded-xl border border-slate-700"
                  style={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: log.id * 0.15 }}
                >
                  <p className="text-xs text-slate-300">{log.message}</p>
                  <span className="block mt-1 text-xs text-slate-500">{log.time}</span>
                </motion.div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;