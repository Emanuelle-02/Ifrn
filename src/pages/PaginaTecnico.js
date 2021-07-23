import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaTecnico( { navigation} ){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
                Curso Técnico - Integrado
            </Text>
            <Button title="Curso de Alimentos" onPress={() => navigation.navigate('PaginaAlimentos')} />
            <Button title="Curso de Apicultura" onPress={() => navigation.navigate('PaginaApicultura')} />
            <Button title="Curso de Informática" onPress={() => navigation.navigate('PaginaInformatica')} />
         </View>
    )
}