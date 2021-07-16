import React, { useState, useEffect, useMemo } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

import Map from '../map';

const AskLocation = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // const location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        setLocation
      )
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      {location ?
        <Map coordinates={location.coords} />
        : 
        <>
          <Text>Welcome to Wimf !</Text>
          <Text>{text}</Text>
        </>
      }
    </View>
  );
}

export default AskLocation;
