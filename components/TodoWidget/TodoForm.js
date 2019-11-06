import React, { useState, useRef } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, TextInput, Button, StyleSheet, Modal, Platform } from 'react-native';

const TodoForm = ({ addGoal, visible, cancelHandler }) => {
  const [inputValue, setInputValue] = useState('');

  const textInput = useRef();

  const submitHandler = () => {
    addGoal(inputValue);
    setInputValue('');
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onShow={() => textInput.current.focus()}
    >
      <SafeAreaView style={styles.modalOverlay}>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.select({ ios: 'padding', android: 'height' })}
          enabled
        >
          <TextInput
            ref={textInput}
            style={styles.input}
            placeholder="Course Goal"
            onChangeText={setInputValue}
            value={inputValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="CANCEL"
                color="red"
                onPress={cancelHandler}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="ADD"
                onPress={submitHandler}
                disabled={!inputValue}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  form: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
  }
});

export default TodoForm;
