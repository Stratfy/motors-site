import './Cars.css';

const Cars = () => {
  const handleContact = (carName) => {
    alert(`Entrando em contato sobre o ${carName}!\nTelefone: (11) 9999-9999\nEmail: vendas@motors.com`);
  };

  const handleTestDrive = (carName) => {
    alert(`Test drive agendado para o ${carName}!\nNosso vendedor entrará em contato em breve.`);
  };

  const cars = [
    {
      id: 1,
      name: 'BMW X5',
      price: 'R$ 450.000',
      year: '2024',
      image: '🚙',
      description: 'SUV de luxo com tecnologia avançada',
      features: ['Motor 3.0 turbo', 'Tração integral', 'Interior em couro', 'Sistema multimídia']
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class',
      price: 'R$ 320.000',
      year: '2024',
      image: '🚗',
      description: 'Sedan executivo com design elegante',
      features: ['Motor 2.0 turbo', 'Transmissão automática', 'Sistema de navegação', 'Ar condicionado digital']
    },
    {
      id: 3,
      name: 'Audi A4',
      price: 'R$ 280.000',
      year: '2023',
      image: '🚘',
      description: 'Sedan esportivo com performance excepcional',
      features: ['Motor 2.0 TFSI', 'Quattro AWD', 'Bancos esportivos', 'Virtual Cockpit']
    },
    {
      id: 4,
      name: 'BMW 320i',
      price: 'R$ 250.000',
      year: '2024',
      image: '🚙',
      description: 'Sedan compacto com tecnologia BMW',
      features: ['Motor 2.0 turbo', 'Start/Stop', 'Conectividade BMW', 'Freios ABS']
    },
    {
      id: 5,
      name: 'Mercedes-Benz GLA',
      price: 'R$ 380.000',
      year: '2023',
      image: '🚗',
      description: 'SUV compacto urbano',
      features: ['Motor 1.3 turbo', 'Teto panorâmico', 'Assistente de estacionamento', 'Câmera 360°']
    },
    {
      id: 6,
      name: 'Audi Q3',
      price: 'R$ 350.000',
      year: '2024',
      image: '🚘',
      description: 'SUV premium com design arrojado',
      features: ['Motor 1.4 TFSI', 'S tronic', 'Virtual Cockpit Plus', 'Matrix LED']
    }
  ];

  return (
    <div className="cars">
      <section className="cars-hero">
        <div className="container">
          <h1>Nossos Carros</h1>
          <p>Descubra nossa seleção premium de veículos</p>
        </div>
      </section>

      <section className="cars-catalog">
        <div className="container">
          <div className="cars-grid">
            {cars.map(car => (
              <div key={car.id} className="car-detail-card">
                <div className="car-image-large">{car.image}</div>
                <div className="car-detail-info">
                  <h3>{car.name}</h3>
                  <p className="car-year">{car.year}</p>
                  <p className="car-description">{car.description}</p>
                  <p className="car-price">{car.price}</p>
                  
                  <div className="car-features">
                    <h4>Características:</h4>
                    <ul>
                      {car.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="car-actions">
                    <button 
                      className="btn-contact" 
                      onClick={() => handleContact(car.name)}
                    >
                      Entrar em Contato
                    </button>
                    <button 
                      className="btn-test-drive"
                      onClick={() => handleTestDrive(car.name)}
                    >
                      Agendar Test Drive
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cars;
