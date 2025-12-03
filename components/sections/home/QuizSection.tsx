import PopupQuiz from "@/components/common/PopupQuiz";
import { useStorage } from "@/contexts/StorageContext";
import { cn } from "@/utils/main";
import { message } from "antd";
import Image from "next/image";
import { memo } from "react";
import { useWindowSize } from "usehooks-ts";

const decoImages = [
  {
    image: "/images/home/quiz-deco-1.png",
    className: "top-[8%] left-0 w-[21.5%]",
  },
  {
    image: "/images/home/quiz-deco-2.png",
    className: "top-[35%] right-0 w-[21.5%]",
  },
  {
    image: "/images/home/quiz-deco-3.png",
    className: "bottom-0 right-[10%] w-[35%]",
  },
];

const listStages = [
  {
    className: "absolute bottom-[10%] left-[16%] z-3 w-[40%]",
    questions: [
      {
        question: "Câu hỏi 1",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
      {
        question: "Câu hỏi 2",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
    ],
  },
  {
    className: "absolute bottom-[32%] left-[44%] z-3 w-[40%]",
    questions: [
      {
        question: "Câu hỏi 1",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
      {
        question: "Câu hỏi 2",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
    ],
  },
  {
    className: "absolute bottom-[48%] left-[16%] z-3 w-[40%]",
    questions: [
      {
        question: "Câu hỏi 1",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
      {
        question: "Câu hỏi 2",
        answers: [
          { answer: "Câu trả lời 1", value: 1 },
          { answer: "Câu trả lời 2", value: 2 },
          { answer: "Câu trả lời 3", value: 3 },
        ],
      },
    ],
  },
];

function QuizSection({ ...props }) {
  const { height } = useWindowSize();

  const { activeStage, setActiveStage, setIsPopupQuizOpen } = useStorage();

  return (
    <>
      <div
        id="QuizSection"
        className={cn("relative flex flex-1 flex-col", height > 620 ? "h-dvh overflow-hidden" : "")}
      >
        <Image
          id="quizBg"
          src="/images/home/quiz-bg.png"
          alt="Manulife Quiz"
          className={`relative size-full object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          id="logo"
          src="/images/logo.png"
          alt="Manulife Logo"
          className={`absolute top-5 left-5 z-2 w-[36%] object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
        {decoImages.map((deco, index) => (
          <Image
            key={index}
            id={`quizDeco${index + 1}`}
            src={deco.image}
            alt="Manulife Quiz"
            className={`absolute ${deco.className} z-1 object-cover`}
            width={0}
            height={0}
            sizes="100vw"
          />
        ))}
        <div id="line" className="absolute top-1/2 left-1/2 z-3 w-[34%] -translate-x-1/2 -translate-y-1/2">
          <Image
            id="quizUnactiveLine"
            src="/images/home/quiz-unactive-line.png"
            alt="Manulife Quiz"
            className={`w-full`}
            width={0}
            height={0}
            sizes="100vw"
          />

          <div
            id="activeLine"
            className={`absolute bottom-0 left-0 w-full overflow-hidden duration-700 ease-in-out ${activeStage === 0 ? "h-[0%]" : activeStage === 1 ? "h-[40%]" : activeStage === 2 ? "h-[68%]" : "h-full"}`}
          >
            <Image
              id="quizActiveLine"
              src="/images/home/quiz-active-line.png"
              alt="Manulife Quiz"
              className={`absolute bottom-0 left-0 w-full`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>

        <div id="listStages">
          {listStages.map((question, index) => (
            <div
              id={`quizStage${index}`}
              key={index}
              className={question.className}
              onClick={() => {
                if (activeStage === index) setIsPopupQuizOpen(true);
                else message.warning(`Vui lòng hoàn thành chặng ${activeStage + 1} trước!`);
              }}
            >
              {activeStage === index ? (
                <>
                  <Image
                    id="quizStage"
                    src={index === 0 ? "/images/home/quiz-start-question.png" : "/images/home/quiz-active-question.png"}
                    alt="Manulife Quiz"
                    className={`animation-scale w-full`}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <Image
                    id="quizTooltip"
                    src="/images/home/quiz-tooltip.png"
                    alt="Manulife Quiz"
                    className={`absolute top-[75%] left-1/2 w-[70%] -translate-x-1/2 animate-bounce`}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </>
              ) : (
                <Image
                  id="quizStage"
                  src={
                    activeStage < index
                      ? "/images/home/quiz-unactive-question.png"
                      : index === 0
                        ? "/images/home/quiz-start-done.png"
                        : "/images/home/quiz-done-question.png"
                  }
                  alt="Manulife Quiz"
                  className={`w-full ${activeStage < index && "animation-scale"}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              )}
            </div>
          ))}
        </div>

        <Image
          id="quizEnd"
          src="/images/home/quiz-end.png"
          alt="Manulife Quiz"
          className={`absolute top-[8%] right-[10%] z-3 w-[43%]`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <PopupQuiz />
    </>
  );
}

export default memo(QuizSection);
