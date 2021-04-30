import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel  from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

// obtener width de la pantalla del dispositivo
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    
    if ( isLoading )  {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }} >
                
                {/* Carousel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={ nowPlaying }
                        renderItem={ ({ item }: any ) => <MovieCard movie={ item }/>}
                        sliderWidth={ windowWidth }
                        itemWidth={ 275 }
                        inactiveSlideOpacity={ 0.9 }
                    />
                </View>

                {/* Carousel populares */}
                <HorizontalSlider
                    title="Populares"
                    movies={ popular }
                />

                <HorizontalSlider
                    title="Mejor valoradas"
                    movies={ topRated }
                />

                <HorizontalSlider
                    title="Proximamente"
                    movies={ upcoming }
                />

            </View>
        </ScrollView>
    )
}
