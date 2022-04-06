import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  // console.log(props,"prop")
  const [data, setData] = useState([]);
  const [animate, setAnimate] = useState(true);

  function handleBackButtonClick() {
    //navigation.goBack()
    BackHandler.exitApp();
    return true;
  }

  const closeActivityIndicator = () =>
    setTimeout(() => {
      setAnimate(false);
    }, 60000);

  useEffect(() => {
    closeActivityIndicator();
    // console.log(animate,'animate')
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  useEffect(() => {
    const fetchData = async () =>
      // declare the async data fetching function
      {
        const data = await fetch(
          'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json',
        ); // get the data from the api
        const resp = await data.json(); // convert the data to json
        setData(resp.articles); // set state with the result
        //console.log(data, 'fshsghjsdh');
      };

    fetchData().catch(console.error);
  }, []); // [] - This empty array shows that it is a componentDidMount() lifecycle method in the functional Component.

  const ItemSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    );
  };

  const Item = ({item, onPress}) => (
    // console.log(item, 'itemmmmm'),
    <TouchableOpacity
      onPress={() => navigation.navigate('detail', {data: item})} //send the prop (item) to detail.js page while onPress the news title
    >
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgb(67, 206, 162)', 'rgb(24, 90, 157)']}
        style={styles.linearGradient}>
        <Text style={styles.paragraph}>{item.title.toUpperCase()}</Text>
      </LinearGradient>
      {/* {console.log(item.title)} */}
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} key={item.title} />;
  };

  return (
    <View style={styles.container} stickyHeaderIndices={[0]}>
      <ImageBackground
        source={{
          uri: 'https://caxtonlocalmedia.co.za/wp-content/uploads/2017/10/caxton-newspapers-middle-banner.jpg',
        }}
        resizeMode="cover"
        style={styles.bgimage}>
        <Text style={styles.title}>TOP HEADLINES</Text>
      </ImageBackground>

      {data.length === 0 && (
        <ActivityIndicator
          animating={animate}
          color="red"
          size="large"
          style={styles.activityIndicator}
        />
      )}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    // backgroundColor: '#40E0D0',
  },
  paragraph: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    // marginHorizontal: 10,
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    lineHeight: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lemonchiffon',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
  },
  linearGradient: {
    borderRadius: 20,
    width: '100%',
    marginVertical: 20,
  },
  bgimage: {
    width: '100%',
  },
})