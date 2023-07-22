// Import library AOS dan style CSS-nya
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSNYA = () => {
  return AOS.init({
    duration: 600,
    once: true,
    disable: 'phone',
  });
};

export default AOSNYA;
