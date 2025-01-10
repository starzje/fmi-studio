import Cta from "@/components/cta";
import React from "react";

const CookiesPage: React.FC = () => {
  return (
    <div className="mt-28 max-w-6xl mx-auto px-6 sm:px-6 mb-24">
      <div className="mb-5">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-gray-800 text-center font-bold">
          Uvjeti korištenja i pravila privatnosti
        </h1>
      </div>
      <div className="space-y-8 flex justify-center">
        <div className="max-w-4xl text-left text-gray-600">
          <h4 className="font-bold">Dragi korisniče,</h4>
          <p className="text-sm py-5">
            Vaša privatnost nam je važna, stoga ovim uvjetima uređujemo način prikupljanja, čuvanja i korištenja osobnih
            podataka koje kao korisnik naše web stranice dobrovoljno ustupate pristupom na našu web stranicu.
          </p>
          <h4 className="font-bold">Zaštita privatnosti</h4>
          <p className="text-sm py-5">
            Osobni podaci koji se obrađuju su podaci primljeni od Korisnika. To uključuje osobne podatke kao što su ime
            i prezime korisnika, e-pošta, poštanska adresa, telefonski broj i broj mobitela koji se neće distribuirati
            niti prodavati trećoj strani, osim uz dozvolu korisnika. F.M.I. d.o.o. zakonito, pošteno i transparentno
            obrađuje Vaše osobne podatke, jedino i isključivo u svrhu s kojom su prikupljeni, a uvjeti se odnose na
            osobne podatke prikupljene iz mrežnih izvora koji sadrže poveznicu na našu web stranicu. Prikupljanje
            osobnih podataka iz bilo kojih drugih izvora je isključeno. Čuvamo vaše osobne podatke, za što ste nam dali
            suglasnost/privolu, kako bismo vam omogućili najbolju uslugu, kupnju i informiranost. Vaše osobne podatke
            koristit ćemo u svrhu promocije, promidžbe te analitike. Obaviještavamo Vas da će te u slučaju provale u naš
            sustav i krađe osobnih podataka biti obaviješteni u roku od 72 sata. Obaviještavamo Vas da imate pravo na
            uvid u Vaše osobne podatke koje smo prikupili, obradili te koje čuvamo.
          </p>
          <h4 className="font-bold">Prava korisnika</h4>
          <p className="text-sm py-5">
            Korisnik može zatražiti sljedeća prava: 1) pravo na pristup i ispravljanje njegovih osobnih podataka; 2)
            pravo zaustaviti obradu njegovih osobnih podataka u marketinške svrhe; 3) pravo prigovora na obradu osobnih
            podataka kada se osobni podaci obrađuju u svrhu postizanja legitimnih interesa F.M.I.d.o.o. ili trećih
            strana; 4) pravo na brisanje osobnih podataka u slučaju da više nisu potrebni osobni podaci, korisnik
            povlači suglasnost za aktivnosti koje su osnova za obradu podataka, a nema druge pravne osnove za njihovu
            obradu ili ako su osobni podaci obrađuje se bez pravne osnove. U slučaju bilo kakvih pitanja i nedoumica u
            vezi zaštite privatnosti i osobnih podataka pišite nam na email adresu: info.studio.fmi@gmail.com
          </p>
          <h4 className="font-bold">Kolačići (Cookies)</h4>
          <p className="text-sm py-5">
            Kolačić je informacija koja se pohranjuje na računalo ili mobilni uređaj pri posjetu određenom web mjestu
            ili prilikom otvaranja određene elektroničke pošte. Kolačići obično spremaju Vaše postavke, postavke za web
            stranicu, kao što su preferirani jezik ili adresa. Ovo omogućava stranici da prikaže informacije prilagođene
            Vašim potrebama. U Vašim internet preglednicima možete brisati kolačiće i upravljati općim postavkama
            spremanja kolačića, međutim, treba voditi računa da ako zabranite kolačiće, onda je moguće da neki dijelovi
            web stranice ne mogu normalno funkcionirati ili im se ne može pristupiti.
          </p>
          <h4 className="font-bold">Što su privremeni kolačići?</h4>
          <p className="text-sm py-5">
            Privremeni kolačići ili kolačići sesije uklanjaju se s računala po zatvaranju internet preglednika. Pomoću
            njih web-mjesta pohranjuju privremene podatke, poput stavki u košarici za kupnju. Što su stalni kolačići?
            Stalni ili spremljeni kolačići ostaju na računalu nakon zatvaranja programa internet preglednika. Pomoću
            njih web-mjesta pohranjuju podatke, kao što su ime za prijavu i lozinka, tako da se ne morate prijavljivati
            prilikom svakog posjeta određenom mjestu. Više informacija o tome što su kolačići i kako ih odbiti, možete
            saznati i na stranici: https://www.allaboutcookies.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
