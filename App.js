import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    
    return (
      
      <View style={styles.Container}>   

        {/* <Image source={require('./logo.png')} /> */}

          <Text style={styles.title}>BeeBook</Text>
        
            <View style={styles.CenterBox}>
        
              <View style={styles.PostContainer}>
        
                {/* <Input placeholder= "Email"/> */}
              
              </View> 
              {/* Fim da PostContainer */}
        
            </View> 
            {/*Fim da CenterBox*/}
      
      </View> 
      //Fim da Containers
    );
};

const styles = StyleSheet.create({

    Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C2025",
  },
  PostContainer: {
    margin: 20,
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 0.2,
  },
  titleInterno: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  CenterBox: {
    width: 300,
    height: 300,
    backgroundColor: '#FBC531',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});

export default LotsOfStyles;