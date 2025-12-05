import { IconArrow } from "@/components/common/Icons";
import { useStorage } from "@/contexts/StorageContext";
import { listResults } from "@/data/quiz";
import Image from "next/image";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function ResultSection() {
  const { listSelectedAnswer, yob } = useStorage();

  const result = useMemo(() => {
    if (!listSelectedAnswer.length) return null;

    const totalValue = listSelectedAnswer.reduce((acc: number, curr: any) => acc + curr.value, 0);

    if (totalValue >= 6 && totalValue < 10) {
      return listResults[0];
    }

    if (totalValue >= 10 && totalValue < 14) {
      return listResults[1];
    }

    return listResults[2];
  }, [listSelectedAnswer]);

  return (
    <>
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        id="ResultSection"
        className={`hideScrollbar relative h-dvh max-h-[800px] overflow-auto`}
        style={{ backgroundColor: result?.bgColor }}
      >
        <div className="relative p-5 pb-[65px]">
          <Image
            id="logo"
            src="/images/logo.png"
            alt="Manulife Logo"
            className={`mb-[32px] w-[40%]`}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="content relative z-10 text-center">
            <p className="mb-[10px] text-center font-semibold tracking-[1px]">Kết quả tuổi bụng</p>
            <Image
              id="logo"
              src={result?.image || ""}
              alt="Manulife Logo"
              className={`mx-auto mb-[10px] w-[60%]`}
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="mb-6 px-3">
              <p className="text-[19px] leading-relaxed font-bold tracking-[1px]">
                {result?.subtitle} <br /> <span className="font-extrabold">{result?.title}</span>
              </p>
              <hr className="mx-auto mt-[18px] mb-6 w-[85%] border-t border-[#ffffff4f]" />
              <p className="mb-[26px] font-bold">
                Tuổi thật [{2025 - Number(yob)}] - {result?.subDescription}
              </p>
              <p className="mb-6 leading-relaxed whitespace-pre-line">{result?.description}</p>
              <i className="mb-6 text-[11px]">
                Nội dung bài trắc nghiệm có sự cố vấn từ bác sĩ chuyên khoa Tiêu hóa nhằm khuyến khích lối sống lành
                mạnh. Mọi thông tin được cung cấp chỉ mang tính chất tham khảo. Kết quả trò chơi và khảo sát không nên
                được sử dụng để đưa ra bất kỳ quyết định điều trị y tế nào.
              </i>
              <hr className="mx-auto mt-[18px] w-[85%] border-t border-[#ffffff4f]" />
            </div>
            <a href="https://www.manulife.com.vn/vi/form-onground.html?utm_source=manwah_quiz&utm_campaign=csr2025_register&zarsrc=31&utm_medium=zalo" className="main-btn flexCenter w-full gap-3">
              <p>
                Hoàn thiện <br /> thông tin nhận thưởng
              </p>
              <IconArrow />
            </a>
          </div>

          <Image
            id="resultDeco"
            src={result?.imageDeco || ""}
            alt="Manulife Result"
            className={`absolute bottom-0 left-0 w-full`}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </motion.div>
    </>
  );
}

export default memo(ResultSection);
