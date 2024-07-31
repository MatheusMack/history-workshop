/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '@mui/material';
import CustomTypography from '@/components/atoms/Text/CustomTypography';

export default function Home() {
  return (
    <Container>
      <CustomTypography variant="h2" component="h1" gutterBottom>
        II Seminário Discente PPGH/UFBA
      </CustomTypography>
      <CustomTypography variant="h5" component="h2" gutterBottom>
        07 a 10 de outubro de 2024
      </CustomTypography>
      <CustomTypography variant="body1" gutterBottom>
        Faculdade de Filosofia e Ciências Humanas da UFBA - São Lázaro. Presencial - Faculdade de Filosofia e Ciências Humanas e PAF I - UFBA
      </CustomTypography>
    </Container>
  );
}
