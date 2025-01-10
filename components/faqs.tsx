export default function Faqs() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Česta pitanja</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Kako mogu doznati cijene proizvoda i usluga?</h4>
                <p className="text-gray-500">
                  Naše cijene formiramo individualno te ovise o zahtjevima i količinama. Slobodno pošaljite neobavezan
                  upit i saznajte cijene za usluge i proizvode koje Vas zanimaju.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Kako ćete dostaviti proizvode?</h4>
                <p className="text-gray-500">
                  Proizvode možete preuzeti u našoj poslovnici u Gospiću ili ih šaljemo kurirskom službom na željenu
                  aresu u Hrvastoj.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">
                  Što sve trebam napisati u upitu da bi dobio/la ponudu?
                </h4>
                <p className="text-gray-500">
                  U upitu nam pokušajte dostaviti što više informacija o uslugama i/ili proizvodima koje Vas zanimaju.
                  Napište imate li spremne vizuale za tisak, koje količine vas zanimaju, koji okvirni rok isporuke bi
                  bio prihvatljiv i slično.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">
                  Kako mogu saznati koje sve vrste proizvoda imate?
                </h4>
                <p className="text-gray-500">
                  Pošaljite nam upit sa detaljima o proizvodu koji Vas zanima. Ostavite svoj kontakt (mail i/ili
                  mobitel) i mi ćemo Vam se povratno javiti sa opisom i detaljima proizvoda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
