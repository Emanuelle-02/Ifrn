import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaInstituto( {navigation}){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
                IFRN - Campus Pau dos Ferros
            </Text>
            <Button title="Informações sobre o IFRN" onPress={() => navigation.navigate('PaginaInfo')} />
            <Button title="Endereço" onPress={() => navigation.navigate('PaginaDirecoes')} />
            <Button title="Notícias" onPress={() => navigation.navigate('PaginaNoticias')} />          
         </View>
    )
}