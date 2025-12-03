import Image from "next/image";
import { memo } from "react";

function Desktop({ ...props }) {
  return (
    <>
      <div id="Desktop" className={``}>
        <Image
          src="/images/home/desktop.png"
          alt="Manulife Quiz"
          className={`w-screen h-screen object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </>
  );
}

export default memo(Desktop);
