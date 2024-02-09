import React from 'react';
import {Page, Text, Document, View, Font } from '@react-pdf/renderer';

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
    winnerContainer: {
      marginTop: 20,
      textAlign: 'center',
    },
    winnerLabel: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    winnerDetails: {
      fontSize: 14,
      marginTop: 8,
    },
  };

  return (
    <Document>
      <Page style={styles.page}>
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
        {winner && (
          <View style={styles.winnerContainer}>
            <Text style={styles.winnerLabel}>Winner:</Text>
            <Text style={styles.winnerDetails}>| Date: {winner.date} | Name: {winner.name} | Staff ID: {winner.staffId} | Shift: {winner.shiftTimings} |</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default MyDocument;
