const color = '#FFFFFF';
export const ParticlesConfig = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 1800,
      },
    },
    color: {
      value: color,
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 1,
        color: color,
      },
      polygon: {
        nb_sides: 6,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.6,
        opacity_min: 0.25,
        sync: true,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 8,
        size_min: 1.25,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: color,
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 10,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 2000,
        rotateY: 2000,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 3,
        },
      },
      repulse: {
        distance: 250,
        duration: 2,
      },
    },
  },
  retina_detect: true,
};
