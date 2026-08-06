"use client";

import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const skillsList = [
    { ar: 'تصميم الواجهات (UI Design)', en: 'UI Design' },
    { ar: 'تجربة المستخدم (UX Design)', en: 'UX Design' },
    { ar: 'التخطيط والنماذج (Wireframing & Prototyping)', en: 'Wireframing & Prototyping' },
    { ar: 'التصميم المتجاوب (Responsive Web Design)', en: 'Responsive Web Design' },
    { ar: 'حل المشكلات (Problem Solving)', en: 'Problem Solving' },
    { ar: 'الاهتمام بالتفاصيل (Attention to Detail)', en: 'Attention to Detail' },
  ];

  return (
    <div 
      className={`portfolio-container ${isDarkMode ? 'dark' : 'light'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="glow-wrapper">
        <div className="glow-circle" />
      </div>

      <header className="site-header">
        <nav className="main-nav">
          <a href="#about" className="nav-link">
            {lang === 'ar' ? 'عني' : 'About'}
          </a>
          <a href="#projects" className="nav-link">
            {lang === 'ar' ? 'مشاريعي' : 'Projects'}
          </a>
          <a href="#contact" className="nav-link">
            {lang === 'ar' ? 'تواصل معي' : 'Contact'}
          </a>
        </nav>

        <div className="header-actions">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="btn-toggle"
          >
            {lang === 'ar' ? '🌐 EN' : '🌐 عربي'}
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
            className="btn-toggle btn-icon"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="hero-section">
        <div className="badge-available">
          <span className="pulse-dot"></span>
          {lang === 'ar' ? 'متاحة للمشاريع الرقمية والفرص الجديدة' : 'Available for new digital projects & opportunities'}
        </div>
        
        <h1 className="main-title">
          {lang === 'ar' ? (
            <>أهلاً أنا <span className="highlight-text en-font">WASAN</span></>
          ) : (
            <>Hi I'm <span className="highlight-text en-font">WASAN</span></>
          )}
        </h1>
        
        <p className="hero-description">
          {lang === 'ar' 
            ? 'مصممة مواقع أحوّل الأفكار المعقدة إلى تجارب رقمية سلسة، ممتعة، وبأعلى معايير التصميم.'
            : 'UI/UX & Web Designer transforming complex ideas into seamless, engaging digital experiences.'}
        </p>

        <div className="cta-group">
          <a href="#projects" className="btn-primary">
            {lang === 'ar' ? 'تصفح أعمالي' : 'View Projects'}
          </a>
          <a href="#about" className="btn-secondary">
            {lang === 'ar' ? 'تعرف عليّ أكثر' : 'More About Me'}
          </a>
        </div>
      </main>

      <section id="about" className="section-padding section-bordered">
        <div className="projects-container">
          <h2 className="section-title">
            {lang === 'ar' ? 'عني' : 'About Me'}
          </h2>
          <p className="section-text">
            {lang === 'ar' 
              ? 'طالبة تقنية معلومات بشغف كبير في مجال تصميم تجربة وواجهة المستخدم (UI/UX) للمواقع. أجمع بين الفهم التقني والحس الفني لابتكار حلول رقمية تركّز على المستخدم أولاً، مع الاهتمام بأدق التفاصيل.'
              : 'IT student with a strong passion for UI/UX design for web applications. Combining technical understanding with design aesthetics to build user-centric digital solutions with great attention to detail.'}
          </p>

          <div className="tech-section">
            <h3 className="subtitle">
              {lang === 'ar' ? 'المهارات والخبرات' : 'Skills & Expertise'}
            </h3>
            <div className="tech-grid">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="tech-chip">
                  {lang === 'ar' ? skill.ar : skill.en}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding projects-container">
        <h2 className="section-title">
          {lang === 'ar' ? 'مشاريعي المميزة' : 'Featured Projects'}
        </h2>
        <div className="projects-grid">
          <div className="project-card">
            <div>
              <div className="card-header">
                <h3 className="card-title en-font">Shatat</h3>
                <span className="badge-medal badge-gold">🥇</span>
              </div>
              <p className="card-desc">
                {lang === 'ar' 
                  ? 'تطبيق ويب ذكي تم تصميم واجهاته لتقليل الحمل المعرفي وتنظيم المهام بأسلوب سلس وتفاعلي يعتمد على أحدث تقنيات الذكاء الاصطناعي.'
                  : 'An AI-driven web application UI designed to reduce cognitive load and streamline task management interactively.'}
              </p>
            </div>
            <div className="card-tags">
              <span>#هاكثون_الذكاء_الاصطناعي</span>
              <span className="en-font">#AI</span>
              <span className="en-font">#UI_UX</span>
            </div>
          </div>

          <div className="project-card">
            <div>
              <div className="card-header">
                <h3 className="card-title en-font">Najah</h3>
                <span className="badge-medal badge-silver">🥈</span>
              </div>
              <p className="card-desc">
                {lang === 'ar' 
                  ? 'موقع إسعافات أولية يهدف لإنقاذ الأرواح من خلال توفير معلومات طبية دقيقة وسريعة. نستهدف جميع أفراد المجتمع لتمكينهم من التصرف الصحيح في حالات الطوارئ قبل وصول الإسعاف.'
                  : 'A first-aid platform aimed at saving lives by delivering accurate medical information quickly for emergency responses.'}
              </p>
            </div>
            <div className="card-tags">
              <span>#معسكر</span>
              <span>#إسعافات_أولية</span>
              <span className="en-font">#UI_UX</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding section-bordered">
        <div className="projects-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
          </h2>
          <p className="card-desc" style={{ marginBottom: '2rem' }}>
            {lang === 'ar' ? 'يسعدني دائماً التواصل حول الفرص والمشاريع المبتكرة!' : 'Feel free to reach out for project inquiries or opportunities!'}
          </p>

          <div className="social-links">
            <a href="https://github.com/Wasana999" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <svg className="icon-svg" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>

            <a href="https://wa.me/966560045253" target="_blank" rel="noreferrer" className="social-icon" title="WhatsApp">
              <svg className="icon-svg" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.237a9.96 9.96 0 0 0 4.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985A9.98 9.98 0 0 0 12.012 2zm.004 16.5c-1.528 0-3.024-.412-4.327-1.19l-.31-.186-3.21.758.769-3.13-.205-.327A8.28 8.28 0 0 1 3.71 11.98c0-4.577 3.725-8.302 8.306-8.302 2.217 0 4.301.865 5.867 2.434a8.24 8.24 0 0 1 2.43 5.871c0 4.578-3.725 8.302-8.297 8.302zm4.551-6.223c-.25-.125-1.478-.728-1.707-.811-.229-.083-.396-.125-.562.125-.166.25-.645.811-.79 1-.146.187-.292.208-.542.083a6.83 6.83 0 0 1-2.01-1.24 7.53 7.53 0 0 1-1.39-1.733c-.146-.25-.015-.385.11-.51.112-.112.25-.291.375-.437.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.77-1.854-.203-.487-.41-.421-.562-.429-.145-.008-.312-.008-.479-.008s-.437.063-.666.312c-.229.25-.875.854-.875 2.083 0 1.229.896 2.416 1.021 2.583.125.166 1.762 2.69 4.268 3.771.596.257 1.062.41 1.425.525.599.19 1.144.163 1.575.099.481-.071 1.478-.604 1.687-1.187.208-.583.208-1.083.146-1.187-.062-.104-.229-.166-.479-.291z"/></svg>
            </a>

            <a href="mailto:wasanalbalawi99@gmail.com" className="social-icon" title="Email">
              <svg className="icon-svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>

            <a href="https://www.linkedin.com/in/wasan-a-3731453ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <svg className="icon-svg" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z"/></svg>
            </a>

            <a href="https://x.com/wasan6f?s=11" target="_blank" rel="noreferrer" className="social-icon" title="X / Twitter">
              <svg className="icon-svg" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} {lang === 'ar' ? 'صُنع بحب' : ' Made with love'}
      </footer>
    </div>
  );
}