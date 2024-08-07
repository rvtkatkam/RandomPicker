// import React, { useState } from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import MyDocument from './MyDocument';
// import companyLogo from './companyLogo.png'; // Import the image
//
// const RandomNamePicker = () => {
//   const [inputText, setInputText] = useState('');
//   const [staffId, setStaffId] = useState('');
//   const [shiftTimings, setShiftTimings] = useState('');
//   const [date, setDate] = useState('');
//   const [names, setNames] = useState([]);
//   const [winners, setWinners] = useState([]);
//
//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };
//
//   const handleStaffIdChange = (event) => {
//     setStaffId(event.target.value);
//   };
//
//   const handleShiftTimingsChange = (event) => {
//     setShiftTimings(event.target.value);
//   };
//
//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };
//
//   const handleAddName = () => {
//     const newNameEntry = {
//       date: date,
//       name: inputText,
//       staffId: staffId,
//       shiftTimings: shiftTimings
//     };
//     setNames([...names, newNameEntry]);
//     setInputText('');
//     setStaffId('');
//     setShiftTimings('');
//     setDate('');
//   };
//
//   const handlePickWinners = () => {
//     const numberOfWinners = Math.ceil(names.length * 0.25);
//     const shuffledNames = [...names].sort(() => 0.5 - Math.random());
//     const selectedWinners = shuffledNames.slice(0, numberOfWinners);
//     setWinners(selectedWinners);
//   };
//
//   const handleDeleteName = (index) => {
//     const updatedNames = [...names];
//     updatedNames.splice(index, 1);
//     setNames(updatedNames);
//   };
//
//   return (
//     <div style={styles.container}>
//       <img src={companyLogo} alt="Company Logo" style={styles.logo} />
//       <h1 style={styles.heading}>Random Picker</h1>
//       <div style={styles.inputContainer}>
//         <input
//           type="date"
//           placeholder="Enter date"
//           value={date}
//           onChange={handleDateChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter staff ID"
//           value={staffId}
//           onChange={handleStaffIdChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter staff name"
//           value={inputText}
//           onChange={handleInputChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter shift/time"
//           value={shiftTimings}
//           onChange={handleShiftTimingsChange}
//           style={styles.input}
//         />
//         <button onClick={handleAddName} style={styles.button}>
//           ADD
//         </button>
//       </div>
//       {names.length > 0 && (
//         <div style={styles.listContainer}>
//           <h2 style={styles.listHeading}>List of names added:</h2>
//           <ul style={styles.list}>
//             {names.map((entry, index) => (
//               <li key={index} style={{ ...styles.listItem, margin: '0 auto' }}>
//                 <span>{`${entry.date} | ${entry.staffId}:${entry.name} | Shift: ${entry.shiftTimings}`}</span>
//                 <button onClick={() => handleDeleteName(index)} style={styles.deleteButton}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div style={styles.resultContainer}>
//         <button onClick={handlePickWinners} style={styles.button}>
//           Pick Random Winners
//         </button>
//         {winners.length > 0 && (
//           <>
//             <h2 style={styles.winnersHeading}>Winners:</h2>
//             <ul style={styles.list}>
//               {winners.map((entry, index) => (
//                 <li key={index} style={styles.listItem}>
//                   <span>{`${entry.date} | ${entry.staffId}:${entry.name} | Shift: ${entry.shiftTimings}`}</span>
//                 </li>
//               ))}
//             </ul>
//             <PDFDownloadLink document={<MyDocument data={names} winners={winners} />} fileName="result.pdf">
//               {({ loading }) =>
//                 loading ? 'Loading document...' : <button style={styles.pdfButton}>Download PDF</button>
//               }
//             </PDFDownloadLink>
//           </>
//         )}
//       </div>
//       <footer style={styles.footer}>
//         <p>&copy; 2024 rvtkatkam. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };
//
// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     background: '#f9f9f9',
//     padding: '20px',
//     boxSizing: 'border-box',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   logo: {
//     marginBottom: '20px',
//   },
//   heading: {
//     fontSize: '36px',
//     margin: '0',
//     color: '#333',
//   },
//   inputContainer: {
//     display: 'flex',
//     marginBottom: '20px',
//   },
//   input: {
//     flex: '1',
//     padding: '10px',
//     marginRight: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     padding: '10px',
//     cursor: 'pointer',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//   },
//   buttonContainer: {
//     marginBottom: '20px',
//   },
//   listContainer: {
//     marginTop: '20px',
//   },
//   listHeading: {
//     fontSize: '18px',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   list: {
//     listStyleType: 'none',
//     padding: '0',
//   },
//   listItem: {
//     marginBottom: '16px',
//     padding: '6px',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     background: '#fff',
//     borderRadius: '4px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   deleteButton: {
//     padding: '8px 12px',
//     cursor: 'pointer',
//     backgroundColor: '#D04848',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '14px',
//   },
//   randomName: {
//     marginTop: '20px',
//     fontSize: '18px',
//     color: '#333',
//   },
//   resultContainer: {
//     marginTop: '16px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   winnersHeading: {
//     fontSize: '24px',
//     marginTop: '20px',
//     color: '#333',
//   },
//   footer: {
//     marginTop: 'auto',
//     textAlign: 'center',
//     color: '#777',
//     padding: '16px',
//   },
//   pdfButton: {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     marginTop: '16px',
//   },
// };
//
// export default RandomNamePicker;

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import companyLogo from './companyLogo.png'; // Import the image

