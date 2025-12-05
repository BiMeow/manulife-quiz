"use client";

import Desktop from "@/components/sections/home/Desktop";
import Mobile from "@/components/sections/home/Mobile";
import { memo, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

function PageHome({ ...props }) {
  const { width } = useWindowSize();

  const [isInit, setIsInit] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
      setIsDesktop(width > 1000);
    }, 100);
    return () => {};
  }, [width]);

  return (
    <>
      <div id="PageHome" className={`fadeIn flexCenter min-h-dvh`}>
        <Mobile />
      </div>
    </>
  );
}

export default memo(PageHome);
