import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MovieCard } from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props ) => {
    return (
        <View style={{ 
            height: ( title ) ? 270 : 220 
        }}>

            {
                title && (
                    <Text style={{ 
                        fontSize: 25,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                        paddingVertical: 10
                    }}>
                        { title }
                    </Text>
                )
            }

            <FlatList
                data={ movies }
                renderItem={ ({ item }: any ) => (
                    <View style={{ paddingLeft: 10 }}>
                        <MovieCard
                            movie={ item }
                            width={ 130 } height={ 195 }
                        />
                    </View>
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}
