import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import formatType from '../utils/FormatTypes';
import formatStat from '../utils/FormatStats';
import formatColorStats from '../utils/FormatColorStats';

const PokemonCard = ({route}) => {
  const {item} = route.params;

  const [arrayTypes, setArrayTypes] = useState([]);
  const [arrayStats, setArrayStats] = useState([]);
  const [arrayAbilities, setArrayAbilities] = useState([]);

  function capitalizeString(name) {
    return name.replace(/^./, name[0].toUpperCase());
  }

  useEffect(() => {
    fetch(item.url)
      .then(response => response.json())
      .then(json => {
        setArrayTypes(
          json.types.map(item => {
            return item.type.name;
          }),
        );
        setArrayStats(
          json.stats.map(item => {
            return item.base_stat;
          }),
        );
        setArrayAbilities(
          json.abilities.map(item => {
            return item.ability.name;
          }),
        );
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <ScrollView>
      <View syle={styles.container}>
        <Card style={styles.container}>
          <Card.Title style={styles.name}>
            {capitalizeString(item.name)}
          </Card.Title>
          <Card.Image style={styles.image} source={{uri: item.image}} />
          <View>
            <Text style={styles.text}>
              {arrayTypes.length !== 0 &&
                arrayTypes.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      borderRadius: 20,
                      backgroundColor: formatType(item),
                    }}>
                    <Text style={styles.textType}>
                      {' '}
                      <Text style={{color: 'white'}}>
                        {' '}
                        {capitalizeString(item)}
                      </Text>{' '}
                    </Text>
                  </View>
                ))}
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textSubTitle}>
              Stats: {'\n'}
              {arrayStats.length !== 0 &&
                arrayStats.map((item, index) => (
                  <Text key={index} style={{color: formatColorStats(item)}}>
                    {' '}
                    <Text style={styles.textStat}>
                      {formatStat(index)}
                    </Text> : {item} {'\n'}
                  </Text>
                ))}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {arrayAbilities.length > 1 ? (
                <Text style={styles.textSubTitle}>Talents : {'\n'}</Text>
              ) : (
                <Text style={styles.textSubTitle}>Talent : {'\n'}</Text>
              )}

              {arrayAbilities.length !== 0 &&
                arrayAbilities.map((item, index) => (
                  <Text key={index} style={styles.textInfo}>
                    {'\n'}
                    {capitalizeString(item)} {'\n'}
                  </Text>
                ))}
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 60,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInfo: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 20,
  },
  textType: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 25,
  },
  textSubTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: 25,
  },
  textStat: {
    textAlign: 'center',
    fontWeight: 'bold',

    color: '#419eae',
  },
});

export default PokemonCard;
