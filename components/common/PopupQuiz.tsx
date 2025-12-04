import { IconArrow } from "@/components/common/Icons";
import { useStorage } from "@/contexts/StorageContext";
import { listStages } from "@/data/quiz";
import { Modal } from "antd";
import { memo, useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import ConfettiParticles from "./ConfettiParticles";

function PopupQuiz() {
  const {
    isPopupQuizOpen,
    setIsPopupQuizOpen,
    activeStage,
    setActiveStage,
    activeQuestion,
    setActiveQuestion,
    listSelectedAnswer,
    setListSelectedAnswer,
  } = useStorage();

  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const nextQuestionSoundRef = useRef<HTMLAudioElement | null>(null);
  const completeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Khởi tạo audio elements
  useEffect(() => {
    nextQuestionSoundRef.current = new Audio("/sounds/next-question.mp3");
    completeSoundRef.current = new Audio("/sounds/quiz-complete.mp3");

    return () => {
      nextQuestionSoundRef.current?.pause();
      completeSoundRef.current?.pause();
    };
  }, []);

  const stage = useMemo(() => {
    if (activeStage >= 0 && activeStage < listStages.length) {
      return listStages[activeStage];
    }
    return null;
  }, [activeStage]);

  // Hiển thị confetti và phát âm thanh khi hoàn thành chặng
  useEffect(() => {
    const shouldShow = stage && activeQuestion >= stage.questions.length && isPopupQuizOpen;

    if (shouldShow) {
      // Phát âm thanh hoàn thành chặng
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
  }, [stage, activeQuestion, isPopupQuizOpen]);

  return (
    <>
      <ConfettiParticles active={showConfetti} particleCount={60} />
      <Modal className="quiz-modal custom-modal" open={isPopupQuizOpen} closeIcon={null} footer={null} centered>
        <div className="quiz-modal-content">
          {stage && activeQuestion < stage.questions.length ? (
            <div id="quiz">
              <h3 className="mb-2 text-[48px] leading-none font-bold">
                {stage?.questions[activeQuestion]?.idQuestion < 10
                  ? `0${stage?.questions[activeQuestion]?.idQuestion}`
                  : stage?.questions[activeQuestion]?.idQuestion}
              </h3>
              <div id="question" className="mb-6">
                <h2 className="mb-6 font-semibold">{stage?.questions[activeQuestion]?.question}</h2>

                <div id="anwsers" className="space-y-3">
                  {stage?.questions[activeQuestion]?.answers.map((answer: any, index: number) => (
                    <div
                      key={index}
                      className={`answer flex cursor-pointer gap-3 rounded-xl p-4 ${selectedAnswer === answer ? "bg-[linear-gradient(270deg,#00a758,#00753e)] text-white shadow-[0_2px_15px_5px_#00a75880]" : "bg-white shadow-[0_0_10px_0_#0002]"}`}
                      onClick={() => setSelectedAnswer(answer)}
                    >
                      <p className="font-bold">{answer.idAnswer}</p>
                      <p className="text-sm">{answer.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mb-6 border-[#e5e7eb]" />
              <button
                className="secondary-btn flexCenter w-full gap-3"
                onClick={() => {
                  setListSelectedAnswer([...listSelectedAnswer, selectedAnswer]);
                  if (stage && activeStage >= listStages.length - 1 && activeQuestion >= stage.questions.length - 1) {
                    setActiveStage(activeStage + 1);
                    setIsPopupQuizOpen(false);
                    setActiveQuestion(0);
                  } else {
                    // Phát âm thanh chuyển câu hỏi
                    if (nextQuestionSoundRef.current) {
                      nextQuestionSoundRef.current.currentTime = 0;
                      nextQuestionSoundRef.current.play().catch(() => {
                        // Ignore errors if autoplay is blocked
                      });
                    }
                    setActiveQuestion(activeQuestion + 1);
                    setSelectedAnswer(null);
                  }
                }}
                disabled={!selectedAnswer}
              >
                <p>Tiếp theo</p>
                <IconArrow />
              </button>
            </div>
          ) : (
            <div id="result">
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
                Chúc mừng bạn đã <br /> hoàn thành chặng {stage?.idStage}!
              </h3>
              <hr className="mb-6 border-[#e5e7eb]" />
              <p className="mb-2 text-center font-bold text-[#16a34a]">Bạn có biết?</p>
              <p className="mb-2 text-center text-[#444]">{stage?.content}</p>
              <p className="mb-6 text-center text-sm text-[#a3a3a3]">{stage?.from}</p>
              <hr className="mb-6 border-[#e5e7eb]" />
              <button
                className="secondary-btn flexCenter w-full gap-3"
                onClick={() => {
                  setActiveStage(activeStage + 1);
                  setIsPopupQuizOpen(false);
                  setActiveQuestion(0);
                }}
              >
                <p>Qua chặng tiếp theo</p>
                <IconArrow />
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default memo(PopupQuiz);
