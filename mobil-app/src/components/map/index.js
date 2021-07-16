import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Map = ({ coordinates }) => {
  return (
    <View style={styles.container}>
      <Text>Carte</ Text>
      <MapView 
        style={styles.map}
      >
        <MapView.Marker
          coordinate={coordinates}
          title={"user"}
          description={"the position of the current user"}
        />
      </ MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;