import React from 'react';
import { Page, Text, Document, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import companyLogo from './companyLogo.png'; // Import the image

// Register the font
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const MyDocument = ({ data, winners }) => (
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
        {data && data.map((entry, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCol}>{entry.date}</Text>
            <Text style={styles.tableCol}>{entry.name}</Text>
            <Text style={styles.tableCol}>{entry.staffId}</Text>
            <Text style={styles.tableCol}>{entry.shiftTimings}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.heading2}>Winners</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Date</Text>
          <Text style={styles.tableColHeader}>Name</Text>
          <Text style={styles.tableColHeader}>Staff ID</Text>
          <Text style={styles.tableColHeader}>Shift Timings</Text>
        </View>
        {winners && winners.map((entry, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCol}>{entry.date}</Text>
            <Text style={styles.tableCol}>{entry.name}</Text>
            <Text style={styles.tableCol}>{entry.staffId}</Text>
            <Text style={styles.tableCol}>{entry.shiftTimings}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.timestamp}>Generated on: {new Date().toLocaleString()}</Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 20,
    fontSize: 12,
  },
  logo: {
    marginBottom: 20,
  },
  heading2: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
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
  timestamp: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
  },
});

export default MyDocument;
