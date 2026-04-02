import {createStackNavigator} from '@react-navigation/stack';
import Oceatrippguiddeload from '../Oceatrippguiddecpnts/Oceatrippguiddeload';
import Oceatrippguiddeonbr from '../Oceatrippguiddescrrns/Oceatrippguiddeonbr';
import Oceatrippguiddetabs from '../../Oceatrippguiddetabs';
import Oceatrippguiddeplcesdet from '../Oceatrippguiddescrrns/Oceatrippguiddeplcesdet';
import Oceatrippguiddeblogdet from '../Oceatrippguiddescrrns/Oceatrippguiddeblogdet';
import Oceatrippguiddefacttsdet from '../Oceatrippguiddescrrns/Oceatrippguiddefacttsdet';
import Oceatrippguiddequzresult from '../Oceatrippguiddescrrns/Oceatrippguiddequzresult';
import Oceatrippguiddequzpla from '../Oceatrippguiddescrrns/Oceatrippguiddequzpla';

const Stack = createStackNavigator();

const Oceatrippguiddesttac = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Oceatrippguiddeload"
        component={Oceatrippguiddeload}
      />
      <Stack.Screen
        name="Oceatrippguiddeonbr"
        component={Oceatrippguiddeonbr}
      />
      <Stack.Screen
        name="Oceatrippguiddetabs"
        component={Oceatrippguiddetabs}
      />
      <Stack.Screen
        name="Oceatrippguiddeplcesdet"
        component={Oceatrippguiddeplcesdet}
      />
      <Stack.Screen
        name="Oceatrippguiddeblogdet"
        component={Oceatrippguiddeblogdet}
      />
      <Stack.Screen
        name="Oceatrippguiddefacttsdet"
        component={Oceatrippguiddefacttsdet}
      />
      <Stack.Screen
        name="Oceatrippguiddequzpla"
        component={Oceatrippguiddequzpla}
      />
      <Stack.Screen
        name="Oceatrippguiddequzresult"
        component={Oceatrippguiddequzresult}
      />
    </Stack.Navigator>
  );
};

export default Oceatrippguiddesttac;
