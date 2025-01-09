export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12 ">
          {/* Section header */}
          <div className="pb-12 md:pb-12">
            <h2 className="h2 font-cabinet-grotesk">Naše iskustvo</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <p className="text-gray-500">
                  Naša misija je jednostavna – spojiti kreativnost, stručnost i tehnologiju kako bismo vaše ideje
                  pretvorili u vizualna rješenja koja inspiriraju i ostavljaju dojam.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <p className="text-gray-500">
                  Kroz godine smo radili s raznovrsnim klijentima – od malih poduzeća, OPG-ova do velikih korporacija i
                  gradskih i županijskih uprava – uvijek prilagođavajući naš pristup njihovim jedinstvenim potrebama.
                  Svaki projekt vidimo kao priliku da zajedno s vama stvorimo nešto posebno, bilo da je riječ o dizajnu,
                  promotivnim materijalima, ambalaži ili visokokvalitetnom tisku.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <p className="text-gray-500">
                  Naš tim čine iskusni dizajneri i stručnjaci za tisak koji razumiju važnost detalja i rokova. Ponosimo
                  se našom kreativnošću i sposobnošću da svaku ideju pretočimo u konkretan, upečatljiv rezultat.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <p className="text-gray-500">
                  S FMI studijem, dobivate više od usluge – dobivate partnera koji je posvećen vašem uspjehu.
                  Vizualizirajte svoju ideju. Mi ćemo se pobrinuti za ostalo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
