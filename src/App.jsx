import { useState } from 'react';
import './App.css';

function ProfileCard({ name, role, skills, photo, github, linkedin }) {
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(128);

  function toggleFollow() {
    setFollowing((previous) => {
      setFollowers((count) => count + (previous ? -1 : 1));
      return !previous;
    });
  }

  return (
    <article className="glass-card">
      <div className="card-top">
        <span className="status-dot"></span>
        <span>AVAILABLE TO CONNECT</span>
        <span className="card-number">01 / DEV</span>
      </div>

      <div className="profile-section">
        <div className="photo-frame">
          <img
            className="profile-photo"
            src={photo}
            alt={`${name}'s profile`}
          />
          <span className="online-indicator"></span>
        </div>

        <p className="small-label">HELLO, I'M</p>
        <h1>{name}</h1>
        <p className="role">{role}</p>

        <p className="bio">
          Building my skills, exploring technology,
          and turning ideas into reality.
        </p>

        <div className="stats">
          <div>
            <strong>{skills.length}</strong>
            <span>SKILLS</span>
          </div>
          <div>
            <strong>{followers}</strong>
            <span>FOLLOWERS</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>LEARNING</span>
          </div>
        </div>

        <button
          className={`follow-button ${following ? 'is-following' : ''}`}
          onClick={toggleFollow}
        >
          {following ? '✓ Following' : '+ Follow'}
        </button>

        <div className="social-links">
          <a href={github} target="_blank" rel="noreferrer">
            <span className="social-icon">GH</span>
            GitHub ↗
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <span className="social-icon">in</span>
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="skills-section">
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <span>MY TOOLKIT</span>
        </div>

        {skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div
              className="skill-track"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <footer className="card-footer">
        <span>DESIGNED WITH PURPOSE</span>
        <span>● KEEP GROWING</span>
      </footer>
    </article>
  );
}

function App() {
  const skills = [
    { name: 'Java', level: 75 },
    { name: 'Python', level: 65 },
    { name: 'React', level: 55 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Git & GitHub', level: 60 },
  ];

  return (
    <main className="page">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <header className="page-header">
        <span className="brand-mark">D.</span>
        <span>DEVELOPER PROFILE</span>
        <span className="header-line"></span>
        <span className="header-year">2026</span>
      </header>

      <div className="intro">
        <p>MY DIGITAL SPACE</p>
        <h2>Code. Create. <span>Grow.</span></h2>
        <p className="intro-subtitle">
          A little introduction, a lot of ambition.
        </p>
      </div>

      <ProfileCard
        name="Sunkari Sahasra"
        role="Aspiring Software Engineer"
        photo="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
        github="https://github.com/"
        linkedin="https://www.linkedin.com/"
        skills={skills}
      />

      <p className="page-footer">
        PERSONAL PROFILE <span>✦</span> BUILT WITH REACT
      </p>
    </main>
  );
}

export default App;