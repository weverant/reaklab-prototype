// UTILS

// Hide specified elements
export const hide = (el) => el.forEach(e => (e.style.display = 'none'));

// Checks if the element has a specified class
export const hasClass = (el, className) => el.classList.contains(className);

// Toggle class for an element
export const toggleClass = (el, className) => el.classList.toggle(className);
export const toggleClass2 = ([...el], className) => el.forEach(e => (e.classList.toggle(className)));

// Get scroll position of current page
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// Smooth-scroll to top
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 6);
    }
};

// Check if parent element contains the child element
export const elementContains = (parent, child) => parent !== child && parent.contains(child);

// Check if element is visible in viewport
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const {
        top,
        left,
        bottom,
        right
    } = el.getBoundingClientRect();
    const {
        innerHeight,
        innerWidth
    } = window;
    return partiallyVisible ?
        ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
        top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// Encode form elements as an object
export const formToObject = form =>
    // eslint-disable-next-line no-undef
    Array.from(new FormData(form)).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: value
        }), {}
    );

// Trigger a specific event on a given element, optionally passing custom data
export const triggerEvent = (el, eventType, detail) =>
    // eslint-disable-next-line no-undef
    el.dispatchEvent(new CustomEvent(eventType, {
        detail
    }));
