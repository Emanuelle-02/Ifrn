import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaSuperior( {navigation} ){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
                Curso Superior
            </Text>
            <Button title="Técnico em Análise e Desenvolvimento de Sistemas (ADS)" onPress={() => navigation.navigate('PaginaADS')} />
            <Button title="Licenciatura em Química" onPress={() => navigation.navigate('PaginaQuimica')} />        
         </View>
    )
}