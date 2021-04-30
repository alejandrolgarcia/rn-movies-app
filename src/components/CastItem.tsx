import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

export const CastItem = ( { actor }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

    return (
        <View style={ styles.cardContainer }>
            
            <View style={ styles.imageContainer }>
                {
                    uri
                        ? (
                            <Image
                                source={{ uri }}
                                style={ styles.image }
                            />
                        )
                        : (
                            <Image
                                source={{ uri: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' }}
                                style={ styles.image }
                            /> 
                        )
                }
            </View>

            <View style={{ padding: 10, height: 80 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold'}}>
                    { actor.name }
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.8 }}>
                    { actor.character }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        width: 150,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3,

        elevation: 9,

        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10,
        marginLeft: 20,
    },

    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
    },

    image: {
        flex: 1,
        height: 200,
        width: 150
    }


});
