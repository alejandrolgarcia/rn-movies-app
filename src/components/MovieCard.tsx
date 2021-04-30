import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

export const MovieCard = ({ movie, width = 275, height = 420 }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            activeOpacity={ 0.9 }
            style={{
                width,
                height,
            }}
        >
            <View style={ styles.imageContainer }>
                <Image
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 9,
    },

    image: {
        flex: 1,
        borderRadius: 18,

    }
});
