import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function PaginaIV(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.title}>
                A Marca INSTITUTO FEDERAL
            </Text>
            <Text style={Global.body}>
                Em sua concepção original, a marca IF foi construída sobre a ideia do homem integrado e funcional. Observe que o seu corpo utiliza-se de módulos encaixados, num formato de rede. A marca busca refletir o pensamento humano como ideia central e objeto de educação, formação e capacitação. A marca IF possui três cores. O pensamento forte, expresso e com energia, é representado com o uso da cor vermelha. Como na ecologia, o verde expressa integração na rede.
            </Text>
            <Text style={Global.body}>
                A marca deve ser preservada e apresentada sempre em conformidade com o padrão do "Manual de Aplicação da Marca" vigente, disponível na página de identidade visual, no site da Rede Federal de Educação Profissional, Científica e Tecnológica.
            </Text>
            <Text style={Global.title}>
                MANUAL DE APLICAÇÃO DA MARCA INSTITUTO FEDERAL:
            </Text>
            <Text style={Global.body}>
                Para obter o manual, acesse a página "Identidade Visual" da Rede Federal de Educação Profissional, Científica e Tecnológica:
            </Text>
            <Text style={Global.body}>
                http://redefederal.mec.gov.br/identidade-visual
            </Text>
         </View>
    )
}