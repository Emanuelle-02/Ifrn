import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaCont(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                Contato:
            </Text>
            <Text style={Global.body}>
                E-mail: comunicacao.pf@ifrn.edu.br            
            </Text>
            <Text style={Global.body}>
                Telefone: (84) 4005 4109            
            </Text>
            <Text style={Global.body}>
                Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)            
            </Text>
         </View>
    )
}