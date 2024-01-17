import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Image, Text } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import {styles} from  './styles';

type Props = TouchableOpacityProps &{
    title: String;
}

//...rest = pegar todas proprieadade e alem as outrs como(activeOpacity)
export function ButtonIcon({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest} >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}