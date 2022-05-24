import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  ScrollView,
} from 'react-native';

const Profil = () => {
  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FadeInView>
          <View style={styles.view1}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.view2}>
            <Text style={{fontSize: 18}}>
              <Text style={styles.info}>Nom :</Text> Lovrocs{' '}
            </Text>
            <Text style={{fontSize: 18}}>
              {' '}
              <Text style={styles.info}>Prénom :</Text> FiFlo{' '}
            </Text>
            <Text style={{fontSize: 18}}>
              {' '}
              <Text style={styles.info}>Age : </Text>32 ans
            </Text>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              <Text style={styles.info}>Loisirs : </Text> Collectionner les
              pokémons, lire
            </Text>
          </View>
        </FadeInView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    marginTop: 55,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#7D78A3',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    margin: 'auto',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profil;
