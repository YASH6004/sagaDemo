// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Cart = () => {
//   return (
//     <View>
//       <Text>Cart</Text>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({})

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler';

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
const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{justifyContent: 'center', marginTop: 40, marginLeft: 20}}
        source={item.Img}
      />

      <View>
        <Text
          style={{
            justifyContent: 'center',
            marginTop: 35,
            marginLeft: 45,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            marginTop: 0,
            marginLeft: 45,
            color: '#000',
          }}>
          {item.qty}
        </Text>
     <TouchableOpacity 
     onPress={()=>alert('ad')}>
     <Image
          style={{justifyContent: 'center', marginTop: 28, marginLeft: 45}}
          source={require('../Assets/minus.png')}
        />
     </TouchableOpacity>

        <View style={{justifyContent: 'center', marginTop: -8, marginLeft: 85}}>
          <Text>1</Text>
        </View>
        <TouchableOpacity 
     onPress={()=>alert('ad')}>
        <Image
          style={{justifyContent: 'center', marginTop: -15, marginLeft: 115}}
          source={require('../Assets/plus.png')}
        />
        </TouchableOpacity>
      </View>
      {/* CROSSS BTN */}
      <TouchableOpacity
      onPress={()=>alert('cross')}>
      <Image
        style={{justifyContent: 'center', marginTop: 40, marginLeft: 100}}
        source={require('../Assets/greyCross.png')}
      />
      </TouchableOpacity>
      <Text
        style={{
          justifyContent: 'center',
          marginTop: 90,
          marginLeft: -25,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {item.price}
      </Text>
    </View>
  );
};

const Cart = () => {

  return (
    <View style={{marginBottom:400}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
          My Cart
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* BUTONNNNNNNNNN */}
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginVertical: 40,
              padding: 20,
              backgroundColor: '#53B175',
              borderRadius: 15,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
            }}
            // onPress={()=>{navigation.navigate('OrderAccepted')}}
            // onPress={() => setModal(true)}
          >
            <Text style={{color: '#000', fontWeight: 'bold', marginRight: 70}}>
              Go to Checkout
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>$12.97</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
