import PopupRules from "@/components/common/PopupRules";
import { useStorage } from "@/contexts/StorageContext";
import { memo } from "react";

function Rules({ ...props }) {
  const { setIsModalRulesOpen } = useStorage();

  return (
    <>
      <div id="Rules" className={``}>
        <p
          className="text-xs font-medium underline w-fit mx-auto"
          onClick={() => setIsModalRulesOpen(true)}
        >
          Thể lệ chương trình
        </p>
      </div>

      <PopupRules />
    </>
  );
}

export default memo(Rules);
