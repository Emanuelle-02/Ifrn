import React from 'react'
import {View,Text} from 'react-native'
import Global from '../styles/Global';

export function Pagina2(){
    return(
        <View style={Global.paginasContainer}>
            <Text style={Global.mail}>
                PREPARATÓRIO
            </Text>
            <Text style={Global.title}>
                ProITEC 2021 recebe inscrições até o dia 15 de julho
            </Text>
            <Text style={Global.body}>
            09/07/2021 - Programa é destinado a estudantes da rede pública de ensino. Não há limite de vagas.
            </Text>
            <Text style={Global.body}>
                Seguem abertas até o dia 15 de julho o prazo de inscrição na edição 2021 do Programa de Iniciação Tecnológica e Cidadania, o ProITEC.            
            </Text>
            <Text style={Global.body}>
                O Programa é regulamentado pelo  Edital nº 30/2021, da Pró-Reitoria de Ensino do IFRN, a Proen, através da Coordenação de Acesso Discente (Cadis).
            </Text>
            <Text style={Global.body}>
                Para o ProITEC não há limite de vagas. Trata-se de um curso preparatóio de Formação Inicial e Continuada, na modalidade de Educação a Distância, com carga-horária total de 160 horas. O objetivo do Programa é o aprofundamento de aprendizagem de estudantes das escolas da rede pública de ensino do Rio Grande do Norte, contemplando as disciplinas de Língua Portuguesa, Matemática e Ética e Cidadania.
            </Text>
            <Text style={Global.body}>
                O ProITEC é voltado, somente, a estudantes que estejam regularmente matriculados no 9º ano do Ensino Fundamental em escola da rede pública de ensino e que tenham cursado todas as “séries”, ou “anos” anteriores do Ensino Fundamental, exclusivamente em escola da rede pública de ensino. Ou que, já tendo concluído o Ensino Fundamental, o tenha feito, exclusivamente, em escola da rede pública de ensino.
            </Text>
            <Text style={Global.body}>
                Informações extras e demais esclarecimentos poderão ser encaminhados ao e-mail inscricoesifrn@funcern.br. Outra opção é contato via Whatsapp Funcern, pelo (84) 99670-5522. A Funcern é a realizadora dos processos seletivos, com a coordenação da Cadis/Proen/IFRN.
            </Text>  
         </View>
    )
}