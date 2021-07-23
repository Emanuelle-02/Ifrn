import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaInfo ({navigation} ){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
               Sobre o campus: 
            </Text>
            <Button title="Apresentação" onPress={() => navigation.navigate('PaginaApres')} />
            <Button title="Identidade Visual" onPress={() => navigation.navigate('PaginaIV')} />
            <Button title="Regimento Geral do IFRN" onPress={() => navigation.navigate('PaginaRG')} />
            <Button title="Contato" onPress={() => navigation.navigate('PaginaCont')} />
         </View>
    )
}