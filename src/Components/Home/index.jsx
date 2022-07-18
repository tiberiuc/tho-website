function Home() {
  const info = [
    {
      img: "images/castiga-timp.png",
      img2: "images/castiga-timp@2x.png",
      img3: "images/castiga-timp@3x.png",
      subtitle: "Gata cu hartia",
      description: "Totul este in aplicatie, gata cu teancurile de hartie.",
    },
    {
      img: "images/castiga-timp.png",
      img2: "images/castiga-timp@2x.png",
      img3: "images/castiga-timp@3x.png",
      subtitle: "Castiga timp",
      description:
        "Comenzile pe mobil sunt mai rapide. Utilizatorii noștri castiga peste 4 ore pe săptămână.",
    },
    {
      img: "images/castiga-timp.png",
      img2: "images/castiga-timp@2x.png",
      img3: "images/castiga-timp@3x.png",
      subtitle: "Risipeste mai putin, salveaza mai mult",
      description:
        "Comenzi mai precise înseamnă mai puține greșeli, mai puțina risipa și costuri mai mici.",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-white items-center bg-greyBg">
        <div className="flex flex-col justify-start w-full lg:pl-32 lg:pr-16 pl-10 pr-10 mb-7">
          <span className="text-4xl font-extrabold font-openSans max-w-sm mt-15">
            ALEGE SA MUNCESTI MAI EFICIENT
          </span>
          <span className="font-medium font-openSans mt-5">
            HORECA ORDERS face plasarea și primirea comenzilor mai eficientă.
            <br />
            Aplicația noastră intuitivă și instrumentele web simplifică
            operațiunile pentru bucătari, proprietari și reprezentanții de
            vânzări.
          </span>
          <span className="font-semibold font-openSans mt-5">
            Salveaza timp. Salveaza bani. Salveaza mancare.
          </span>
        </div>
        <div>
          <picture>
            <source
              media="(max-width: 799px)"
              srcset="images/manCooking@3x.png"
            />
            <source
              media="(min-width: 800px)"
              srcset="images/manCooking@2x.png"
            />
            <img
              className="object-cover max-h-128 w-screen"
              src="images/manCooking.png"
              alt="Man cooking"
            />
          </picture>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-20 justify-items-center lg:mt-14 lg:mb-13 mb-34 max-w-3.5xl">
          {info.map((item) => {
            return (
              <div className="flex flex-col items-center w-60 w-full mt-34">
                <picture>
                  <source media="(max-width: 799px)" srcset={item.img3} />
                  <source media="(min-width: 800px)" srcset={item.img2} />
                  <img
                    className="object-cover w-52 h-52"
                    src={item.img}
                    alt=""
                  />
                </picture>
                <span className="font-openSans font-bold text-2xl lg:mt-9 mt-12 text-center">
                  {item.subtitle}
                </span>
                <span className="font-openSans lg:font-semibold lg:text-base text-lg lg:mt-11 mt-7 text-center">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
