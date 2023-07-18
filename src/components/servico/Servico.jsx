import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";

import "../servico/servico.css";

export default function Service() {
  const data = [
    {
      icon: Service1,
      title: "Obtenha os melhores preços",
    },
    {
      icon: Service2,
      title: "Pagamento Flexível",
    },
    {
      icon: Service3,
      title: "Encontre os melhores destinos",
    },
  ];

  return (
    <div className="container-fluid container_background">
      <section id="services" data-aos="fade-down" data-aos-duration="3000">
        <div className="row justify-content-center align-items-center">
          {data.map((service, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="service">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <img src={service.icon} alt="" data-aos="fade-down" data-aos-duration="3000" />
                  </div>
                  <h3 className="service_title" data-aos="fade-down" data-aos-duration="3000">{service.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
