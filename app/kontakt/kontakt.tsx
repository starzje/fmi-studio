"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

// Yup schema
const schema = yup.object().shape({
  email: yup.string().required("Email je obavezno polje").email("Upišite ispravan email"),
  ime: yup.string().required("Ime je obavezno polje"),
  pitanje: yup.string().required("Vaša poruka je obavezno polje"),
  mobitel: yup
    .string()
    .nullable()
    .matches(/^(?:\+?[0-9]+)?$/, "Mobitel mora biti broj s opcionalnim '+' na početku "),
  termsAccepted: yup.boolean().oneOf([true], "Morate prihvatiti uvjete korištenja i pravila privatnosti"),
});

export default function ContactPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      ime: "",
      pitanje: "",
      mobitel: "",
      termsAccepted: true,
    },
  });

  const onSubmit = (data: any) => {
    const serviceId = "service_p7hmjnx";
    const templateId = "template_wulqkud";
    const userId = "yWXXewF2xwBtvdQ7S";

    const templateParams = {
      user_name: data.ime,
      user_email: data.email,
      user_phone: data.mobitel,
      user_question: data.pitanje,
    };

    const sendEmail = new Promise((resolve, reject) => {
      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          resolve(response);
        },
        (error) => {
          console.log("FAILED...", error);
          reject(error);
        }
      );
    });

    toast.promise(sendEmail, {
      loading: "Slanje upita..",
      success: "Upit uspješno poslan! Javit ćemo Vam se u najkraćem mogućem roku.",
      error: "Došlo je do pogreške pri slanju upita.",
    });

    sendEmail.then(() =>
      reset({
        email: "",
        ime: "",
        pitanje: "",
        mobitel: "",
        termsAccepted: true,
      })
    );
  };

  return (
    <>
      <div className="mt-28 max-w-6xl mx-auto px-6 sm:px-6 mb-24">
        <div className="mb-5">
          {/* Title */}
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-2xl md:text-3xl text-gray-800 text-center font-bold">
            Želite više informacija o našim proizvodima i uslugama?
          </h1>
        </div>
        <div data-aos="fade-right" data-aos-delay="200" className="space-y-8 flex justify-center">
          <div className="max-w-4xl text-center text-gray-600">
            <p className="text-lg py-3 pb-5">
              Pošaljite nam upit sa detaljnim opisom proizvoda i usluga koje Vas zanimaju, a mi ćemo Vam se javiti
              povratno sa više informacija.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-8 ">
          <form data-aos="fade-right" data-aos-delay="300" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email <span className="text-rose-500">*</span>
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="marko-markic@gmail.com"
                      className="form-input py-2 w-full placeholder-gray-400"
                      type="email"
                    />
                  )}
                />
                <>
                  {errors.email ? (
                    <span className="text-red-500 text-sm">{String(errors.email.message)} </span>
                  ) : undefined}
                </>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Ime <span className="text-rose-500">*</span>
                </label>
                <Controller
                  name="ime"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Marko"
                      className="form-input py-2 w-full placeholder-gray-400"
                      type="text"
                    />
                  )}
                />
                <>
                  {errors.ime ? <span className="text-red-500 text-sm">{String(errors.ime.message)} </span> : undefined}
                </>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="pcode">
                  Broj mobitela
                </label>
                <Controller
                  name="mobitel"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <input
                      placeholder="+385 99 123 4567"
                      className="form-input py-2 w-full placeholder-gray-400"
                      type="tel"
                      ref={ref}
                      value={value || ""}
                      onChange={(e) => {
                        // Allow only numbers and optional '+' at the start
                        const filteredValue = e.target.value.replace(/[^0-9+]|(?!^)\+/g, "");
                        onChange(filteredValue);
                      }}
                    />
                  )}
                />
                <>
                  {errors.mobitel ? (
                    <span className="text-red-500 text-sm">{String(errors.mobitel.message)} </span>
                  ) : undefined}
                </>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="pitanje">
                  Vaša poruka <span className="text-rose-500">*</span>
                </label>
                <Controller
                  name="pitanje"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Ovdje napišite detalje o uslugama ili proizvodima koje vas zanimaju kako bi vam mogli dati što točniju ponudu."
                      className="form-textarea py-2 w-full placeholder-gray-400"
                      rows={4}
                    />
                  )}
                />
                <>
                  {errors.pitanje ? (
                    <span className="text-red-500 text-sm">{String(errors.pitanje.message)} </span>
                  ) : undefined}
                </>
              </div>
            </div>
            <div className="mt-6">
              <button className="btn-sm rounded-lg w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                Pošalji upit{" "}
                <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </button>
            </div>
            <div className="mt-5">
              <label className="flex items-start">
                <Controller
                  name="termsAccepted"
                  control={control}
                  defaultValue={true}
                  render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <input
                      type="checkbox"
                      className="form-checkbox mt-0.5"
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value}
                      name={name}
                      ref={ref}
                    />
                  )}
                />
                <span className="text-sm text-slate-500 ml-3">
                  Ispunjavanjem ove forme slažete se sa našim{" "}
                  <Link className="text-blue-600 hover:underline" href="/uvjeti-koristenja">
                    Uvjetima korištenja
                  </Link>{" "}
                  i{" "}
                  <Link className="text-blue-600 hover:underline" href="/uvjeti-koristenja">
                    Pravilima privatnosti
                  </Link>
                  .
                </span>
              </label>
              <>
                {errors.termsAccepted ? (
                  <span className="text-red-500 text-sm">{String(errors.termsAccepted.message)} </span>
                ) : undefined}
              </>
            </div>
          </form>
          <div data-aos="fade" data-aos-delay="350" className="block md:hidden relative h-2">
            <div className="absolute inset-0">
              <div className="h-0.5 mx-auto w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
          </div>
          <div data-aos="fade" data-aos-delay="350" className="hidden md:block relative w-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="400" className="text-gray-600">
            <h4 className="font-bold pt-4">F.M.I. d.o.o.</h4>

            <h4 className="font-bold pt-4">Adresa:</h4>
            <p className="text-sm">
              Ante Starčevića 20, 53000 Gospić (poslovnica) <br /> Kralja Tomislava 41, 53000 Gospić (sjedište)
            </p>
            <h4 className="font-bold pt-4">E-mail:</h4>
            <p className="text-sm">narudzba.fmi@gmail.com</p>
            <h4 className="font-bold pt-4">Telefon:</h4>
            <p className="text-sm">053 575 386</p>
            <h4 className="font-bold pt-4">Radno vrijeme poslovnice:</h4>
            <p className="text-sm">Ponedjeljak - Petak od 08:00 do 16:00h</p>
            <p className="text-xs italic">- vikendima i praznicima poslovnica ne radi</p>
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </>
  );
}
