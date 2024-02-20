import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapAnim1 = ({text_class}) => {
  useGSAP(() => {
    gsap.fromTo(
      `.${text_class}`,
      { y: "100px", opacity: 0 },
      { opacity: 1, y: 0, repeat: -1, repeatDelay: 2 }
    );
  });
};

export default GsapAnim1;
