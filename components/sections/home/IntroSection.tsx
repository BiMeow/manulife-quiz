import { IconArrow } from "@/components/common/Icons";
import Rules from "@/components/common/rules";
import { useStorage } from "@/contexts/StorageContext";
import Image from "next/image";
import { memo } from "react";
import { useWindowSize } from "usehooks-ts";
import { motion } from "framer-motion";

function IntroSection({ ...props }) {
  const { height } = useWindowSize();
  const { setQuizStep } = useStorage();
  return (
    <>
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        id="IntroSection"
        className={`flex flex-1 flex-col ${height > 620 ? "h-dvh overflow-hidden" : ""} `}
      >
        <Image
          id="introBanner"
          src="/images/home/intro-banner.png"
          alt="Manulife Quiz"
          className={`w-full object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
        <div id="content" className={`cusContainer mt-4 flex h-full flex-col justify-between space-y-3 pb-2`}>
          <h1 className="text-center text-[8.26667vw] font-bold uppercase">
            KHÁM PHÁ <br /> TUỔI BAO TỬ <br /> CỦA BẠN
          </h1>
          <p className="mx-auto w-max border-t border-[#ffffff1a] pt-3 text-center text-[4.8vw] font-semibold">
            Cơ hội trúng Apple Watch cực xịn <br /> từ Manulife!
          </p>
          <button className="main-btn flexCenter w-full gap-3" onClick={() => setQuizStep(2)}>
            <p>Bắt đầu</p>
            <IconArrow />
          </button>
          <Rules />
        </div>
      </motion.div>
    </>
  );
}

export default memo(IntroSection);
