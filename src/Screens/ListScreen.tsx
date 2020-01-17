import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'native-base';
import { callAPI } from '../Libs/CallAPI';
import DetailComponent from '../Components/DetailComponent';

const ListScreen: any = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    if (data.length === 0) {
      callAPI("getMap").then((value: any) => {
        //console.log("value",value)
        setdata(value.results)
      }).catch(() => {
        console.log("catch")
      })
    }
  })

  const renderRow = ({ item, index }: any) => {
    return <DetailComponent data={item} />
  }

  //console.log(data)

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderRow}
        keyExtractor={(data: any) => { return data.id + "game" }}
      />
    </View>
  )
}

ListScreen.navigationOptions = ({ navigation }: any) => ({
  title: "List Places",
  headerLeft: null
});
export default ListScreen