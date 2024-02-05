import React, { useState } from 'react';
import companyLogo from './companyLogo.png'; // Import the image

const RandomNamePicker = () => {
  const [inputText, setInputText] = useState('');
  const [shiftTimings, setShiftTimings] = useState('');
  const [names, setNames] = useState([]);
  const [randomName, setRandomName] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleShiftTimingsChange = (event) => {
    setShiftTimings(event.target.value);
  };

  const handleAddName = () => {
    setNames([...names, `${inputText} - Shift: ${shiftTimings}`]);
    setInputText('');
    setShiftTimings('');
  };

  const handlePickRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
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
          type="text"
          placeholder="Enter a name"
          value={inputText}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter shift timings"
          value={shiftTimings}
          onChange={handleShiftTimingsChange}
          style={styles.input}
        />
        <button onClick={handleAddName} style={styles.button}>
          Add Name
        </button>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handlePickRandomName} style={styles.button}>
          Pick Random Name
        </button>
      </div>
      {names.length > 0 && (
        <div style={styles.listContainer}>
          <h2 style={styles.listHeading}>Names added to the list:</h2>
          <ul style={styles.list}>
            {names.map((name, index) => (
              <li key={index} style={{ ...styles.listItem, margin: '0 auto' }}>
                <span>{name}</span>
                <button onClick={() => handleDeleteName(index)} style={styles.deleteButton}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {randomName && <p style={styles.randomName}>Randomly picked name: {randomName}</p>}
    </div>
  );
};



const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: '#f9f9f9',
    padding: '20px',
    boxSizing: 'border-box',
    minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    // width: '80px',
    // height: '80px',
    // borderRadius: '50%',
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
  // listItem: {
  //   marginBottom: '10px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   background: '#fff',
  //   padding: '10px',
  //   borderRadius: '4px',
  //   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  // },
  listItem: {
    marginBottom: '16px',
    padding: '12px',
    width: '100%', // Increase the width of the list item box
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
    backgroundColor: '#ff3333',
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
};

export default RandomNamePicker;
