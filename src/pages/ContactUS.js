import styled from "styled-components";
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    <ContactUsCont variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: '#fff'}}>
      <h1>Page not working</h1>
    </ContactUsCont>
  )
}

const ContactUsCont = styled(motion.div)`
  height: 90vh;
  font-size: 50px;
  h1 {
    display: flex;
    justify-content: center;
  }
`;

export default ContactUs;