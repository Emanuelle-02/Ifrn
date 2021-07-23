import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaApres(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                Apresentação:
            </Text>
            <Text style={Global.body}>
                O Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN), Campus Pau dos Ferros, inaugurado em 2009, integra a II Fase do Plano de Expansão da Rede Federal de Educação Profissional, Científica e Tecnológica do Ministério da Educação, iniciada em 2007.
            </Text>
            <Text style={Global.body}>
                Atende com suas atividades acadêmicas em torno de 30 municípios diferentes, incluindo alguns dos vizinhos estados do Ceará e Paraíba.  A economia da região concentra-se nas atividades comerciais e de serviços de apoio urbano, com potencial para desenvolvimento do turismo e de arranjos produtivos locais nas áreas de beneficiamento de leite e mel, industrialização da carne, alimentação e hospedagem, construção civil, confecções e comércio varejista.
            </Text>
            <Text style={Global.body}>
                O Campus objetiva educar no âmbito científico, técnico e humanístico, visando à formação integral do profissional-cidadão crítico-reflexivo, competente técnica e eticamente para atuar no mundo do trabalho a partir de um compromisso efetivo com as transformações sociais, políticas e culturais.
            </Text>
            <Text style={Global.body}>
               Atualmente, o Campus Pau dos Ferros atua na formação inicial e continuada de trabalhadores; na educação profissional técnica de nível médio; na educação profissional tecnológica de graduação e pós-graduação; e na formação de professores. Fundamenta-se, para isso, na construção reconstrução e transmissão do conhecimento, tendo eixos tecnológicos de Informação e Comunicação e Produção Alimentícia como norteadores de suas atividades. 
            </Text>
         </View>
    )
}