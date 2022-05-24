import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const PokemonList = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72';

  function capitalizeString(name) {
    return name.replace(/^./, name[0].toUpperCase());
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const newArray = json.results.map((pokemon, index) => {
          let indexPokedex = index + 1;
          pokemon.id = indexPokedex + 649;
          pokemon.image =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
            pokemon.id +
            '.png';
          return pokemon;
        });
        setPokemonList(newArray);
      });
  }, []);

  const PokemonItem = ({item}) => {
    return (
      <View style={styles.main_container}>
        <Card>
          <TouchableOpacity
            onPress={() => navigation.navigate('PokemonCard', {item: item})}
            style={styles.container}>
            <Card.Title style={styles.title}>
              {capitalizeString(item.name)}
            </Card.Title>
            <Card.Divider style={{backgroundColor: '#68bee8'}} />
            <Text style={styles.info}>N° Pokédex : {item.id - 1}</Text>
            <Card.Image style={styles.image} source={{uri: item.image}} />
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  const renderItem = ({item}) => <PokemonItem item={item} />;

  return (
    <View>
      <Text style={styles.titleApp}>Liste des Pokemon (6g)</Text>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 30,
    marginLeft: 100,
  },
  title: {
    fontSize: 25,
  },
  titleApp: {
    fontSize: 45,
    color: '#419eae',
    textAlign: 'center',
    margin: 15,
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
  },
  main_container: {
    borderColor: 'red',
    borderStyle: 'solid',
    backgroundColor: '#faaa6d',
  },
});

export default PokemonList;
