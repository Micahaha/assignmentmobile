import React, { useState } from 'react';
import {View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/handlers/database.js');


const AddHostsScreen = props => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const onHostAdd = () => {
        console.log(name, email)
        if (!name)
        {
            alert('Please enter a name.');
            return;
        }
        if(!email)
        {
            alert('Please enter a Email.');
            return;
        }
        try {
            database.addList(name,email);
        } catch (error) {
            console.log('Error adding list ' + error);
        }
        alert(name + ' Added.')
        // navigation.navigate('Start Shopping!');

    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput
                value={name}
                onChangeText={value => setName(value)}
                style={styles.name}
                placeholder={'Enter Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.name}
                placeholder={'Enter Email'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onHostAdd}>
            <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddHostsScreen