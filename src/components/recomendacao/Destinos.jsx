import Destination1 from "../../assets/destinos/salvador.jpg";
import Destination2 from "../../assets/destinos/sao-paulo.jpg";
import Destination3 from "../../assets/destinos/rio.jpg";
import Destination4 from "../../assets/destinos/disney.jpg";
import Destination5 from "../../assets/destinos/paris.jpg";
import Destination6 from "../../assets/destinos/londres.jpg";

import "../recomendacao/destinos.css";

export default function Destinations() {
  const data = [
    {
      image: Destination1,
      title: "Salvador",
      description: "Salvador é um dos maiores polos culturais do Brasil, especialmente por causa da sua população afro-brasileira, e possui uma energia diferente do resto do país."
      
    },
    {
      image: Destination2,
      title: "São Paulo",
      description: "São Paulo é uma das maiores cidades do mundo, e é constantemente repleta de cultura, vida noturna e diversidades incomparáveis."
      
    },
    {
      image: Destination3,
      title: "Rio de Janeiro",
      description: "Rio de Janeiro talvez seja a cidade mais famosa do Brasil."
      
    },
    {
      image: Destination4,
      title: "Disney",
      description:"A Disney é um destino mágico e encantador, onde os sonhos se tornam realidade. Com seus parques temáticos, personagens icônicos e experiências inesquecíveis."
      
    },
    {
      image: Destination5,
      title: "Paris",
      description: "Visite Paris para conhecer a “Cidade Luz”, local de paisagens românticas, arquitetura deslumbrante, rica história cultural e culinária excepcional. Não perca tempo e reserve agora mesmo suas passagens para Paris."
    },
    {
      image: Destination6,
      title: "Londres",
      description: "Viaje para Londres e conheça uma das cidades mais visitadas do mundo. Londres é o lar de vários monumentos famosos, museus gratuitos, palácios requintados e atrações exclusivas."
      
    },
  ];

  return (
    <>
      <div className="destination_container">
        <section id="destinos">
          <div className="title">
            <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Recomendações</h2>
          </div>
          <div className="destinations" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            {data.map((destination, index) => (
              <div className="destination" key={index}>
                <img src={destination.image} alt={destination.title} />
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}


