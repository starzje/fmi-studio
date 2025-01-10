import Cta from "@/components/cta";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="mt-28 max-w-6xl mx-auto px-6 sm:px-6 mb-24">
      <div className="mb-5">
        {/* Title */}
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-2xl md:text-3xl text-gray-800 text-center font-bold">
          O nama
        </h1>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className="space-y-8 flex justify-center">
        <div className="max-w-4xl text-left text-gray-600">
          <p className="text-sm py-3">
            Dobrodošli na službenu web stranicu F.M.I. d.o.o., vašeg pouzdanog partnera za grafički dizajn i tisak!
          </p>
          <p className="text-sm py-3">
            Osnovani 2007. godine, specijalizirali smo se za pružanje vrhunskih usluga u području grafičke djelatnosti,
            printa i vizualne komunikacije.
          </p>
          <p className="text-sm py-3">
            Kroz više od desetljeća predanog rada, naš studio bilježi stalan rast i razvoj. Ulažemo u najnovije
            tehnologije i kontinuirano usavršavamo svoja znanja kako bismo svojim klijentima osigurali uslugu najviše
            kvalitete. Naša misija je pružiti kreativan, precizan i profesionalan pristup svakom projektu, bilo da se
            radi o tiskanju promotivnih materijala, dizajnu vizualnih identiteta ili kvalitetnoj fotografskoj obradi.
          </p>
          <div className="text-sm py-3">
            <p>Zašto odabrati F.M.I. studio?</p>
            <ul className="list-disc pl-5">
              <li>Vrhunska kvaliteta tiska: Koristimo suvremeniju opremu za izradu svih vrsta tiskarskih proizvoda.</li>
              <li>Kreativni dizajn: Naš tim dizajnera kreira rješenja prilagođena vašim potrebama i brendu.</li>
              <li>
                Prilagođena rješenja: Svakom klijentu pristupamo individualno, prilagođavajući naše usluge njihovim
                specifičnim zahtjevima.
              </li>
            </ul>
          </div>

          <p className="text-sm py-3">Iako nam je sjedište u Gospiću, moguća je dostava u sve krajeve Hrvatske.</p>
          <p className="text-sm py-3">
            Ako tražite pouzdanog partnera za sve vrste grafičkih i tiskarskih usluga, F.M.I. d.o.o. je pravo mjesto za
            vas.{" "}
          </p>
          <p className="text-sm py-3">
            Trebate više informacija o uslugama, materijalima i proizvodima koje nudimo ili niste u potpunosti sigurni
            koje materijale trebate koristiti? Kontaktirajte nas i dopustite nam da uz našu ekspertizu vaše ideje
            pretvorimo u stvarnost!
          </p>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default AboutUsPage;
