const locoObserver = new ResizeObserver(() => scroll.update()).observe(
  document.querySelector('[data-scroll-container]')
);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.locomotive-scroll'),
  smooth: true,
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: true,
  },
  smoothMobile: 0,
  multiplier: 1.0,
});
