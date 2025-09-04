import Calculator from '../components/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => {
  return (
    <div className="calculator-page">
      <section className="calculator-hero">
        <div className="container">
          <h1>Calculadora Financeira</h1>
          <p>Faça seus cálculos para financiamento e prestações</p>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-content">
            <div className="calculator-info">
              <h2>Calcule suas operações</h2>
              <p>
                Use nossa calculadora para realizar cálculos básicos que podem 
                ajudar no planejamento do seu financiamento automotivo.
              </p>
              <div className="features">
                <div className="feature-item">
                  ➕ <span>Adição</span>
                </div>
                <div className="feature-item">
                  ➖ <span>Subtração</span>
                </div>
                <div className="feature-item">
                  ✖️ <span>Multiplicação</span>
                </div>
                <div className="feature-item">
                  ➗ <span>Divisão</span>
                </div>
              </div>
              <div className="tip-box">
                <h4>💡 Dica:</h4>
                <p>
                  Use a calculadora para calcular parcelas, juros e outros 
                  valores relacionados ao seu financiamento automotivo.
                </p>
              </div>
            </div>
            <div className="calculator-wrapper">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
