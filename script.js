particlesJS('particles-js', {
  particles: {
    number: {
      value: 50, // Number of particles
      density: {
        enable: true,
        value_area: 800, // Adjust for screen size
      }
    },
    color: {
      value: '#fff' // White particles
    },
    shape: {
      type: 'circle', // Circle particles
      stroke: {
        width: 0,
        color: '#000' // No stroke
      },
      polygon: {
        nb_sides: 5 // Can be adjusted for different shapes
      },
      image: {
        src: '' // No image
      }
    },
    opacity: {
      value: 0.5, // Adjust transparency
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3, // Particle size
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false // Disable lines between particles
    },
    move: {
      enable: true,
      speed: 6, // Adjust speed of movement
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas', // Detect clicks on canvas
    events: {
      onhover: {
        enable: false // Disable hover effects
      },
      onclick: {
        enable: true, // Enable click event
        mode: 'push' // Push particles away from click
      },
      resize: true // Update particles on resize
    }
  },
  retina_detect: true // Enable retina display support
});
 
