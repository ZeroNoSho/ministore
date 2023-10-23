"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <div className="flex relative inline-block">
        <div className="flex flex-row bg-[url('../public/Bg.png')] block w-full h-5/6">
          <div data-aos="fade-right">
            <img className="basis-1/4" src="/kaset1.png"></img>
          </div>
          <div>
            <img
              data-aos="fade-down"
              className="basis-2/4"
              src="/Foto.png"
            ></img>
          </div>
          <div>
            <img
              data-aos="fade-left"
              className="basis-1/4"
              src="/arm.png"
            ></img>
          </div>
        </div>
        <img
          data-aos="fade-right"
          src={"/Tentang-Sola-Market.png"}
          className="w-full absolute top-[82%]"
        ></img>
      </div>
      <div className="bg-pink-200">
        <div className="px-20 pt-20 max-[720px]:pt-10 max-[720px]:px-10">
          <p
            data-aos="fade-up"
            className="text-justify text-pink-500 text-lg max-[720px]:text-xs"
          >
            <b>
              <strong>SOLA Market</strong> adalah acara bazaar tematik terbesar
              di FIKOM Unpad. Memadukan sarana perbelanjaan dengan hiburan dan
              ruang kreativitas yang dikemas dalam bentuk permainan interaktif,
              penampilan musik, dan workshop untuk generasi muda. Keberadaan
              SOLA Market merupakan kontribusi nyata dari mahasiswa FIKOM dalam
              memajukan industri kreatif di Indonesia.
            </b>
          </p>

          <div data-aos="zoom-in-up" className="relative inline-block">
            <img
              src={"/rectangle.png"}
              className="w-3/4 m-auto block max-[720px]:w-full"
            ></img>
            <img
              src={"/Whats-New.png"}
              className="absolute  top-[5%] right-[40%] w-[50%]  max-[720px]:w-[60%]"
            ></img>
            <img
              src={"/hp.png"}
              className="absolute  top-[8%] right-[17%] w-[22%] max-[720px]:top-[2%] max-[720px]:right-[7%] max-[720px]:w-[32%] "
            ></img>
            <img
              src={"/main-event.png"}
              className="absolute  top-[40%] right-[35%] w-[16%] max-[720px]:right-[30%] max-[720px]:w-[19%]"
            ></img>
            <img
              src={"/sotr.png"}
              className="absolute  top-[41%] right-[55%] w-[17%] max-[720px]:right-[60%] max-[720px]:w-[20%]"
            ></img>
            <img
              src={"/tanda-tanya.png"}
              className="absolute  top-[8%] right-[27%] w-[17%]"
            ></img>
            <img
              src={"/3-starts.png"}
              className="absolute  top-[8%] right-[50%] w-[26%]"
            ></img>
          </div>
        </div>
        <img data-aos="fade-right" src="/foot.png"></img>
      </div>
    </div>
  );
}
