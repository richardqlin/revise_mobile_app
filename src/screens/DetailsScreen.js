import React, { Component } from'react';
import styles from '../styles/style';
import { StyleSheet, Text, View ,ImageBackground,Image } from 'react-native';


class DetailsScreen extends Component {

render()
{
return (



<ImageBackground source = {require ('../images/water.png')} style={styles.container} >


<Text style={styles.contain }> {this.props.navigation.state.params.post} </Text>

</ImageBackground>
)
}
}

export default DetailsScreen;
