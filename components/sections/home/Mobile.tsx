import IntroSection from "@/components/sections/home/IntroSection";
import LoginSection from "@/components/sections/home/LoginSection";
import QuizSection from "@/components/sections/home/QuizSection";
import ResultSection from "@/components/sections/home/ResultSection";
import { useStorage } from "@/contexts/StorageContext";
import { memo, useMemo } from "react";
import { AnimatePresence } from "framer-motion";

function Mobile({ ...props }) {
  const { quizStep } = useStorage();
  const content = useMemo(() => {
    switch (quizStep) {
      case 1:
        return <IntroSection />;
      case 2:
        return <LoginSection />;
      case 3:
        return <QuizSection />;
      case 4:
        return <ResultSection />;
      default:
        return <IntroSection />;
    }
  }, [quizStep]);
  return (
    <>
      <div id="Mobile" className={``}>
        <AnimatePresence>{content}</AnimatePresence>
      </div>
    </>
  );
}

export default memo(Mobile);
