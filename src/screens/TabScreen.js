import React, {Component} from 'react';

import styles from '../styles/style';

import Form from '../components/Form';

import {StyleSheet, Text,View, ImageBackground} from 'react-native';

class TabScreen extends Component {
constructor(){
super();

this.submit = this.submit.bind(this);
}

submit(title,post) {

if (title && post) {
    fetch('https://protected-spire-82809.herokuapp.com/post',{
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
        body: 'title=' + title +'&post=' +post
        }).then(response => {
        this.props.navigation.navigate('Feed');
        });
    }
}

render(){
return(

<ImageBackground source ={ require('../images/water1.jpg')} style = {styles.container} >

<Form submit= {this.submit} />

</ImageBackground>
);

}
}


export default TabScreen;