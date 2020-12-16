import React , {Component} from 'react';

import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, Text, FlatList,StyleSheet,Button,ImageBackground } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {
constructor () {
super();
this.state = {
entries: [],
};
this.toDetails = this.toDetails.bind(this);
this.handleDelete = this.handleDelete.bind(this);
}

toDetails(item) {
this.props.navigation.navigate('Details',item);
}

componentDidMount(){
fetch ('https://protected-spire-82809.herokuapp.com/entries').then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}));
}

componentWillReceiveProps() {
    this.componentDidMount();
}

handleDelete() {
fetch('https://protected-spire-82809.herokuapp.com/delete', {
method: 'DELETE'
}).then(response => {
    this.props.navigation.navigate('Feed');
});

}


render(){

return (
<ImageBackground source={require('../images/water.png')} style ={styles.container} >

    { (this.state.entries.length >0)?
    
<FlatList
data = {this.state.entries}
renderItem = { ({item}) => <Entry item = {item} toDetails={this.toDetails} />}
keyExtractor = {item => item['_id']}
/>

    : <Text style = {styles.contain}> No Data </Text>
}
    
<Button title='DELETE'
color='red'
onPress = {() => this.handleDelete()} />

  <FontAwesome name='trash-o' onPress = {() => this.handleDelete()}  color ='red' size ={25}/>
      
      
}

</ImageBackground>

);

}
}


export default HomeScreen
