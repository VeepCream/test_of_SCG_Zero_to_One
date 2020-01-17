import React, { FunctionComponent, useState } from 'react';
import { View,FlatList } from 'react-native';
import { Button, Text } from 'native-base';

import NumberComponent from '../Components/NumberComponent';

// our components props accept a number for the initial value
const HomeScreen: any = () => {
  const [data, setdata] = useState([3, 5, 9, 15])
  const [number, setnumber] = useState(6)

  const renderRow = ({ item, index }: any) => {
    return <NumberComponent data={item}/>
  }
  const handleLoadMore = () => {
    let newNumber = number + 2
    setnumber(newNumber)
    let newValue = data[data.length -1] + newNumber
    let newdata: any = data
    newdata.push(newValue)
    setdata(newdata)

  };
  return (
      <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderRow}
        keyExtractor={(data: any,index: number) => { return index + "game" + data }}
        onEndReached={()=>handleLoadMore()}
      />
      </View>
  )
}

HomeScreen.navigationOptions = ({ navigation }: any) => ({
  title: "Sequence",
  headerLeft: null
});
export default HomeScreen