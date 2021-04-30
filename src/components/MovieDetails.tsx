import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter  from "currency-formatter";

import { Cast } from '../interfaces/creditsInterface';
import { MovieDetail } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface Props {
    movieDetail: MovieDetail;
    cast: Cast[];
}

export const MovieDetails = ({ movieDetail, cast }: Props ) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={ 15 }
                    />
                    <Text
                        style={{ marginStart: 5,  }}
                    >{ movieDetail.vote_average }</Text>
                    <Text>
                         - { movieDetail.genres.map( g => g.name ).join(', ') }
                    </Text>
                </View>

                {/* Overview */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Vista general
                </Text>
                
                <Text style={{ fontSize: 16 }}>
                    { movieDetail.overview }
                </Text>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>
                    { currencyFormatter.format(movieDetail.budget, { code: 'USD' }) }
                </Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Reparto principal
                </Text>

                <FlatList
                    data={ cast }
                    keyExtractor={ ( item ) => item.id.toString() }
                    renderItem={ ({ item }) => <CastItem actor={ item } />}
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, paddingBottom: 20 }}
                />

            </View>
        </>
    )
}
