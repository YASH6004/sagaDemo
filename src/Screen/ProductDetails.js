import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const ProductDetail = props => {
  // console.log("Props from ProductScreen",props)
  const {id, Img, title, qty, price} = props.route.params;
  let [count, setCount] = useState(1);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Items */}
        <View style={styles.itemImg}>
          <Image source={Img} />
        </View>

        {/* Item Title */}
        <View style={styles.itemTitle}>
          <View>
            <Text style={styles.itemTitleTxt}>{title}</Text>
            <Text>{qty}</Text>
          </View>
          <Image
            style={styles.centerView}
            source={require('../Assets/heart.png')}
          />
        </View>

        {/* Rate */}
        <View style={styles.itemRateCard}>
          {/* QTYYYYYYYYY */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                if (count > 1) {
                  setCount((count -= 1));
                }
              }}
              style={{
                justifyContent: 'center',
              }}>
              <Image source={require('../Assets/minus.png')} />
            </TouchableOpacity>
            <View style={styles.itemQty}>
              <TextInput textAlign={'center'} maxLength={2}>
                {count}
              </TextInput>
            </View>
            <TouchableOpacity
              onPress={() => setCount((count += 1))}
              style={{justifyContent: 'center'}}>
              <Image source={require('../Assets/plus.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemRate}>${price}</Text>
        </View>

        {/* Item Detail */}
        <View style={styles.itemDetailCard}>
          <Text style={styles.productDetail}>Product Detail</Text>
          <Image source={require('../Assets/downArrow.png')} />
        </View>

        <View style={styles.productDetailDesc}>
          <Text>
            Apples are nutritious. Apples may be good for weight loss. apples
            may be good for your heart. As part of a healtful and varied diet.
          </Text>
        </View>

        <View style={styles.nutritionCard}>
          <Text style={styles.nutrition}>Nutritions</Text>
          <Image source={require('../Assets/rightArrow.png')} />
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.review}>Review</Text>
          <View style={styles.star}>
            <Image source={require('../Assets/star.png')} />
            <Image source={require('../Assets/star.png')} />
            <Image source={require('../Assets/star.png')} />
            <Image source={require('../Assets/star.png')} />
            <Image source={require('../Assets/star.png')} />
            <Image
              style={styles.lastStar}
              source={require('../Assets/rightArrow.png')}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.basketBtn}>
          <Text style={styles.basketBtnTxt}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  itemImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  itemTitleTxt: {color: '#000', fontSize: 20, fontWeight: 'bold'},
  centerView: {alignItems: 'center', justifyContent: 'center'},
  itemRateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  itemQty: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderColor: '#E2E2E2',
  },
  minusImg: {marginVertical: 20},
  plusImg: {marginVertical: 10},
  itemRate: {marginVertical: 10},
  itemDetailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  productDetail: {color: '#000', fontSize: 15, fontWeight: '500'},
  productDetailDesc: {marginHorizontal: 15, marginVertical: 10},
  nutritionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 30,
  },
  nutrition: {color: '#000', fontSize: 15, fontWeight: '500'},
  reviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  review: {color: '#000', fontSize: 15, fontWeight: '500'},
  star: {flexDirection: 'row'},
  lastStar: {marginLeft: 20},
  basketBtn: {
    backgroundColor: '#53B175',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  basketBtnTxt: {color: '#fff'},
  itemQty: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E2E2E2',
  },
});
