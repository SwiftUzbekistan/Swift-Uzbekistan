import React, { useState, useEffect } from 'react';
import SwiftLogo from './assets/Swift_logo_color.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    console.log('App component rendered with theme:', theme); // Debug log
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientMove 15s ease infinite',
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        lineHeight: '1.6',
        color: theme === 'dark' ? '#e0e0e0' : '#1e293b',
        fontSize: '17px',
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(248, 250, 252, 0.9)',
          borderBottom: `1px solid ${theme === 'dark' ? '#333333' : '#e2e8f0'}`,
          backdropFilter: 'blur(8px)',
          padding: '1.2rem 1.5rem',
        }}
        className="nav"
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={SwiftLogo}
              alt="Swift Logo"
              style={{ width: '2.75rem', height: '2.75rem' }}
              className="nav-logo"
            />
            <span
              style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                background: 'linear-gradient(to right, #ef4444, #f97316)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
              className="nav-title"
            >
              Swift Uzbekistan
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://t.me/swift_uzbekistan_community"
              style={{
                color: theme === 'dark' ? '#60a5fa' : '#0088cc',
                transition: 'transform 0.3s ease, color 0.3s ease',
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#93c5fd' : '#00b7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#60a5fa' : '#0088cc';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#93c5fd' : '#00b7ff';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#60a5fa' : '#0088cc';
              }}
              aria-label="Join our Telegram community"
              className="nav-icon"
            >
              <svg style={{ width: '26px', height: '26px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.663 7.572l-1.936 9.112c-.138.65-.514.815-.873.506l-2.944-2.165-1.423 1.374c-.157.152-.294.28-.6.28l.211-3.002 5.473-4.947c.24-.21-.052-.33-.362-.123l-6.762 4.258-2.912-.913c-.634-.2-.647-.732.133-.988l11.4-4.392c.524-.2.982.245.856.995z" />
              </svg>
            </a>
            <a
              href="https://github.com/swiftuzbekistan"
              style={{
                color: theme === 'dark' ? '#a5b4fc' : '#333',
                transition: 'transform 0.3s ease, color 0.3s ease',
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#c7d2fe' : '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#a5b4fc' : '#333';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#c7d2fe' : '#555';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#a5b4fc' : '#333';
              }}
              aria-label="Visit our GitHub repository"
              className="nav-icon"
            >
              <svg style={{ width: '26px', height: '26px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.908-.619.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.349-1.087.636-1.338-2.22-.251-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.854.004 1.714.114 2.515.336 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.641.699 1.03 1.592 1.03 2.683 0 3.841-2.337 4.69-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@swiftuzbekistan"
              style={{
                color: theme === 'dark' ? '#f87171' : '#ff0000',
                transition: 'transform 0.3s ease, color 0.3s ease',
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#fca5a5' : '#cc0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#f87171' : '#ff0000';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#fca5a5' : '#cc0000';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#f87171' : '#ff0000';
              }}
              aria-label="Subscribe to our YouTube channel"
              className="nav-icon"
            >
              <svg style={{ width: '26px', height: '26px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.977 2.977 0 0 0-2.094-2.104C19.773 3.5 12 3.5 12 3.5s-7.773 0-9.404.582A2.977 2.977 0 0 0 .502 6.186C0 7.818 0 10.5 0 10.5s0 2.682.502 4.314a2.977 2.977 0 0 0 2.094 2.104C4.227 17.5 12 17.5 12 17.5s7.773 0 9.404-.582a2.977 2.977 0 0 0 2.094-2.104C24 13.182 24 10.5 24 10.5s0-2.682-.502-4.314zM9.75 13.965V7.035L15.75 10.5l-6 3.465z" />
              </svg>
            </a>
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: theme === 'dark' ? '#2a2a2a' : '#e5e7eb',
                width: '44px',
                height: '26px',
                borderRadius: '13px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0 4px',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 10px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.boxShadow = `0 0 10px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}`;
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="theme-toggle"
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: theme === 'dark' ? '#c0c0c0' : '#f1c40f',
                  transform: theme === 'dark' ? 'translateX(18px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  style={{
                    width: '14px',
                    height: '14px',
                    fill: theme === 'dark' ? '#1e1e1e' : '#ffffff',
                  }}
                  viewBox="0 0 24 24"
                >
                  {theme === 'light' ? (
                    <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-7.757-13.757a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L4.243 5.657a1 1 0 0 1 0-1.414zm13.314 13.314a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414zM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm16 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-1.657-7.757a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm-13.314 13.314a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  ) : (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 2.07A8.002 8.002 0 0 1 20 12a8 8 0 0 1-11.93 7.07C6.17 17.83 5 15.48 5 13c0-2.48 1.17-4.83 3.07-6.07A8 8 0 0 1 11 4.07z" />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: '6.5rem 1.5rem',
          maxWidth: '80rem',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
        className="hero"
      >
        <img
          src={SwiftLogo}
          alt="Swift Logo"
          style={{
            width: '8.5rem',
            margin: '0 auto 1.75rem',
            animation: 'fadeIn 1s ease-out',
          }}
          className="hero-logo"
        />
        <h1
          style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            marginBottom: '1.75rem',
            background: 'linear-gradient(to right, #ef4444, #f97316)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'fadeIn 1s ease-out',
          }}
          className="hero-title"
        >
          Swift Uzbekistan Community
        </h1>
        <p
          style={{
            fontSize: '1.375rem',
            marginBottom: '2.75rem',
            color: theme === 'dark' ? '#b0b0b0' : '#4b5563',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            animation: 'fadeIn 1s ease-out 0.2s forwards',
            opacity: 0,
          }}
          className="hero-text"
        >
          Swift dasturlash tilini o'rganish va rivojlantirish uchun ochiq jamiyat
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            animation: 'fadeIn 1s ease-out 0.4s forwards',
            opacity: 0,
          }}
          className="hero-buttons"
        >
          <a
            href="https://learn-swift.uz"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 10px 15px rgba(37, 99 | 235, 0.3), 0 0 15px 5px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 6px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 10px 15px rgba(37, 99, 235, 0.3), 0 0 15px 5px rgba(37, 99, 235, 0.4)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 6px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0)';
            }}
            aria-label="Start learning Swift"
            className="hero-button"
          >
            <span style={{ fontSize: '1.25rem' }}>📘</span> O'rganishni boshlang
          </a>
          <a
            href="https://docs-swift.uz"
            style={{
              backgroundColor: '#16a34a',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(22, 163, 74, 0.2), 0 0 0 0 rgba(22, 163, 74, 0)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 10px 15px rgba(22, 163, 74, 0.3), 0 0 15px 5px rgba(22, 163, 74, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 6px rgba(22, 163, 74, 0.2), 0 0 0 0 rgba(22, 163, 74, 0)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 10px 15px rgba(22, 163, 74, 0.3), 0 0 15px 5px rgba(22, 163, 74, 0.4)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 6px rgba(22, 163, 74, 0.2), 0 0 0 0 rgba(22, 163, 74, 0)';
            }}
            aria-label="View Swift documentation and resources"
            className="hero-button"
          >
            <span style={{ fontSize: '1.25rem' }}>📚</span> Hujjatlar va manbalar
          </a>
        </div>
      </section>

      {/* Separator Between Hero and Why Join */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          animation: 'fadeIn 1s ease-out',
        }}
        className="separator"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '80px',
            fill: theme === 'dark' ? '#1e1e1e' : '#e0f7fa',
            opacity: 0.7,
            transform: 'translateY(1px)',
          }}
          className="separator-wave"
        >
          <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Why Join Section */}
      <section
        style={{
          padding: '4.5rem 1.5rem',
          maxWidth: '80rem',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: 'transparent',
          borderRadius: '1rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}
        className="why-join"
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2.25rem',
            color: theme === 'dark' ? '#e0e0e0' : '#1e293b',
          }}
          className="why-join-title"
        >
          Nega bizning jamiyatga qo'shilish kerak?
        </h2>
        <ul
          style={{
            fontSize: '1.25rem',
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            maxWidth: '56rem',
            margin: '0 auto',
          }}
          className="why-join-grid"
        >
          {[
            { emoji: '📚', text: 'Swift dasturlashni o\'rganing' },
            { emoji: '🤝', text: 'Dasturchilar bilan bog\'laning' },
            { emoji: '🔍', text: 'Resurslar va qo\'llanmalarga ega bo\'ling' },
            { emoji: '🔔', text: 'Swift yangiliklaridan xabardor bo\'ling' },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: theme === 'dark' ? '#2a2a2a' : 'white',
                padding: '1.5rem',
                borderRadius: '0.875rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease',
                animation: `fadeIn 0.5s ease-out ${0.5 + index * 0.1}s forwards`,
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
              }}
              className="why-join-card"
            >
              <div
                style={{
                  fontSize: '2.25rem',
                  marginBottom: '0.75rem',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
                className="why-join-emoji"
              >
                {item.emoji}
              </div>
              <div
                style={{ color: theme === 'dark' ? '#e0e0e0' : '#1e293b' }}
                className="why-join-text"
              >
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Separator Before Footer */}
      <hr
        style={{
          maxWidth: '80rem',
          margin: '2rem auto',
          border: 'none',
          height: '1px',
          backgroundColor: theme === 'dark' ? '#333333' : '#e2e8f0',
          opacity: 0.5,
          animation: 'fadeIn 1s ease-out',
        }}
        className="footer-separator"
      />

      {/* Footer */}
      <footer
        style={{
          padding: '1.5rem 1.5rem',
          backgroundColor: 'transparent',
          color: theme === 'dark' ? '#e0e0e0' : '#1e293b',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
        className="footer"
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
          className="footer-content"
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="footer-icons">
            <a
              href="https://t.me/swiftuzbekistan"
              style={{
                color: theme === 'dark' ? '#60a5fa' : '#0088cc',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#93c5fd' : '#00b7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#60a5fa' : '#0088cc';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#93c5fd' : '#00b7ff';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#60a5fa' : '#0088cc';
              }}
              aria-label="Join our Telegram community"
              className="footer-icon"
            >
              <svg style={{ width: '1.75rem', height: '1.75rem', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.663 7.572l-1.936 9.112c-.138.65-.514.815-.873.506l-2.944-2.165-1.423 1.374c-.157.152-.294.28-.6.28l.211-3.002 5.473-4.947c.24-.21-.052-.33-.362-.123l-6.762 4.258-2.912-.913c-.634-.2-.647-.732.133-.988l11.4-4.392c.524-.2.982.245.856.995z" />
              </svg>
            </a>
            <a
              href="https://github.com/swiftuzbekistan"
              style={{
                color: theme === 'dark' ? '#a5b4fc' : '#333',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#c7d2fe' : '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#a5b4fc' : '#333';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#c7d2fe' : '#555';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#a5b4fc' : '#333';
              }}
              aria-label="Visit our GitHub repository"
              className="footer-icon"
            >
              <svg style={{ width: '1.75rem', height: '1.75rem', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.908-.619.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.349-1.087.636-1.338-2.22-.251-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.854.004 1.714.114 2.515.336 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.641.699 1.03 1.592 1.03 2.683 0 3.841-2.337 4.69-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@swiftuzbekistan"
              style={{
                color: theme === 'dark' ? '#f87171' : '#ff0000',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#fca5a5' : '#cc0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#f87171' : '#ff0000';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.color = theme === 'dark' ? '#fca5a5' : '#cc0000';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme === 'dark' ? '#f87171' : '#ff0000';
              }}
              aria-label="Subscribe to our YouTube channel"
              className="footer-icon"
            >
              <svg style={{ width: '1.75rem', height: '1.75rem', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.977 2.977 0 0 0-2.094-2.104C19.773 3.5 12 3.5 12 3.5s-7.773 0-9.404.582A2.977 2.977 0 0 0 .502 6.186C0 7.818 0 10.5 0 10.5s0 2.682.502 4.314a2.977 2.977 0 0 0 2.094 2.104C4.227 17.5 12 17.5 12 17.5s7.773 0 9.404-.582a2.977 2.977 0 0 0 2.094-2.104C24 13.182 24 10.5 24 10.5s0-2.682-.502-4.314zM9.75 13.965V7.035L15.75 10.5l-6 3.465z" />
              </svg>
            </a>
          </div>
          <div
            style={{
              width: '1px',
              height: '1.5rem',
              backgroundColor: theme === 'dark' ? '#b0b0b0' : '#64748b',
              opacity: 0.5,
            }}
            className="footer-divider"
          />
          <div
            style={{
              fontSize: '0.875rem',
              color: theme === 'dark' ? '#b0b0b0' : '#64748b',
              lineHeight: '1.4',
            }}
            className="footer-disclaimer"
          >
            Swift va Swift logotipi Apple Inc. kompaniyasining savdo belgilari hisoblanadi.
            Ushbu sayt mustaqil hamjamiyat tomonidan yaratilgan.
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (min-width: 768px) {
          .why-join-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .nav {
            padding: 0.6rem 0.8rem !important;
            min-height: 48px !important;
          }
          .nav-logo {
            width: 2rem !important;
            height: 2rem !important;
          }
          .nav-title {
            font-size: 1rem !important;
          }
          .nav-icon {
            width: 20px !important;
            height: 20px !important;
          }
          .nav-icon svg {
            width: 20px !important;
            height: 20px !important;
          }
          .theme-toggle {
            width: 36px !important;
            height: 22px !important;
            border-radius: 11px !important;
            padding: 0 3px !important;
          }
          .theme-toggle > div {
            width: 16px !important;
            height: 16px !important;
            transform: ${theme === 'dark' ? 'translateX(14px) !important' : 'translateX(0) !important'};
          }
          .theme-toggle svg {
            width: 12px !important;
            height: 12px !important;
          }
          .hero {
            padding: 1.5rem 0.75rem !important;
          }
          .hero-logo {
            width: 5.5rem !important;
          }
          .hero-title {
            font-size: 5vw !important;
            font-size: clamp(1.5rem, 5vw, 2rem) !important;
            line-height: 1.2 !important;
            max-width: 85% !important;
            margin: 0 auto 1rem !important;
            letter-spacing: 0.02em !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .hero-text {
            font-size: 0.875rem !important;
            max-width: 85% !important;
            margin-bottom: 1.25rem !important;
            line-height: 1.4 !important;
            letter-spacing: 0.02em !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .hero-button {
            padding: 0.625rem 1.25rem !important;
            font-size: 0.875rem !important;
            min-height: 44px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-button span {
            font-size: 1rem !important;
          }
          .separator-wave {
            height: 40px !important;
          }
          .why-join {
            padding: 1.5rem 0.75rem !important;
          }
          .why-join-title {
            font-size: 1.25rem !important;
            margin-bottom: 1.25rem !important;
          }
          .why-join-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
            gap: 0.75rem !important;
          }
          .why-join-card {
            padding: 0.75rem !important;
          }
          .why-join-emoji {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .why-join-text {
            font-size: 0.875rem !important;
          }
          .footer {
            padding: 0.75rem !important;
          }
          .footer-content {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .footer-icons {
            gap: 0.75rem !important;
          }
          .footer-icon svg {
            width: 1.25rem !important;
            height: 1.25rem !important;
          }
          .footer-divider {
            width: 40% !important;
            height: 1px !important;
            background-color: ${theme === 'dark' ? '#b0b0b0' : '#64748b'} !important;
          }
          .footer-disclaimer {
            font-size: 0.625rem !important;
            max-width: 85% !important;
          }
          .footer-separator {
            margin: 0.75rem auto !important;
          }
        }
        @media (max-width: 400px) {
          .hero-title {
            font-size: 4.5vw !important;
            font-size: clamp(1.25rem, 4.5vw, 1.75rem) !important;
          }
          .hero-text {
            font-size: 0.75rem !important;
          }
          .hero-button {
            padding: 0.5rem 1rem !important;
            font-size: 0.75rem !important;
          }
          .why-join-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;