import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const featuredCars = [
    {
      id: 1,
      name: 'BMW X5',
      price: 'R$ 450.000',
      year: '2024',
      image: '🚙'
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class',
      price: 'R$ 320.000',
      year: '2024',
      image: '🚗'
    },
    {
      id: 3,
      name: 'Audi A4',
      price: 'R$ 280.000',
      year: '2023',
      image: '🚘'
    },
    {
      id: 4,
      name: 'Porsche Cayenne',
      price: 'R$ 520.000',
      year: '2024',
      image: '🏎'
    }
  ];

  const handleViewCars = () => {
    navigate('/cars');
  };

  const handleViewDetails = (carId) => {
    navigate('/cars');
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à Motors</h1>
          <p>Encontre o carro dos seus sonhos com as melhores condições</p>
          <button className="cta-button" onClick={handleViewCars}>Ver Carros</button>
        </div>
      </section>

      <section className="featured-cars">
        <div className="container">
          <h2>Carros em Destaque</h2>
          <div className="cars-grid">
            {featuredCars.map(car => (
              <div key={car.id} className="car-card">
                <div className="car-image">{car.image}</div>
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-year">{car.year}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="btn-details" onClick={() => handleViewDetails(car.id)}>Ver Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Financiamento</h3>
              <p>Oferecemos as melhores condições de financiamento do mercado</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Manutenção</h3>
              <p>Serviços de manutenção com garantia e peças originais</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Garantia</h3>
              <p>Todos os nossos veículos possuem garantia estendida</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
