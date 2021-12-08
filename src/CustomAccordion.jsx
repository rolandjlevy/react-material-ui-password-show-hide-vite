import React, { useState, useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

export default function CustomAccordion() {
  const header = 'Key Information';
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleClose = (e) => {
    console.log('closed')
  };
  
  const links = [
    { url: '/info/about-us', label: 'About Us'},
    { url: '/info/keeping-the-worlds-industry-working', label: 'Keeping Industry Working'},
    { url: '/want-to-hear-from-us', label: 'Want to hear from us?'},
    { url: '/request-a-2021-catalogue', label: 'Request a Catalogue'},
    { url: '/cromwell-trade-account-apply', label: 'Trade Accounts'},
    { url: '/branches', label: 'Find a Cromwell Branch'},
    { url: '/info/company-history', label: 'Company History'},
    { url: '/info/contact-us', label: 'Contact Us'},
    { url: '/info/careers', label: 'Careers'},
    { url: '/about-us/gender-pay-results-2020.pdf', label: '2020 Gender Pay Results'},
    { url: '/info/delivery', label: 'Delivery'}
  ];

  const accord = useRef(null);
  useEffect(() => {
    accord.current.addEventListener('transitionend', (e) => {
      console.log('transitionend', e.target);
    });
  }, []);

  
  return (
    <Accordion 
      expanded={expanded === header} 
      onChange={handleChange(header)}
      ref={accord}
    >
      <AccordionSummary expandIcon={<ExpandMore color="primary" />}>
        <Typography variant="h6">{header}</Typography>
      </AccordionSummary>
      {links.map((link) => (
        <AccordionDetails key={link.url}>
          <Link href={link.url} rel={link.rel}>
            {link.label}
          </Link>
        </AccordionDetails>
      ))}
    </Accordion>
  )
};