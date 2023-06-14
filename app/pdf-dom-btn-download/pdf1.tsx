/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Font, PDFViewer, Image, PDFDownloadLink, BlobProvider, usePDF } from '@react-pdf/renderer';

Font.register({
  family: 'Arial',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    paddingLeft: '4cm',
    paddingRight: '2.5cm',
    paddingTop: '2.5cm',
    paddingBottom: '2.5cm'
  },
  title: {
    fontSize: 14,
    fontStyle: 'bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subject: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'bold',
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  author: {
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'bold',
    fontWeight: 'bold',
    marginBottom: 120,
  },
  teacher: {
    paddingLeft: '8cm',
    fontSize: 10,
    textAlign: 'left',
  },
  motive: {
    paddingLeft: '8cm',
    fontSize: 10,
    textAlign: 'left'
  },
  site: {
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'light'
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Arial',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const Quixote = () => (
  <Document title='PDF Test' author='Oscar' subject='Probar estilos' keywords='react-pdf' creator='Oscar' producer='Oscar' pdfVersion='1.3' language='es' pageMode='useOutlines' pageLayout='twoColumnLeft'>
    <Page size="LETTER" orientation='portrait' style={styles.body}>
      <Text style={styles.title}>UNIVERSIDAD DE SANTIAGO DE CHILE</Text>
      <Text style={[styles.title, { fontSize:12 }]}>FACULTAD DE INGENIERÍA</Text>
      <Text style={[styles.title, { fontSize:12 }]}>Departamento de Ingeniería Informática</Text>

      <Image source='/images/Usach PN.png' style={{width: '4cm', height: '4cm'}} />

      <Text style={styles.subject}>Sistema de información como apoyo a la programación académica de actividades en asignaturas del Departamento de Ingeniería Informática</Text>

      <Text style={styles.author}>Oscar Ignacio Aranda Holmazábal</Text>

      <Text style={styles.teacher}>Profesor Guía: Daniel Vega Araya</Text>
      <Text style={[styles.teacher, {paddingBottom:'1cm'}]}>Profesor Co-guía: Manuel Villalobos Cid</Text>

      <Text style={styles.motive}>Trabajo de titulación presentado en conformidad a los requisitos para obtener el título de Ingeniero de Ejecución en Computación e Informática</Text>

      <Text style={[styles.site, {paddingTop:'6cm'}]}>Santiago de Chile</Text>
      <Text style={styles.site}>2022</Text>
    </Page>

    <Page size="LETTER" orientation='portrait' style={styles.body}>
      <Text style={styles.subtitle}>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Text>
      <Text style={styles.text}>
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
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

  return (
    <div>
      <PDFViewer style={{ width: '50%', height: '50vh' }}>
        <Quixote />
      </PDFViewer>
      <hr />
      <PDFDownloadLink document={<Quixote />} fileName="test.pdf">
        {({ blob, url, loading, error }) =>
          loading ?
            'Loading document...'
            :
            <button style={{backgroundColor: 'blue', color: 'white', padding: '1rem', borderRadius: '1rem'}}>Descargar</button>
        }
      </PDFDownloadLink>
      <hr />
    </div>
  )
}

export default PDFPage;