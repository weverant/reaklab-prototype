const [root, body] = [document.documentElement, document.body];
let w = 0;

const getScrollbarWidth = () => {
    const sbWidth = window.innerWidth - root.clientWidth;
    root.style.setProperty('--scrollbarWidth', sbWidth + "px");
    sbWidth > 0 ? body.classList.add('has-scrollbar') : body.classList.remove('has-scrollbar');
}

const resize_ob = new ResizeObserver((entries) => {
    let rect = entries[0].contentRect,
        width = rect.width;
    if (w !== width) getScrollbarWidth();
    w = width;
});
// start observing for resize
resize_ob.observe(root);

getScrollbarWidth();
