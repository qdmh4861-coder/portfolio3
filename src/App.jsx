import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '시맨틱하고 접근성 높은 웹 구조를 작성합니다.', level: 90 },
  { name: 'CSS', description: '반응형 레이아웃과 재사용 가능한 스타일을 구현합니다.', level: 85 },
  { name: 'JavaScript', description: '동적인 사용자 경험과 웹 기능을 개발합니다.', level: 85 },
  { name: 'React', description: '컴포넌트 기반의 확장 가능한 UI를 구축합니다.', level: 80 },
  { name: 'Vite', description: '빠르고 효율적인 프론트엔드 개발 환경을 구성합니다.', level: 80 },
  { name: 'Figma', description: '사용자 흐름을 고려한 UI를 설계하고 협업합니다.', level: 75 },
  { name: 'Git', description: '버전 관리와 브랜치를 활용해 작업 이력을 관리합니다.', level: 80 },
  { name: 'GitHub', description: '코드를 공유하고 프로젝트 협업 과정을 관리합니다.', level: 80 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: 'React와 Vite로 제작한 반응형 개인 포트폴리오 웹사이트입니다.',
    skills: ['React', 'Vite', 'CSS'],
    image: '/project-portfolio.svg',
    demo: null,
    github: null,
  },
  {
    title: 'Shopping Web App',
    description: '상품 탐색부터 장바구니까지 사용자 흐름을 구현한 쇼핑 웹 앱입니다.',
    skills: ['React', 'JavaScript', 'CSS'],
    image: '/project-shopping.svg',
    demo: null,
    github: null,
  },
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 상세 내용을 확인할 수 있는 웹 앱입니다.',
    skills: ['React', 'API', 'Vite'],
    image: '/project-movie.svg',
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

const contactInfo = {
  email: 'jiae@example.com',
  github: 'https://github.com/',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const toggleMenu = () => {
    setIsMenuOpen((previousMenuState) => !previousMenuState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header className="header" id="header">
        <div className="container">
          <a
            className="header__logo"
            href="#hero"
            aria-label="홈으로 이동"
            onClick={closeMenu}
          >
            JIAE PORTFOLIO
          </a>
          <button
            className={`header__menu-button${isMenuOpen ? ' header__menu-button--open' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav
            className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
            id="primary-navigation"
            aria-label="주요 메뉴"
          >
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero" id="hero">
          <div className="container hero__content">
            <div className="hero__text">
              <p className="hero__greeting">안녕하세요.</p>
              <h1 className="section__title section__title--hero">
                사용자 경험을 생각하며 구현하는
                <strong>Frontend Developer 김지애입니다.</strong>
              </h1>
              <p className="hero__description">
                React와 JavaScript를 활용하여
                <br />
                사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  프로젝트 보기
                </a>
                <a className="button button--secondary" href="#contact">
                  연락하기
                </a>
              </div>
            </div>

            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src="/profile-placeholder.svg"
                alt="김지애 프로필 이미지 자리"
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about__content">
            <div className="about__intro">
              <p className="section__label">About</p>
              <h2 className="section__title">ABOUT ME</h2>
              <p className="about__description">
                새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는
                프론트엔드 개발자입니다. UI/UX 디자인부터 React 기반 웹 개발까지
                사용자 관점에서 고민하며 작업합니다.
              </p>
            </div>

            <dl className="card about__card">
              <div className="about__info-item">
                <dt>Name</dt>
                <dd>김지애</dd>
              </div>
              <div className="about__info-item">
                <dt>Position</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className="about__info-item">
                <dt>Focus</dt>
                <dd>React / UI·UX / AI</dd>
              </div>
              <div className="about__info-item">
                <dt>Location</dt>
                <dd>Seoul, Korea</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <p className="section__label">Skills</p>
            <h2 className="section__title">SKILLS</h2>
            <ul className="skills__grid">
              {skills.map((skill) => (
                <li className="card skill-card" key={skill.name}>
                  <div className="skill-card__header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <p className="skill-card__description">{skill.description}</p>
                  <progress
                    className="skill-card__progress"
                    value={skill.level}
                    max="100"
                    aria-label={`${skill.name} 숙련도 ${skill.level}%`}
                  >
                    {skill.level}%
                  </progress>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="section__label">Projects</p>
            <h2 className="section__title">PROJECTS</h2>
            <div className="projects__grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.title}>
                  <div className="project-card__image-wrap">
                    <img
                      className="project-card__image"
                      src={project.image}
                      alt={`${project.title} 프로젝트 미리보기`}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-card__content">
                    <h3>{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <ul className="project-card__technologies" aria-label="사용 기술">
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <div className="project-card__actions">
                      {project.demo ? (
                        <a
                          className="button button--primary"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          프로젝트 보기
                        </a>
                      ) : (
                        <span className="button button--disabled" aria-disabled="true">
                          프로젝트 준비 중
                        </span>
                      )}
                      {project.github ? (
                        <a
                          className="button button--secondary"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="button button--disabled" aria-disabled="true">
                          GitHub 준비 중
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <p className="section__label">Experience</p>
            <h2 className="section__title">EXPERIENCE</h2>
            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={experience.year}>
                  <div className="timeline__marker" aria-hidden="true" />
                  <article className="card timeline__content">
                    <time className="timeline__year" dateTime={experience.year}>
                      {experience.year}
                    </time>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact__content">
            <div className="contact__intro">
              <p className="section__label">Contact</p>
              <h2 className="section__title">LET&apos;S WORK TOGETHER</h2>
              <p className="contact__description">
                프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
              </p>

              <address className="contact__links">
                <div className="contact__link-item">
                  <span>Email</span>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="contact__link-item">
                  <span>GitHub</span>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com
                  </a>
                </div>
              </address>
            </div>

            <form
              className="card contact-form"
              aria-label="연락 메시지 작성"
              onSubmit={handleFormSubmit}
            >
              <div className="contact-form__field">
                <label htmlFor="contact-name">이름</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="이름을 입력해주세요"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">이메일</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="이메일을 입력해주세요"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message">메시지</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="메시지를 입력해주세요"
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              <button className="contact-form__button" type="submit">
                메시지 보내기
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="container footer__content">
          <p>© 2026 JIAE Portfolio. All Rights Reserved.</p>
          <nav className="footer__links" aria-label="소셜 및 연락처 링크">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
