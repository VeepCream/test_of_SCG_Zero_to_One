import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

// our components props accept a number for the initial value
const HomeScreen:FunctionComponent<null> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  return (
      <View>
        <Button>
          <Text>
            {"test"}
          </Text>
        </Button>
      </View>
  )
}
export default HomeScreen