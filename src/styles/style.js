import {StyleSheet, Dimensions, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


border: {
 width: Dimensions.get('window').width * .7,
margin:30,
padding:10,
borderWidth: 1,
borderColor: '#0f0',
},

});


export default styles;