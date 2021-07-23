import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaRG(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                Regimento Geral do IFRN:
            </Text>
            <Text style={Global.body}>
                Aprovado pela Resolução nº. 15/2010-CONSUP/IFRN, de 29/10/2010, Regimento Geral do IFRN é o conjunto de normas que disciplinam a organização, as competências e o funcionamento das instâncias deliberativas, consultivas, administrativas e acadêmicas do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN), com o objetivo de complementar e normatizar as disposições estatutárias.
            </Text>
            <Text style={Global.body}>
                Acesse o Regimento Geral do IFRN.
            </Text>
         </View>
    )
}