import { IconArrow } from "@/components/common/Icons";
import { useStorage } from "@/contexts/StorageContext";
import { Modal } from "antd";
import Image from "next/image";
import { memo, useEffect, useState, useRef } from "react";
import ConfettiParticles from "./ConfettiParticles";

function PopupQuizComplete() {
  const { isPopupQuizCompleteOpen, setIsPopupQuizCompleteOpen, setQuizStep } = useStorage();
  const [showConfetti, setShowConfetti] = useState(false);
  const completeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Khởi tạo audio element
  useEffect(() => {
    completeSoundRef.current = new Audio("/sounds/quiz-complete.mp3");

    return () => {
      completeSoundRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (isPopupQuizCompleteOpen) {
      // Phát âm thanh hoàn thành chặng cuối
      if (completeSoundRef.current) {
        completeSoundRef.current.currentTime = 0;
        completeSoundRef.current.play().catch(() => {
          // Ignore errors if autoplay is blocked
        });
      }
      // Sử dụng setTimeout để tránh setState đồng bộ trong effect
      const showTimer = setTimeout(() => {
        setShowConfetti(true);
      }, 0);

      // Tắt confetti sau 3 giây
      const hideTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    } else {
      const hideTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 0);
      return () => clearTimeout(hideTimer);
    }
  }, [isPopupQuizCompleteOpen]);

  return (
    <>
      <ConfettiParticles active={showConfetti} particleCount={80} />
      <Modal
        className="quiz-complete-modal custom-modal"
        open={isPopupQuizCompleteOpen}
        closeIcon={null}
        footer={null}
        centered
      >
        <div className="quiz-complete-modal-content">
          <Image
            id="quiz-stage-complete"
            src="/images/home/quiz-stage-complete.png"
            alt="Manulife Quiz Stage Complete"
            className={`mx-auto mb-3 w-[63%]`}
            width={0}
            height={0}
            sizes="100vw"
          />
          <h3 className="mb-5 text-center text-[18px] font-bold">
            Chúc mừng bạn đã <br /> hoàn thành chặng cuối!
          </h3>
          <hr className="mb-6 border-[#e5e7eb]" />
          <p className="mb-2 text-center font-bold text-[#16a34a]">Bạn có biết?</p>
          <p className="mb-2 text-center text-[#444]">
            🛡️ Dạ dày là “vệ sĩ” đầu tiên bảo vệ cơ thể bạn! Nhờ có axit trong dạ dày, vi khuẩn và độc tố từ thức ăn sẽ
            bị “xử đẹp” ngay từ vòng gửi xe!
          </p>
          <p className="mb-6 text-center text-sm text-[#a3a3a3]">📖 Oxford English Dictionary</p>
          <hr className="mb-6 border-[#e5e7eb]" />
          <button
            className="secondary-btn flexCenter w-full gap-3"
            onClick={() => {
              setIsPopupQuizCompleteOpen(false);
              setQuizStep(4);
            }}
          >
            <p>Xem tuổi bao tử của bạn</p>
            <IconArrow />
          </button>
        </div>
      </Modal>
    </>
  );
}

export default memo(PopupQuizComplete);
