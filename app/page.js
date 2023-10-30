"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              alt="menu1"
              height={"0"}
              width={"1500"}
              src="/kaset1.png"
            ></Image>
          </div>
          <div className="basis-2/4">
            <Image
              alt="menu1"
              height={"0"}
              width={"1500"}
              data-aos="fade-down"
              src="/Foto.png"
            ></Image>
          </div>
          <div className="basis-1/4 ">
            <Image
              alt="menu1"
              height={"0"}
              width={"1500"}
              className="ml-auto"
              data-aos="fade-left"
              src="/arm.png"
            ></Image>
          </div>
        </div>
        <Image
          alt="menu1"
          height={"0"}
          width={"1500"}
          data-aos="fade-right"
          src={"/Tentang-Sola-Market.png"}
          className="w-full absolute top-[82%]"
        ></Image>
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

            <div data-aos="zoom-in-up" className="relative ">
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/rectangle.png"}
                className="w-11/12 m-auto block max-[720px]:w-full"
              ></Image>
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/Whats-New.png"}
                className="absolute  top-[5%] right-[40%] w-[50%]  max-[720px]:w-[60%]"
              ></Image>
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/hp.png"}
                className="absolute  top-[8%] right-[7%] w-[22%] max-[720px]:top-[2%] max-[720px]:right-[7%] max-[720px]:w-[32%] "
              ></Image>
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/main-event.png"}
                className="absolute  top-[40%] right-[35%] w-[16%] max-[720px]:right-[30%] max-[720px]:w-[19%]"
              ></Image>
              <Link href={"/page"}>
                <Image
                  alt="menu2"
                  height={"0"}
                  width={"1500"}
                  src={"/sotr.png"}
                  className="absolute  top-[41%] right-[55%] w-[17%] max-[720px]:right-[60%] max-[720px]:w-[20%]"
                ></Image>
              </Link>
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/tanda-tanya.png"}
                className="absolute  top-[8%] right-[27%] w-[17%]"
              ></Image>
              <Image
                alt="menu2"
                height={"0"}
                width={"1500"}
                src={"/3-starts.png"}
                className="absolute  top-[8%] right-[50%] w-[26%]"
              ></Image>
            </div>
          </div>
          <Image
            className="width-m "
            alt="menu2"
            height={"0"}
            width={"1500"}
            data-aos="fade-right"
            src="/foot.png"
          ></Image>
        </div>
        <div>
          <div className="pt-20 max-[720px]:pt-10 max-[720px]:px-0">
            <div data-aos="zoom-in-up" className="relative inline-block">
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src="/rectangle2.png"
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/Retro-Rewind.png"}
                className="absolute  z-10 top-[1%] right-[5%] w-[90%] max-[720px]:w-[90%]"
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/bola-disko.png"}
                className="absolute top-[10%] right-[3%] w-[18%] max-[720px]:w-[18%]"
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/STars.png"}
                className="absolute top-[-8%] left-[0%] w-[30%] max-[720px]:w-[30%]"
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/basket-jugaa.png"}
                className="absolute z-10 top-[45%] left-[5%] w-[20%]  max-[720px]:w-[20%] "
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/awan.png"}
                className="absolute z-0 top-[-2%] left-[5%] w-[94%]  max-[720px]:w-[94%]"
              ></Image>
              <Image
                alt="menu3"
                height={"0"}
                width={"1500"}
                src={"/tulisan.png"}
                className="absolute z-0 top-[2%] left-[5%] w-[90%]  max-[720px]:w-[90%]"
              ></Image>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-0 max-[720px]:pt-10 max-[720px]:px-0">
            <Image
              className="width-m"
              alt="menu4"
              height={"0"}
              width={"1500"}
              data-aos="fade-right"
              src="/foot.png"
            ></Image>
            <div data-aos="zoom-in-up" className="relative inline-block mb-96">
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/Mouse.png"}
                className="absolute z-10 top-[0%] right-[0%] w-[20%] max-[720px]:w-[20%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/samping-rectangle.png"}
                className="absolute z-10 top-[16%] right-[90%] w-[10%] max-[720px]:w-[10%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/sidik-jari.png"}
                className="absolute z-10 top-[10%] right-[79%] w-[10%] max-[720px]:w-[10%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/arrow.png"}
                className="absolute z-10 top-[16%] right-[70%] w-[5%] max-[720px]:w-[5%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/loading.png"}
                className="absolute z-20 top-[28%] right-[36%] w-[25%] max-[720px]:w-[25%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/love.png"}
                className="absolute z-10 top-[3%] right-[25%] w-[18%] max-[720px]:w-[18%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/Heading.png"}
                className="absolute z-10 top-[4%] right-[30%] w-[35%] max-[720px]:w-[35%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                className="w-screen "
                src="/kosong.png"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/web-loader.png"}
                className="absolute top-[40%] right-[0%] w-[100%] max-[720px]:w-[100%]"
              ></Image>
              <Image
                alt="menu4"
                height={"0"}
                width={"1500"}
                src={"/CONTENT.png"}
                className="absolute top-[45%] right-[5%] w-[90%] max-[720px]:w-[90%]"
              ></Image>
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
