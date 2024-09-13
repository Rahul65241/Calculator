// components/Calculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Button from './Button';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showExtra, setShowExtra] = useState(false);

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setOutput(evaluate(input).toString());
      } catch (e) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {sdfesf
      setInput(input + value);
    }
  };

  const handleFunction = (func) => {
    switch (func) {
      case '√':
        setInput(input + 'sqrt(');
        break;
      case '^':
        setInput(input + '**');
        break;
      case 'log':
        setInput(input + 'log10(');
        break;
      case 'ln':
        setInput(input + 'log(');
        break;
      case 'sin':
        setInput(input + 'sin(');
        break;
      case 'cos':
        setInput(input + 'cos(');
        break;
      case 'tan':
        setInput(input + 'tan(');
        break;
      default:
        handlePress(func);
        break;
    }
  };

  const buttons = [
    ['C', '√', '^', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '(', ')', '='],
    ['.', 'log', 'ln', 'sin'],
    ['cos', 'tan']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Calculator</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="0"
        placeholderTextColor="#888"
        editable={false}
      />
      <Text style={styles.output}>{output}</Text>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttons.slice(0, 5).map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((btn) => (
              <Button
                key={btn}
                title={btn}
                onPress={() => btn.match(/[√^loglnsincostan]/) ? handleFunction(btn) : handlePress(btn)}
                style={btn === '=' ? styles.equalButton : {}}
              />
            ))}
          </View>
        ))}
        {showExtra && buttons.slice(5).map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((btn) => (
              <Button
                key={btn}
                title={btn}
                onPress={() => btn.match(/[√^loglnsincostan]/) ? handleFunction(btn) : handlePress(btn)}
                style={btn === '=' ? styles.equalButton : {}}
              />
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowExtra(!showExtra)}>
          <Text style={styles.toggleButtonText}>{showExtra ? 'Hide' : 'Show'} Extra Functions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop:StatusBar.currentHeight
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    fontSize: 40,
    textAlign: 'right',
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  output: {
    fontSize: 40,
    textAlign: 'right',
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    color: 'blue',
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  equalButton: {
    backgroundColor: '#4caf50',
  },
  toggleButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  toggleButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Calculator;
