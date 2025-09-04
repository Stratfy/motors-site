import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre a Motors</h1>
          <p>Conheça nossa história e compromisso com a excelência</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nossa História</h2>
              <p>
                Fundada em 2010, a Motors nasceu com o objetivo de revolucionar 
                o mercado automobilístico brasileiro, oferecendo veículos de 
                alta qualidade com o melhor atendimento do país.
              </p>
              <p>
                Ao longo dos anos, nos estabelecemos como uma das principais 
                concessionárias do país, sempre priorizando a satisfação dos 
                nossos clientes e a transparência em todos os nossos negócios.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Carros Vendidos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Missão</h3>
              <p>
                Oferecer veículos de qualidade superior com atendimento 
                excepcional, criando experiências únicas para nossos clientes.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como a melhor concessionária do Brasil, 
                referência em qualidade e inovação no mercado automotivo.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💎</div>
              <h3>Valores</h3>
              <p>
                Transparência, qualidade, inovação e compromisso com a 
                satisfação total dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>João Silva</h4>
              <p>Diretor Geral</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Maria Santos</h4>
              <p>Gerente de Vendas</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h4>Pedro Costa</h4>
              <p>Chefe de Oficina</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
