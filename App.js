import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';
import {Button, ThemeProvider, Tile, Header} from 'react-native-elements';

export default function App() {
  return (
    <React.Fragment>    
    <Aheader />
        <View style={styles.container}>
        <View style={styles.card}>
        <Text>TESTE</Text>
        </View>
        <View style={styles.card} >
        <Text>TESTE</Text>
        </View>
        <View style={styles.card} >
        <Text>TESTE</Text>
        </View>
        <View style={styles.card} >
        <Text>TESTE</Text>
        </View>
        <View style={styles.card} >
        <Text>TESTE</Text>
        </View>
        <View style={styles.card} >
        <Text>TESTE</Text>
        </View>
        </View>
    </React.Fragment>
   );
}


//COMPONENTES
const Atiles = () => {

  return(
    <Tile 
    imageSrc={require('./img/teste.jpg')}
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
    featured
    caption="Some Caption Text"
    //imageContainerStyle= {{ height: 170, width: 170}}
    />
  );

}
const Aheader  = () => {
  return(
    <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'TESTE DE LAYOUT', style: { color: '#fff' } }}
    />
  )
}

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15
  },
  card: {
    height: 145,
    width: '45%',
    margin: 5,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    paddingTop: 57
  },
  card2: {
    height: 145,
    width: '45%',
    margin: 5,
    alignItems: 'center',
    paddingTop: 57
  }
});