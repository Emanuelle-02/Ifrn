import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaCursos( { navigation} ){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
                Ensino | Cursos
            </Text>
            <Button title="Técnicos Integrados" onPress={() => navigation.navigate('PaginaTecnico')} />
            <Button title="Graduação" onPress={() => navigation.navigate('PaginaSuperior')} />          
         </View>
    )
}