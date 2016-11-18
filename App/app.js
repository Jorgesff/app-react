import React, {Component} from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    Alert,
    Button,
    Dimensions,
    Animated
} from 'react-native';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    }
    this.animation = {
      fadeAnim: new Animated.Value(0),
    }
  }
  componentDidMount(){
    Animated.timing(          // Uses easing functions
      this.animation.fadeAnim,    // The value to drive
      {toValue: 1}            // Configuration
    ).start();                // Don't forget start!
  }
  handlerLogin(e){
    this.setState({email: e });
    console.log(this.state);
  }
  handlerPassword(e){
    this.setState({password: e });
    console.log(this.state);
  }
  // handlerBtn(){
  //   fetch('')
  // }
  render() {
      return (
          <Animated.View style={styles.mainBack}>
              <Image source={require('./images/background.jpg')} style={styles.imgBack}></Image>
              <View style={styles.mainCont}>
                <Image style={styles.logo} source={require('./images/logo_seugado.png')}></Image>
                <TextInput
                  style={styles.login}
                  placeholder='Email'
                  keyboardType='email-address'
                  onChangeText={(text) => {this.handlerLogin(text)}}
                />
                <TextInput style={styles.password}
                  placeholder='Senha'
                  secureTextEntry
                  maxLength= {16}
                  onChangeText={(text) => {this.handlerPassword(text)}}
                />
                <Button onPress={() => Alert.alert('Sucesso', 'Você logou com sucesso', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    }, {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')
                    }
                ])}
                style={styles.btnLogin}
                title="Entrar"
                color="rgb(55, 107, 42)"
                onPress={this.handlerBtn()}
                ></Button>
              </View>
          </Animated.View>
      );
  }
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    mainBack: {
        flex: 1,

        // justifyContent: 'center'
    },
    mainCont: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 130
    },
    imgBack: {
        position: 'absolute',
        flex: 1,
        height: window.height,
        width: window.width,
        opacity: 0.3,
        // flexDirection: 'column'
        zIndex: -1
    },
    viewMain: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 1
    },
    logo: {
        height: 100,
        width: 300
    },
    btnLogin: {
        marginTop: 100,
        borderRadius: 30
    },
    login: {
        color: 'rgb(22, 55, 28)',
        height: 50,
        width: 190,
        textAlign: 'center'
    },
    password: {
        color: 'rgb(22, 55, 28)',
        height: 50,
        width: 190,
        textAlign: 'center'
    }
});
