import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  BackHandler,
  Image,
  ImageBackground,
  Linking
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';
export default function Detail(props) {
  console.log(props, 'props');
  const navigation = useNavigation();
  function handleBackButtonClick() {
    navigation.navigate('Navigator');
    // BackHandler.exitApp()
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  // console.log(props.route.params.data.image_url, 'image_url');

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        }}
        resizeMode="cover"
        style={styles.bgimage}>
        <View style={styles.container}>
          <Text style={styles.head}>{props.route.params.data.title}</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{flex: 1, height: 2, backgroundColor: 'lemonchiffon'}}
            />
            <View>
              <Text style={styles.subhead} 
              onPress={() => {
               Linking.openURL(props.route.params.data.url); 
              }}>
                {props.route.params.data.source.name} 
              </Text>
            </View>
            <View
              style={{flex: 1, height: 2, backgroundColor: 'lemonchiffon'}}
            />
          </View>

          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={{uri: props.route.params.data.urlToImage}}
            />
          </View>
          <Text style={styles.text}>
            {props.route.params.data.content ||
              props.route.params.data.description}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 0,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 19,
    margin: 20,
    lineHeight: 25,
  },
  head: {
    color: '#43cea2',
    fontSize: 22,
    marginTop: 30,
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadowRadius: 5,
    textShadowColor: 'gray',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subhead: {
    color: 'gold',
    fontSize: 19,
    margin: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 370,
    // backgroundColor: 'white',
  },
  bgimage: {
    // width: '100%',
    height: 750,
    resizeMode: 'cover',
    flex: 1,
  },
});