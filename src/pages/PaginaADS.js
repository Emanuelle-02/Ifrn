import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaADS(){
    return(
        <View style={Global.paginasContainer}>
             <Text style={Global.title}>
                Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)
            </Text>
            <Text style={Global.body}> 
                Contato com a coordenação do curso (Prof. Irlan Moreira):
            </Text>
            <Text style={Global.mail}>
                E-mail: cotads.pf@ifrn.edu.br 
            </Text>
            <Text style={Global.title}>
            Identificação do Curso
            </Text>
            <Text style={Global.body}>
            Curso Superior de Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) é uma oferta presencial do Campus Pau dos Ferros do IFRN, situado na BR 405, KM 154, Bairro Chico Cajá, Pau dos Ferros/RN. O projeto pedagógico do curso foi aprovado pela Resolução nº 16/2012-CONSUP/IFRN de 01/03/2012.
            </Text>
            <Text style={Global.title2}>
            Sobre o Curso:
            </Text>         
            <Text style={Global.body}>
            O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação deste profissional.            
            </Text>
            <Text style={Global.title2}>
            Carga Horária:
            </Text>
            <Text style={Global.body}>
            2.594 horas
            </Text> 
            <Text style={Global.title2}>
            Duração do Curso:
            </Text>
            <Text style={Global.body}>
            3 anos
            </Text>   
            <Text style={Global.title2}>
            Resolução de criação do curso:
            </Text>
            <Text style={Global.body}>
            Resolução Nº 17/2012-CONSUP/IFRN, de 01/03/2012.
            </Text>     
         </View>
         
    )
}