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
          <div className="basis-1/4" data-aos="fade-right">
            <img src="/kaset1.png"></img>
          </div>
          <div className="basis-2/4">
            <img data-aos="fade-down" src="/Foto.png"></img>
          </div>
          <div className="basis-1/4 ">
            <img className="ml-auto" data-aos="fade-left" src="/arm.png"></img>
          </div>
        </div>
        <img
          data-aos="fade-right"
          src={"/Tentang-Sola-Market.png"}
          className="w-full absolute top-[82%]"
        ></img>
      </div>
      <div className="bg-gradient-to-b from-pink-200 to-purple-500">
        <div>
          <div className="px-20 pt-20 max-[720px]:pt-10 max-[720px]:px-10">
            <p
              data-aos="fade-up"
              className="text-justify text-pink-500 text-lg max-[720px]:text-xs"
            >
              <b>
                <strong>SOLA Market</strong> adalah acara bazaar tematik
                terbesar di FIKOM Unpad. Memadukan sarana perbelanjaan dengan
                hiburan dan ruang kreativitas yang dikemas dalam bentuk
                permainan interaktif, penampilan musik, dan workshop untuk
                generasi muda. Keberadaan SOLA Market merupakan kontribusi nyata
                dari mahasiswa FIKOM dalam memajukan industri kreatif di
                Indonesia.
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
        <div>
          <div className="pt-20 max-[720px]:pt-10 max-[720px]:px-0">
            <div data-aos="zoom-in-up" className="relative inline-block">
              <img src="/rectangle2.png"></img>
              <img
                src={"/Retro-Rewind.png"}
                className="absolute  z-10 top-[1%] right-[5%] w-[90%] max-[720px]:w-[90%]"
              ></img>
              <img
                src={"/bola-disko.png"}
                className="absolute top-[10%] right-[3%] w-[18%] max-[720px]:w-[18%]"
              ></img>
              <img
                src={"/STars.png"}
                className="absolute top-[-8%] left-[0%] w-[30%] max-[720px]:w-[30%]"
              ></img>
              <img
                src={"/basket-jugaa.png"}
                className="absolute z-10 top-[45%] left-[5%] w-[20%]  max-[720px]:w-[20%] "
              ></img>
              <img
                src={"/awan.png"}
                className="absolute z-0 top-[-2%] left-[5%] w-[94%]  max-[720px]:w-[94%]"
              ></img>
              <img
                src={"/tulisan.png"}
                className="absolute z-0 top-[2%] left-[5%] w-[90%]  max-[720px]:w-[90%]"
              ></img>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-0 max-[720px]:pt-10 max-[720px]:px-0">
            <img data-aos="fade-right" src="/foot.png"></img>
            <div data-aos="zoom-in-up" className="relative inline-block mb-96">
              <img
                src={"/Mouse.png"}
                className="absolute z-10 top-[0%] right-[0%] w-[20%] max-[720px]:w-[20%]"
              ></img>
              <img
                src={"/samping-rectangle.png"}
                className="absolute z-10 top-[16%] right-[90%] w-[10%] max-[720px]:w-[10%]"
              ></img>
              <img
                src={"/sidik-jari.png"}
                className="absolute z-10 top-[10%] right-[79%] w-[10%] max-[720px]:w-[10%]"
              ></img>
              <img
                src={"/arrow.png"}
                className="absolute z-10 top-[16%] right-[70%] w-[5%] max-[720px]:w-[5%]"
              ></img>
              <img
                src={"/loading.png"}
                className="absolute z-20 top-[28%] right-[36%] w-[25%] max-[720px]:w-[25%]"
              ></img>
              <img
                src={"/love.png"}
                className="absolute z-10 top-[3%] right-[25%] w-[18%] max-[720px]:w-[18%]"
              ></img>
              <img
                src={"/Heading.png"}
                className="absolute z-10 top-[4%] right-[30%] w-[35%] max-[720px]:w-[35%]"
              ></img>
              <img className="w-screen " src="/kosong.png"></img>
              <img
                src={"/web-loader.png"}
                className="absolute top-[40%] right-[0%] w-[100%] max-[720px]:w-[100%]"
              ></img>
              <img
                src={"/CONTENT.png"}
                className="absolute top-[45%] right-[5%] w-[90%] max-[720px]:w-[90%]"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[50%] left-[25%] text-6xl font-bold watermask">
        <h1 className="text-center">
          Muhammad Ramada Aditya <br />
          (Watermask)
        </h1>
      </div>
    </div>
  );
}
