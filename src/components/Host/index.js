import React from 'react';
import styles from './styles';
import {Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Host = props => {

    const host = props.host;


    const navigation = useNavigation();
    
    const onPress = () => {
        console.log("name: " + host.name);
         
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress = {onPress}>
            <View style={{flex: 3}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.store} numberOfLines={1}>{post.email}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Host;