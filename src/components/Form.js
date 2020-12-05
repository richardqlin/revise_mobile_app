import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from '../styles/style'

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
<View style = {styles.container} >

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

<Button title='Submit'
color='green'
onPress = {() => this.handleSubmit()} />

</View>

)
}
}

export default Form