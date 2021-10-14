import { imgTransform, reverse } from "../components/animations";

const triggers = document.querySelectorAll(".js-trigger");

let flag = true;

const eventInterval = (duration = 640) => {
    setTimeout(() => {
        flag = true;
    }, duration);
};

const setActive = function () {
    eventInterval();

    if (flag) {
        triggers.forEach((el) => el.parentNode.classList.remove("active"));
        this.parentNode.classList.add("active");
    }
    flag = false;
};

const getActiveIndex = () => {
    const active = document.querySelector(".active");
    let index;

    triggers.forEach((trigger, i) => {
        if (trigger.parentNode === active) {
            index = i;
        }
    });
    return index;
};

const scrollDirection = (currIndex, positive) => {
    let length = positive ? triggers.length - 1 : triggers.length;
    let minimum = positive ? 0 : 1;

    if (currIndex < length && currIndex >= minimum) {
        let next = positive ? triggers[currIndex + 1] : triggers[currIndex - 1];
        const nextSection = next.parentNode;
        const active = document.querySelector(".active");
        const imgNext = nextSection.querySelector(".section__main-img");
        const imgActive = active.querySelector(".section__main-img");
        setActive.call(next);
        imgTransform(imgActive);
        reverse(imgNext);
    }
};

const scroll = (e) => {
    const currentIndex = getActiveIndex();

    if (e.wheelDeltaY <= -1) {
        //next
        scrollDirection(currentIndex, true);
    } else if (e.wheelDeltaY >= 1) {
        //prev
        scrollDirection(currentIndex, false);
    }
};

// EVENTS
let isScrolling;

window.addEventListener(
    "wheel",
    function (event) {
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            scroll(event);
        }, 200);
    },
    false
);

let prev;

triggers.forEach((el) => {
    el.addEventListener("click", (e) => {
        prev = document.querySelector(".active");
        setActive.call(el);

        const activeSection = el.parentNode.querySelector(".section__main-img");
        reverse(activeSection);

        const prevSection = prev.querySelector(".section__main-img");
        imgTransform(prevSection);

        prev = el.parentNode;
    });
});
