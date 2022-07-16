function Home() {
  return (
    <div className="flex lg:flex-row flex-col w-full bg-white items-center bg-greyBg">
      <div className="flex flex-col justify-start w-1/2 lg:pl-32 lg:pr-16 pl-8 pr-8 mb-8">
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
            className="object-cover w-185 max-h-128"
            src="images/manCooking.png"
            alt="Man cooking"
          />
        </picture>
      </div>
    </div>
  );
}

export default Home;
