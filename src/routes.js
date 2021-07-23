import React from 'react';
import {FontAwesome5} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {PaginaInstituto} from './pages/PaginaInstituto'; 
import {PaginaInfo} from './pages/PaginaInfo';
import {PaginaApres} from './pages/PaginaApres';
import {PaginaIV} from './pages/PaginaIV';
import {PaginaRG} from './pages/PaginaRG';
import {PaginaCont} from './pages/PaginaCont';
import {PaginaDirecoes} from './pages/PaginaDirecoes';
import {PaginaNoticias} from './pages/PaginaNoticias';
import {Pagina1} from './pages/Pagina1';
import {Pagina2} from './pages/Pagina2';
import {PaginaCursos} from './pages/PaginaCursos';
import {PaginaSuperior} from './pages/PaginaSuperior';
import {PaginaADS} from './pages/PaginaADS';
import {PaginaQuimica} from './pages/PaginaQuimica';
import {PaginaTecnico} from './pages/PaginaTecnico';
import {PaginaAlimentos} from './pages/PaginaAlimentos';
import {PaginaApicultura} from './pages/PaginaApicultura';
import {PaginaInformatica} from './pages/PaginaInformatica';

const Tabs = createBottomTabNavigator();
const InstitutoStack = createStackNavigator();
const CursosStack = createStackNavigator();

/**
 * stack for tabInstituição
 * 
 */

function StackScreenInstituicao() {
  return(
    <InstitutoStack.Navigator> 
      <InstitutoStack.Screen name="PaginaInstituto" component={PaginaInstituto} options={{headerShown:false}}  />
      <InstitutoStack.Screen name="PaginaInfo" component={PaginaInfo}/>
      <InstitutoStack.Screen name="PaginaApres" component={PaginaApres} />
      <InstitutoStack.Screen name="PaginaIV" component={PaginaIV} />
      <InstitutoStack.Screen name="PaginaRG" component={PaginaRG} />
      <InstitutoStack.Screen name="PaginaCont" component={PaginaCont} />
      <InstitutoStack.Screen name="PaginaDirecoes" component={PaginaDirecoes} />
      <InstitutoStack.Screen name="PaginaNoticias" component={PaginaNoticias} />
      <InstitutoStack.Screen name="Pagina1" component={Pagina1} />
      <InstitutoStack.Screen name="Pagina2" component={Pagina2} />
    </InstitutoStack.Navigator>
  )
}

/**
 * stack for tabCursos 
 * @returns 
 */

 function StackScreenCursos() {
  return(
    <CursosStack.Navigator>
      <CursosStack.Screen name="PaginaCursos" component={PaginaCursos} options={{headerShown:false}}  />
      <CursosStack.Screen name="PaginaTecnico" component={PaginaTecnico} />
      <CursosStack.Screen name="PaginaAlimentos" component={PaginaAlimentos}/>
      <CursosStack.Screen name="PaginaApicultura" component={PaginaApicultura} />
      <CursosStack.Screen name="PaginaInformatica" component={PaginaInformatica} />
      <CursosStack.Screen name="PaginaSuperior" component={PaginaSuperior}  />
      <CursosStack.Screen name="PaginaADS" component={PaginaADS} />
      <CursosStack.Screen name="PaginaQuimica" component={PaginaQuimica} />
    </CursosStack.Navigator>
  )
}

export  function Routes() {
  return (
      <Tabs.Navigator 
        tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#631414',
        labelStyle: {
          fontSize: 15,
        },
        inactiveTintColor: '#004000',
      }}
      >
          <Tabs.Screen name="instituicao" 
            options={{
              tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="black"/> ,
              title: 'Instituição',
            }}
          component={StackScreenInstituicao}/>

          <Tabs.Screen name="cursos" 
             options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-graduate" size={24} color="black" />
              ),
              title: 'Cursos',
            }}
          component={StackScreenCursos}/>
      </Tabs.Navigator>
  );
}