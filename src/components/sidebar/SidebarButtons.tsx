'use client';

import { useState } from 'react';
import { FaEnvelope, FaSearch, FaGlobe, FaTimes } from 'react-icons/fa';

const SidebarButtons = () => {
  const [activePanel, setActivePanel] = useState<'email' | 'search' | 'language' | null>(null);

  const togglePanel = (panel: typeof activePanel) => {
    setActivePanel(prev => (prev === panel ? null : panel));
  };

  return (
    <>
      {/* Sidebar Buttons */}
      <div className="fixed right-4 top-1/3 flex flex-col gap-3 z-50">
        <SidebarIcon onClick={() => togglePanel('email')} active={activePanel === 'email'}>
          <FaEnvelope />
        </SidebarIcon>
        <SidebarIcon onClick={() => togglePanel('search')} active={activePanel === 'search'}>
          <FaSearch />
        </SidebarIcon>
        <SidebarIcon onClick={() => togglePanel('language')} active={activePanel === 'language'}>
          <FaGlobe />
        </SidebarIcon>
      </div>

      {/* Panels */}
      {activePanel && (
        <div className="fixed right-20 top-1/3 bg-white rounded shadow-lg p-4 w-72 z-50 transition-all animate-slide-in">
          <button className="text-red-500 float-right" onClick={() => setActivePanel(null)}>
            <FaTimes />
          </button>

          {activePanel === 'email' && (
            <div>
              <h4 className="font-bold mb-2">Kontakt</h4>
              <p>Sende uns eine Nachricht:</p>
              <a href="mailto:info@example.com" className="text-blue-600 underline">info@example.com</a>
            </div>
          )}

          {activePanel === 'search' && (
            <div>
              <h4 className="font-bold mb-2">Suche</h4>
              <input
                type="text"
                placeholder="Suchbegriff..."
                className="w-full border px-3 py-2 rounded mb-2"
              />
              <button className="bg-[#0d2c45] text-white px-4 py-2 rounded w-full">Suchen</button>
            </div>
          )}

          {activePanel === 'language' && (
            <div>
              <h4 className="font-bold mb-2">Sprache wählen</h4>
              <ul className="space-y-1">
                <li><button className="hover:text-blue-600">Deutsch 🇩🇪</button></li>
                <li><button className="hover:text-blue-600">العربية 🇸🇾</button></li>
                <li><button className="hover:text-blue-600">English 🇬🇧</button></li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const SidebarIcon = ({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) => (
  <button
    onClick={onClick}
    className={`text-white w-8 h-8 flex items-center justify-center rounded-md transition-all ${
      active ? 'bg-[#0d2c45] shadow-md' : 'bg-[#0d2c45] hover:shadow'
    }`}
  >
    {children}
  </button>
);

export default SidebarButtons;
