import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/style'

import FontAwesome from "react-native-vector-icons/FontAwesome";

class Form extends Component {

constructor(){
super();

this.state = {
    title: "",
    post: "",
};
}

handleSubmit() {
    this.props.submit(this.state.title,this.state.post);
    this.setState({title:'title',post:'post'});
}

render() {
return (
<ImageBackground source = {require ('../images/water1.jpg')} style = {styles.container} >

<Text>Title: </Text>
<TextInput style = {[styles.border, {height: 40}]}
value = {this.state.title}
onChangeText = {(title) => this.setState({title:title})}
/>
<Text>Post: </Text>
<TextInput style = {[styles.border, {height: 80}]}
value = {this.state.post}
onChangeText = {(post) => this.setState({post:post})}
/>

<Button style ={styles.container } title='Submit'
color='green'
onPress = {() => this.handleSubmit()} />

<FontAwesome name='send'



onPress = {() => this.handleDelete()}  color ='green' size ={25}/>

</ImageBackground>

)
}
}

export default Form