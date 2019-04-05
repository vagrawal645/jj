import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,ImageBackground,TouchableOpacity,Image} from 'react-native';
const {width:WIDTH} = Dimensions.get('window');
import bgimage from './Images/bg.jpg';
import books from './Images/books.png';
import test from './Images/test .png';
import que from './Images/question.png';
import report from './Images/report.png';
//type Props = {};
export default class App extends Component {
  render() {
    return (
      <ImageBackground 
        source={bgimage}
        style={styles.container}
        resizeMode="stretch"
      >
      <View style = {styles.btn1}>
      <TouchableOpacity style = {styles.op}>
        <Text style = {styles.text}>Tests</Text>
      </TouchableOpacity>
      <Image
          style = {styles.book}
          source={test}
        />
      </View>
      <View style = {styles.btn}>
      <Image
          style = {styles.book1}
          source={report}
        />
      <TouchableOpacity style = {styles.op}>
        <Text style = {styles.text}>Reports</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.btn3}>
      <TouchableOpacity style = {styles.op}> 
        <Text style = {styles.text}>Notes</Text>
      </TouchableOpacity>
      <Image
          style = {styles.book}
          source={books}
        />
      </View>
      <View style = {styles.btn}>
      <Image
          style = {styles.book1}
          source={que}
        />
      <TouchableOpacity style = {styles.op}>
        <Text style = {styles.text}>Request</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.logout}>
        <TouchableOpacity>
        <Text style = {styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems:'center',
  },
  btn1:{
    flex:2,
    flexDirection:'row',
    width:WIDTH,
    marginRight:170,
    height:2,
    justifyContent:'center',
    marginTop:120,
    backgroundColor:'#B10707',
    alignItems:'center'
  },
  btn:{
    flex:2,
    marginLeft:150,
    flexDirection:'row',
    width:WIDTH,
    height:2,
    justifyContent:'center',
    marginTop:4,
    backgroundColor:'#B10707',
    alignItems:'center'
  },
  btn3:{
    flex:2,
    flexDirection:'row',
    marginRight:170,
    width:WIDTH,
    height:'100%',
    justifyContent:'center',
    marginTop:4,
    backgroundColor:'#B10707',
    alignItems:'center'
  },
  op:{
    flex:2,
    alignItems:'center',
    borderRadius:50,
    width:100,
    height:80,
    backgroundColor:'#750505',
    justifyContent:'center',
    marginLeft:10
  },
  text:{
    color:'white',
    fontSize:24
  },
  logout:{
    flex:1,
    width:WIDTH-25,
    height:2,
    justifyContent:'center',
    marginTop:6,
    marginBottom:2,
    backgroundColor:'#302E2E',
    alignItems:'center'
  },
  book:{
      height:70,
      width:70,
      marginLeft:10
  },
  book1:{
      height:60,
      width:50,
      //marginRight:-80
  },
})