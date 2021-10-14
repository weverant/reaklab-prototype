import { gsap } from "gsap";

export const imgTransform = (el, child) => {
    if (el) {
        console.log(el);
        gsap.to(el, {
            width: "6.4rem",
            marginLeft: "-4rem",
            duration: 0.64,
        });
    }
};

export const reverse = (el, child) => {
    if (el) {
        gsap.to(el, {
            width: "100%",
            marginLeft: "0",
            duration: 0.64,
        });
    }
};
