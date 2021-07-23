import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaApicultura(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                ::: Curso Técnico Integrado em Apicultura
            </Text>
            <Text style={Global.body}>
                Executa o planejamento, a implantação, a manutenção e a gestão de apiários. Atua no beneficiamento e processamento de mel, própolis, geléia real e demais produtos da atividade apícola. Acompanha pesquisas sobre produção intensiva e artesanal, terapias com mel, controle de qualidade e aprimoramento de espécies. Comercializa produtos apícolas, organiza feiras e exposições da atividade apicultora, incentivando a realização de negócios no setor ou mesmo a criação artesanal de abelhas. Possibilidades de atuação Apiários e demais estabelecimentos de beneficiamento e processamento e comercialização de produtos da apicultura.
            </Text>
            <Text style={Global.body}>
                - Modalidade: Presencial.  
            </Text>
            <Text style={Global.body}>
                - Carga horária do curso: 4.010h. 
            </Text>
            <Text style={Global.body}>
                - Duracão do curso: 4 anos.
            </Text>
            <Text style={Global.body}>
                - Resolucão de criacão do curso: Resolução Nº 24/2011-CONSUP/IFRN, de 09/10/2011.
            </Text>
           
         </View>
    )
}