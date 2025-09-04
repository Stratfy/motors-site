import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚗 Motors</h3>
            <p>Sua concessionária de confiança</p>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>📞 (11) 9999-9999</p>
            <p>📧 contato@motors.com</p>
          </div>
          <div className="footer-section">
            <h4>Endereço</h4>
            <p>📍 Rua dos Carros, 123</p>
            <p>São Paulo - SP</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Motors. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
