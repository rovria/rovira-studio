const locoObserver = new ResizeObserver(() => scroll.update()).observe(
  document.querySelector('[data-scroll-container]')
);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.locomotive-scroll'),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
  smoothMobile: 1,
  multiplier: 1.0,
});
