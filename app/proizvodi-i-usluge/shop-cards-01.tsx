import Image from "next/image";
import AppImage01 from "@/public/images/0.png";
import AppImage02 from "@/public/images/1.png";
import AppImage03 from "@/public/images/2.png";
import AppImage04 from "@/public/images/3.png";
import AppImage05 from "@/public/images/4.png";
import AppImage06 from "@/public/images/5.png";
import Link from "next/link";

export default function ShopCards01() {
  return (
    <>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage01} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Kemijske olovke + tisak</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Kemijske olovke s tiskom po želji. Na kemijske se može tiskati logotip, tekst ili neki drugi vizual.
                Tisak može biti jednobojni ili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Različite vrste kemijskih</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage02} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Upaljači + tisak</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Upaljači s tiskom po želji. Na upaljače se može tiskati logotip, tekst ili neki drugi vizual. Tisak može
                biti jednobojniili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Različite vrste upaljača</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage03} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Rokovnici + tisak</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Rokovnici s tiskom po želji. Na rokovnike se može tiskati logotip, tekst ili neki drugi vizual. Tisak
                može biti jednobojni ili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Različite vrste rokovnika</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage04} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Majice s tiskom</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Majice s tiskom po želji. Na majice se može tiskati logotip, tekst ili neki drugi vizual. Tisak može
                biti jednobojni ili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Vrsta tiska ovisi o količini</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage05} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Šalice</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Šalice s tiskom po želji. Na šalice se može tiskati logotip, tekst ili neki drugi vizual. Tisak može
                biti jednobojni ili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Tisak termo-sublimacija</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Različite vrste šalica</div>
                </li>
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <Image className="w-full" src={AppImage06} width={286} height={160} alt="Application 01" />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-gray-800  font-semibold">Izrada kalendara</h3>
              </header>
              <p className="text-sm text-gray-600 mb-5">
                Kalendari s tiskom po želji. Na kalendare se može tiskati logotip, tekst ili nek idrugi vizual. Tisak
                može biti jednobojni ili s više boja.
              </p>
              {/* Features list */}
              <ul className="text-sm space-y-2 mb-5 ">
                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 11.674A1 1 0 0 1 7.739 10H8a1 1 0 0 1 1 1v1.699L14.034 8 9 3.302v1.699a1 1 0 0 1-1 1H2V8.27a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2h5V2.153C7 .84 8.563.16 9.523 1.055l6.268 5.849a1.5 1.5 0 0 1 0 2.193l-6.267 5.849C8.565 15.84 7 15.16 7 13.849v-2.175Zm-1.278.878a.498.498 0 0 1 0 .896L4.2 14.2l-.752 1.521a.5.5 0 0 1-.896 0l-.752-1.52-1.521-.753a.498.498 0 0 1 0-.896l1.521-.752.752-1.52c.167-.342.728-.342.896 0L4.2 11.8l1.521.752ZM3.75 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                  <div>Klendari sa slikom u zaglavlju</div>
                </li>

                <li className="flex items-center">
                  <svg className="fill-current text-gray-400  shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M7 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h6Zm8-5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h14ZM5 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h4Z" />
                  </svg>
                  <div>Priprema uključena u cijenu</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <Link
                className="btn-sm rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                href="/kontakt">
                Pošalji Upit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
