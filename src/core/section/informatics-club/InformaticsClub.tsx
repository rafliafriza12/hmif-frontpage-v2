'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import CardOneInformaticsClub from '@/components/svg/informatics-club/card-one';
import CardTwoInformaticsClub from '@/components/svg/informatics-club/card-two';
import CardThreeInformaticsClub from '@/components/svg/informatics-club/card-three';
import LetterI from '@/components/svg/informatics-club/letter-i';
import LetterN from '@/components/svg/informatics-club/letter-n';
import LetterF from '@/components/svg/informatics-club/letter-f';
import LetterO from '@/components/svg/informatics-club/letter-o';
import LetterR from '@/components/svg/informatics-club/letter-r';
import LetterC from '@/components/svg/informatics-club/letter-c';
import LetterL from '@/components/svg/informatics-club/letter-l';
import LetterU from '@/components/svg/informatics-club/letter-u';
import LetterB from '@/components/svg/informatics-club/letter-b';
const InformaticsClub: React.FC = () => {
  const swiperEventStyle: CustomCSSProperties = {
    '--swiper-pagination-color': '#393054',
    '--swiper-pagination-bullet-inactive-color': '#fff',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-horizontal-gap': '6px',
    '--swiper-navigation-size': '45px',
    '--swiper-navigation-color': 'transparent',
    '--swiper-navigation-sides-offset': '0px',
  };

  return (
    <div className="w-full min-h-screen relative z-0 py-20  lg:overflow-hidden flex justify-center items-center mt-10">
      {/* desktop */}
      <div className=" xl:w-[150px] absolute w-[40px] z-[-1] top-[15%] xl:top-[10%] left-[10%]">
        <LetterI />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] top-[30%] xl:top-[25%] left-[26%]">
        <LetterN />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] top-[6%] xl:top-[1%] left-[50%]">
        <LetterF />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] top-[28%] right-[23%]">
        <LetterO />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] top-[10%] right-[5%]">
        <LetterR />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[-2] bottom-[25%] left-[10%] xl:bottom-0 xl:left-[20%]">
        <LetterC />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-2] bottom-[32%] xl:bottom-[7%] left-[36%]">
        <LetterL />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] bottom-[20%] right-[30%] xl:bottom-[2%] xl:right-[37%]">
        <LetterU />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-2] bottom-[35%] right-[10%] xl:bottom-[0%] xl:right-[22%]">
        <LetterB />
      </div>

      <div className=" absolute z-[1] w-[450px] left-[50%] -translate-x-[50%] top-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardOneInformaticsClub />
      </div>
      <div className=" absolute z-[1] w-[450px] left-[5%] bottom-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardTwoInformaticsClub />
      </div>
      <div className=" absolute z-[1] w-[450px] right-[5%] bottom-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardThreeInformaticsClub />
      </div>
      {/* end of desktop */}

      {/* mobile */}
      <div className="w-full flex justify-center  xl:hidden">
        <div className=" w-[90%] flex flex-col md:grid md:grid-cols-2 gap-10 px-4">
          {Array.from({ length: 3 }).map((achievement: any, i: number) => {
            return (
              <div
                className={`w-full h-[400px] ${i === 2 ? 'md:col-span-2' : ''} bg-[#393054]/30 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start  duration-300 border-[0.5px] border-white/20`}
              >
                <div className=" w-full text-white">
                  <h1 className=" mb-1 text-3xl font-bold">Detik</h1>
                  <p className=" text-xl">Dedikasi Informatika</p>
                </div>

                <div className=" w-full h-[50%] bg-gray-500 rounded-2xl"></div>

                <div className=" bg-[#101010]/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-white">
                  <span>Selengkapnya</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* end of mobile */}
    </div>
  );
};

export default InformaticsClub;
