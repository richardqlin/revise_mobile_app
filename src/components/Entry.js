import React,{Component} from 'react';
import { StyleSheet, Button, View, ImageBackground } from 'react-native';
import styles from '../styles/style'
class Entry extends Component {
render() {
return (
    <ImageBackground source ={require ('../images/water.png')}  style={styles.border}>
    <Button title= {this.props.item.title } onPress= { () =>this.props.toDetails(this.props.item) } />

    </ImageBackground>
);
}
}


export default Entry;



