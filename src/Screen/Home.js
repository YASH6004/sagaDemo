import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
// import {fetchProducts} from '../store/Modules/getProducts/action';
// import {useSelector,useDispatch} from 'react-redux'



const data = [
  {
    id: 1,
    Img: require('../Assets/BoilChicken.png'),
    title: 'Boiler Chicken',
    qty: '1kg',
    price: '4.99',
    color: '#234455',
  },
  {
    id: 2,
    Img: require('../Assets/pngfuel1.png'),
    title: 'sprite',
    qty: '355ml',
    price: 1.99,
    color: 'red',
  },
  {
    id: 3,
    Img: require('../Assets/pngfuel.png'),
    title: 'Diet Coke',
    qty: '355ml',
    price: 1.339,
  },
  {
    id: 8,
    Img: require('../Assets/ginger.png'),
    title: 'Ginger',
    qty: '200gm',
    price: 2.99,
  },
  {
    id: 5,
    Img: require('../Assets/pepper.png'),
    title: 'Bell Pepper Red',
    qty: '1kg',
    price: 4.99,
  },
  {
    id: 6,
    Img: require('../Assets/eggs.png'),
    title: 'Egg Chicken Red',
    qty: '4pcs',
    price: 1.99,
  },
  {
    id: 7,
    Img: require('../Assets/OrganicBanana.png'),
    title: 'Organic Bananas',
    qty: '12Kg',
    price: 3.01,
  },
];

const numCol = 2;
const WIDTH = Dimensions.get('window').width - 30;

const renderItem = ({item}, navigation) => {
  return (
    // CARD1111111111111111111111
    <View style={styles.itemCard1}>
      <TouchableOpacity>
        <View style={styles.itemCardImg}>
          <Image source={item.Img} />
          {/* <Text>Img</Text> */}
        </View>

        <View style={styles.itemCardDes}>
          <Text style={styles.itemCardHead}>{item.title}</Text>
          <Text>{item.qty}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.itemPriceView}>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity
          style={styles.itemQtyBtn}
          onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
              Img: item.Img,
              title: item.title,
              qty: item.qty,
              price: item.price,
            })
          }>
          <Image source={require('../Assets/plusWhite.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  // const data = useSelector(state=>{state.getProducts})
  // const dispatch = useDispatch()
  
//   useEffect(() => {
//     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
//   }, []);
//   useEffect(() => {
//     fetchProducts();
//   }, []);
// console.log(data)
if (data){
  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      renderItem={item => renderItem(item, navigation)}
      numColumns={numCol}
      keyExtractor={item => item.id}
    />
  );
}else{
  return null
}
  
};

export default Home;

const styles = StyleSheet.create({
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginHorizontal: 7,
    marginVertical: 10,
    width: WIDTH / numCol,
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
  },

  itemCardDes: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemCardHead: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  itemPriceView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemPrice: {
    marginVertical: 10,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemQtyBtn: {
    marginLeft: 60,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
