import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';
import {Button} from '../components/Button';

export function PaginaNoticias ( { navigation} ){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.head}>
               Notícias 
            </Text>
            <Button title="13/07/2021 - Eleição do Conselho Superior chega a resultado final" onPress={() => navigation.navigate('Pagina1')} />
            <Button title="09/07/2021 - ProITEC 2021 recebe inscrições até o dia 15 de julho" onPress={() => navigation.navigate('Pagina2')} />
           
         </View>
    )
}