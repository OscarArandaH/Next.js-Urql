/* eslint-disable jsx-a11y/alt-text */
'use client'
import ReactPDF, { Page, Text, Document, StyleSheet, Font, Image, renderToFile, PDFViewer } from '@react-pdf/renderer';
import React, { useEffect } from 'react';

Font.register({
  family: 'Arial',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const Quixote = () => (
  <Document title='PDF Test' author='Oscar' subject='Probar estilos' keywords='react-pdf' creator='Oscar' producer='Oscar' pdfVersion='1.3' language='es' pageMode='useOutlines' pageLayout='twoColumnLeft'>
    <Page size="LETTER" orientation='portrait' style={{backgroundColor: 'white', paddingLeft: '4cm', paddingRight: '2.5cm', paddingTop: '2.5cm', paddingBottom: '2.5cm'}}>
      <Text style={{fontSize: 14,fontStyle: 'bold',fontWeight: 'bold',textAlign: 'center'}}>UNIVERSIDAD DE SANTIAGO DE CHILE</Text>
      <Text style={{fontSize: 14,fontStyle: 'bold',fontWeight: 'bold',textAlign: 'center'}}>FACULTAD DE INGENIERÍA</Text>
      <Text style={{fontSize: 14,fontStyle: 'bold',fontWeight: 'bold',textAlign: 'center'}}>Departamento de Ingeniería Informática</Text>
      <Text style={{fontSize: 12,textAlign: 'center',fontStyle: 'bold',fontWeight: 'bold',paddingBottom: 30}}>Sistema de información como apoyo a la programación académica de actividades en asignaturas del Departamento de Ingeniería Informática</Text>
      <Text style={{fontSize: 10,textAlign: 'center',fontStyle: 'bold',fontWeight: 'bold',marginBottom: 120 }}>Oscar Ignacio Aranda Holmazábal</Text>
      <Text style={{paddingLeft: '8cm',fontSize: 10,textAlign: 'left' }}>Profesor Guía: Daniel Vega Araya</Text>
      <Text style={{paddingLeft: '8cm',fontSize: 10,textAlign: 'left', paddingBottom:'1cm'}}>Profesor Co-guía: Manuel Villalobos Cid</Text>
      <Text style={{paddingLeft: '8cm',fontSize: 10,textAlign: 'left'}}>Trabajo de titulación presentado en conformidad a los requisitos para obtener el título de Ingeniero de Ejecución en Computación e Informática</Text>
      <Text style={{textAlign: 'center',fontSize: 10,fontStyle: 'light', paddingTop:'6cm'}}>Santiago de Chile</Text>
      <Text style={{textAlign: 'center',fontSize: 10,fontStyle: 'light'}}>2022</Text>
      <Text style={{position: 'absolute',fontSize: 12,bottom: 30,left: 0,right: 0,textAlign: 'center',color: 'grey' }} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

const PDFPage = () => {
  const [client, setClient] = React.useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  ReactPDF.render(<Quixote />, `./pdfs/quixote23.pdf`);

  return (
    <div>
      <PDFViewer style={{ width: '50%', height: '50vh' }}>
        <Quixote />
      </PDFViewer>
    </div>
  )
}

export default PDFPage;