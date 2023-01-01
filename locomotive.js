const locoObserver = new ResizeObserver(() => scroll.update()).observe(
  document.querySelector('[data-scroll-container]')
);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.locomotive-scroll'),
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
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
