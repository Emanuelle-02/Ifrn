import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaDirecoes(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                Endereço:
            </Text>
            <Text style={Global.body}>
                O Campus do IFRN em Pau dos Ferros está instalado num terreno cedido pela prefeitura, com área de 28.820 m², localizado no Bairro Chico Cajá, BR 405, estando localizado na Região do Alto Oeste Potiguar, a cerca de 430 km da capital do Estado.
            </Text>
           
         </View>
    )
}