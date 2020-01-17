import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import { callAPI } from '../Libs/CallAPI';

type typeProps = {
  data: any
}

const DetailComponent: FunctionComponent<typeProps> = ({ data }) => {

  let imageUrl = ""
  if (data.photos) {
    imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${data.photos[0].width}&photoreference=${data.photos[0].photo_reference}&key=AIzaSyDKdwlRhGO2rpeQM9EHHGAqzIgbJxh-zuA`
  }
  return (
    <View>
      <Card>
        <CardItem>
          <Body>
            <View
              style={{ flexDirection: "row" }}>
              <Text>
                {"Name : "}
              </Text>
              <Text>
                {data.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row" }}>
              <Text>
                {"Rating : "}
              </Text>
              <Text>
                {data.rating}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row" }}>
              <Text>
                {"Vicinity : "}
              </Text>
              <Text>
                {data.vicinity}
              </Text>
            </View>
            {data.photos ?
              <Image
                style={{ width: 300, height: 300 }}
                source={{ uri: imageUrl }}
              />
              :
              null
            }
          </Body>
        </CardItem>
      </Card>
    </View>
  )
}
export default DetailComponent