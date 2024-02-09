import React from 'react';
import {Page, Text, Document, Image, View, Font } from '@react-pdf/renderer';
import companyLogo from './GMR_LOGO.jpg';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const MyDocument = ({ names, winner }) => {
  const styles = {
    page: {
      fontFamily: 'Roboto',
      padding: 20,
      fontSize: 12,
    },
    heading2: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      marginBottom: 20,
    },
    table: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: 'auto',
      flexDirection: 'row',
    },
    tableColHeader: {
      width: '25%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      textAlign: 'center',
      padding: 8,
      fontWeight: 'bold',
      backgroundColor: '#f2f2f2',
    },
    tableCol: {
      width: '25%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      textAlign: 'center',
      padding: 8,
    },
    winnerLabel: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  };

  const currentDateTime = new Date().toLocaleString();

  return (
    <Document>
      <Page style={styles.page}>
        <Image src={companyLogo} style={styles.logo} />
        <Text style={styles.heading2}>GMR Random Picker</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Date</Text>
            <Text style={styles.tableColHeader}>Name</Text>
            <Text style={styles.tableColHeader}>Staff ID</Text>
            <Text style={styles.tableColHeader}>Shift Timings</Text>
          </View>
          {names && names.map((entry, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{entry.date}</Text>
              <Text style={styles.tableCol}>{entry.name}</Text>
              <Text style={styles.tableCol}>{entry.staffId}</Text>
              <Text style={styles.tableCol}>{entry.shiftTimings}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.winnerLabel}>Winner:</Text>
        {winner && (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Date</Text>
              <Text style={styles.tableColHeader}>Name</Text>
              <Text style={styles.tableColHeader}>Staff ID</Text>
              <Text style={styles.tableColHeader}>Shift Timings</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>{winner.date}</Text>
              <Text style={styles.tableCol}>{winner.name}</Text>
              <Text style={styles.tableCol}>{winner.staffId}</Text>
              <Text style={styles.tableCol}>{winner.shiftTimings}</Text>
            </View>
          </View>
        )}
        <Text style={{ textAlign: 'center', marginTop: 'auto' }}>Generated on: {currentDateTime}</Text>
      </Page>
    </Document>
  );
};

export default MyDocument;
