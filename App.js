import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
    };
  }
  incresevalue = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log('count' + (this.state.count + 1));
  };
  decresevalue = () => {
    {
      this.setState({
        count: this.state.count - 1,
      });
    }
    console.log('count' + this.state.count);
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#004761',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={() => this.decresevalue()}
          style={{
            backgroundColor: 'white',
            height: 60,
            width: '40%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              -1
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: '30%'}}>
          <Text style={{color: '#8cd6bd', fontWeight: 'bold', fontSize: 60}}>
            {this.state.count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.incresevalue()}
          style={{
            backgroundColor: 'white',
            marginTop: '30%',
            height: 60,
            width: '40%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              +1
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Test;
