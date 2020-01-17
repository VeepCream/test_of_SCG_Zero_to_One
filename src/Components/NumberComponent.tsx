import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import { callAPI } from '../Libs/CallAPI';

type typeProps = {
  data: any
}

const NumberComponent: FunctionComponent<typeProps> = ({ data }) => {

  return (
    <View>
      <Card>
        <CardItem>
          <Body>
              <Text>
                {data}
              </Text>
            
          </Body>
        </CardItem>
      </Card>
    </View>
  )
}
export default NumberComponent