import { IconArrow } from "@/components/common/Icons";
import { useStorage } from "@/contexts/StorageContext";
import { cn } from "@/utils/main";
import Image from "next/image";
import { memo, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { message } from "antd";
import { motion } from "framer-motion";

function LoginSection({ ...props }) {
  const { height } = useWindowSize();
  const { quizStep, setQuizStep, yob, setYob } = useStorage();

  const handleNext = () => {
    if (yob.length === 4 && Number(yob) > 1900 && Number(yob) < 2025) {
      setQuizStep(quizStep + 1);
    } else {
      message.warning("Năm sinh phải sau năm 1900 và trước năm 2025!");
    }
  };

  return (
    <>
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        id="LoginSection"
        className={cn("hideScrollbar flex h-dvh max-h-[800px] flex-1 flex-col overflow-auto")}
      >
        <Image
          id="introBanner"
          src="/images/home/login-banner.png"
          alt="Manulife Quiz"
          className={`w-full object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
        <div id="content" className={`cusContainer asdfsadf mt-4 flex h-full flex-col justify-between space-y-3 pb-2`}>
          <h2 className="text-center leading-relaxed font-semibold">
            Cho Manulife biết tuổi thật của bạn để mình <br /> so sánh với tuổi bao tử nhé!
          </h2>
          <input
            type="tel"
            placeholder="Nhập tuổi thật của bạn"
            className="cusInput"
            onChange={(e) => setYob(e.target.value)}
            maxLength={4}
            value={yob}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNext();
              }
            }}
          />
          <button className="main-btn flexCenter w-full gap-3" onClick={() => handleNext()}>
            <span>Tiếp theo</span>
            <IconArrow />
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default memo(LoginSection);
