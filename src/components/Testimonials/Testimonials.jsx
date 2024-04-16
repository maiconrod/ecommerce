import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TestimonialData = [
    {
      id: 1,
      name: "Victor Malafaia",
      text: "Uma loja incrível e um ótimo atendimento! Os produtos vestem perfeitamente e a qualidade não deixa nada a desejar quando comparada às melhores marcas importadas!",
      img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4029.jpg?w=732&h=412&crop=1",
    },
    {
      id: 2,
      name: "Katia Nunes",
      text: "Simplesmente amo essa loja! Costumo comprar apenas online. as descrições são perfeitas, o caimento e o tamanho das peças são exatamente como a descrição nos mostra.",
      img: "https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg",
    },
    {
      id: 3,
      name: "Carolina Almeida",
      text: "Virei cliente apenas pelas indicações que vi na página. Compro nessa loja há aproximadamente 1 ano e é a melhor escolha que já fiz! Tudo maravilhoso!",
      img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4032.jpg?w=732&h=412&crop=1",
    },
    {
      id: 4,
      name: "Vanessa Duarte",
      text: "Amo essa loja! O espaço físico é ainda mais lindo, com excelente atendimento em todos os setores, desde a venda até o pagamento. Simplesmente maravilhosa!",
      img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/IMG_4034.jpg?w=732&h=412&crop=1",
    },
    {
      id: 5,
      name: "Rogério Maia",
      text: "Compro roupas para meus filhos nessa loja há muitos anos e indico a todos! A qualidade se resume em todas as etapas da venda!",
      img: "https://tm.ibxk.com.br/2019/02/17/17124052466014.jpg",
    },
  ];

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-base text-primary">
            Veja o que nossos clientes acham
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold p-3">
            Depoimentos
          </h1>
          <p data-aos="fade-up" className="text-base text-gray-500">
            Veja o que nossos clientes acham dos nossos produtos e forma de trabalhar. Corra e não fique de fora. Seja mais um a usufruir dos nossos ótimos produtos.
          </p>
        </div>

        {/* Testrimonial Cards */}
        <div
        data-aos="zoom-in"
        >
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="my-6">
                  <div
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      "
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
