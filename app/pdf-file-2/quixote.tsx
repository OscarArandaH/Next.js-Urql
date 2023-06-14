'use client'
import React, { useEffect } from 'react';
import { Page, Text, Document, StyleSheet, Font, renderToBuffer } from '@react-pdf/renderer';

Font.register({
  family: 'Arial',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const Quixote = () => (
  <Document title='PDF Test' author='Oscar' subject='Probar estilos' keywords='react-pdf' creator='Oscar' producer='Oscar' pdfVersion='1.3' language='es' pageMode='useOutlines' pageLayout='twoColumnLeft'>
    <Page size="LETTER" orientation='portrait' style={{backgroundColor: 'white', paddingLeft: '4cm', paddingRight: '2.5cm', paddingTop: '2.5cm', paddingBottom: '2.5cm'}}>
      <Text style={{fontSize: 14, fontStyle: 'bold', fontWeight: 'bold', textAlign: 'center'}}>Test</Text>
    </Page>
  </Document>
);

const PDFPage = () => {
  useEffect(() => {
    const generatePDF = async () => {
      const pdfBuffer = await renderToBuffer(<Quixote />);
      console.log('pdfBuffer', pdfBuffer);
      
    }
    generatePDF();
  }
  , []);

  return (
    <div>
      <h1>PDF</h1>
    </div>
  )
}

export default PDFPage;