const RandomNamePicker = () => {
  const [inputText, setInputText] = useState('');
  const [staffId, setStaffId] = useState('');
  const [shiftTimings, setShiftTimings] = useState('');
  const [date, setDate] = useState('');
  const [names, setNames] = useState([]);
  const [winners, setWinners] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleStaffIdChange = (event) => {
    setStaffId(event.target.value);
  };

  const handleShiftTimingsChange = (event) => {
    setShiftTimings(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddName = () => {
    const newNameEntry = {
      date: date,
      name: inputText,
      staffId: staffId,
      shiftTimings: shiftTimings
    };
    setNames([...names, newNameEntry]);
    setInputText('');
    setStaffId('');
    setShiftTimings('');
    setDate('');
  };

  const handlePickWinners = () => {
    const numberOfWinners = Math.ceil(names.length * 0.25);
    const shuffledNames = [...names].sort(() => 0.5 - Math.random());
    const selectedWinners = shuffledNames.slice(0, numberOfWinners);
    setWinners(selectedWinners);
  };

  const handleDeleteName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  return (
    <div style={styles.container}>
      <img src={companyLogo} alt="Company Logo" style={styles.logo} />
      <h1 style={styles.heading}>Random Picker</h1>
      <div style={styles.inputContainer}>
        <input
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={handleDateChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter staff ID"
          value={staffId}
          onChange={handleStaffIdChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter staff name"
          value={inputText}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter shift/time"
          value={shiftTimings}
          onChange={handleShiftTimingsChange}
          style={styles.input}
        />
        <button onClick={handleAddName} style={styles.button}>
          ADD
        </button>
      </div>
      {names.length > 0 && (
        <>
          <div style={styles.listContainer}>
            <h2 style={styles.listHeading}>List of names added:</h2>
            <ul style={styles.list}>
              {names.map((entry, index) => (
                <li key={index} style={{ ...styles.listItem, margin: '0 auto' }}>
                  <span>{`${entry.date} | ${entry.staffId}:${entry.name} | Shift: ${entry.shiftTimings}`}</span>
                  <button onClick={() => handleDeleteName(index)} style={styles.deleteButton}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <PDFDownloadLink document={<MyDocument data={names} winners={winners} />} fileName="names.pdf">
            {({ loading }) =>
              loading ? 'Loading document...' : <button style={styles.pdfButton}>Download PDF</button>
            }
          </PDFDownloadLink>
        </>
      )}
      <div style={styles.resultContainer}>
        <button onClick={handlePickWinners} style={styles.button}>
          Pick Random Winners
        </button>
        {winners.length > 0 && (
          <>
            <h2 style={styles.winnersHeading}>Winners:</h2>
            <ul style={styles.list}>
              {winners.map((entry, index) => (
                <li key={index} style={styles.listItem}>
                  <span>{`${entry.date} | ${entry.staffId}:${entry.name} | Shift: ${entry.shiftTimings}`}</span>
                </li>
              ))}
            </ul>
            <PDFDownloadLink document={<MyDocument data={names} winners={winners} />} fileName="winners.pdf">
              {({ loading }) =>
                loading ? 'Loading document...' : <button style={styles.pdfButton}>Download PDF</button>
              }
            </PDFDownloadLink>
          </>
        )}
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 rvtkatkam. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: '#f9f9f9',
    padding: '20px',
    boxSizing: 'border-box',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '36px',
    margin: '0',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  listContainer: {
    marginTop: '20px',
  },
  listHeading: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '16px',
    padding: '6px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    padding: '8px 12px',
    cursor: 'pointer',
    backgroundColor: '#D04848',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
  },
  randomName: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
  },
  resultContainer: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  winnersHeading: {
    fontSize: '24px',
    marginTop: '20px',
    color: '#333',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#777',
    padding: '16px',
  },
  pdfButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    marginTop: '16px',
  },
};

export default RandomNamePicker;
