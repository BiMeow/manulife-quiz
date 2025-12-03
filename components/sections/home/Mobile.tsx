import IntroSection from "@/components/sections/home/IntroSection";
import LoginSection from "@/components/sections/home/LoginSection";
import QuizSection from "@/components/sections/home/QuizSection";
import { useStorage } from "@/contexts/StorageContext";
import { memo, useMemo } from "react";

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
      default:
        return <IntroSection />;
    }
  }, [quizStep]);
  return (
    <>
      <div id="Mobile" className={``}>
        {content}
      </div>
    </>
  );
}

export default memo(Mobile);
