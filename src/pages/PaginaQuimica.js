import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaQuimica(){
    return(
        <View style={Global.paginasContainer}>
             <Text style={Global.body}> 
                Contato com a coordenação do curso (Prof. Caio Sena):
            </Text>
            <Text style={Global.mail}>
                E-mail: coliq.pf@ifrn.edu.br 
            </Text>
            <Text style={Global.title}>
            ::: Curso Superior de Licenciatura Plena em Química
            </Text>
            <Text style={Global.title2}>
                Sobre o Curso:
            </Text>  
            <Text style={Global.body}>
                O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico (detergentes, cosméticos, outros), de insumos agrícolas (fertilizantes e defensivos), insumos industriais (corantes, estabilizantes, conservantes, aromatizantes e aditivos em geral para conferir propriedades específicas a certos produtos ou materiais), matérias-primas (solventes, plásticos, borrachas e produtos químicos em geral); o controle de qualidade de matérias-primas e produtos para que os produtos finais atinjam as especificações impostas pelo mercado ou pelos órgãos oficiais de controle sanitário; o tratamento de efluentes industriais, visando a proteção do meio ambiente e o reaproveitamento de subprodutos. Pode atuar também em outras áreas relacionadas aos processos produtivos. Possibilidades de atuação: instituições de ensino, incluindo as de Educação Básica, como professor; em indústrias químicas, petroquímicas, de alimentos e bebidas, de papel e celulose, de cerâmica, de fármacos, têxtil, de pigmentos e tintas, de plásticos e cimento; na área comercial, com vendas, representação e assistência técnica.
            </Text>
            <Text style={Global.title2}>
                Carga Horária:
            </Text>
            <Text style={Global.body}>
                3.404 horas
            </Text> 
            <Text style={Global.title2}>
                Duração do Curso:
            </Text>
            <Text style={Global.body}>
                4 anos
            </Text>
            <Text style={Global.title2}>
                Resolução de criação do curso:
            </Text>
            <Text style={Global.body}>
                Resolução Nº 08/2012-CONSUP/IFRN, de 01/03/2012.    
            </Text>
            <Text style={Global.title2}>
                Campus autorizados a ofertar o curso:
            </Text>
            <Text style={Global.body}>
                Apodi, Currais Novos, Ipanguaçu, Pau dos Ferros   
            </Text>
         </View>
    )
}