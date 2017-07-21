// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>Hello from the App</Text>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello',
    }
  }
  changeColor() {
    const {text} = this.state
    if(text === 'hello'){
      this.setState({
        text: 'goodbye',
      })
    }
    else{
      this.setState({
        text: 'hello',
      })
    }
  }
  // this.setState(previousState => {
  //   return { showText: !previousState.showText };
  // });
  // onClick= {(e) => this.changeColor(color)}
  render() {
    const {text} = this.state
    return (<View style={styles.container}>
      <Text onPress={this.changeColor.bind(this)}>{text}</Text>
      </View>
    );
  }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#109910',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

