import React from 'react';
import {AppRegistry, StyleSheet, Image, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Accordion, Icon, Separator,List,ListItem, Item, Picker,  Body} from 'native-base';


export default class ChangeCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      
      
        <View style={styles.box}>  
          <View style={styles.lefticon}>
            <Image  source={require('../../assets/images/businessman.png')} />
          </View>        
          <Item picker style={{width: '100%', paddingLeft: 45, borderBottomWidth: 0}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Men's Fashion"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Men's Fashion" value="key0" />
                <Picker.Item label="Shirt" value="key1" />
                <Picker.Item label="Shoes" value="key2" />
                <Picker.Item label="Sunglasses" value="key3" />
                <Picker.Item label="Belts" value="key4" />
                
              </Picker>
            </Item>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="ios-arrow-down" style={styles.icon} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    height: 42,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 16,
    position: 'relative',
  },
  lefticon: {
    position: 'absolute',
    top: 5,
    left: 20, 
    width: 27,
  },
  btn: {
    backgroundColor: '#da466b',
    color: '#fff',
    fontSize: 20,
    borderRadius: 50,
    width: 42,
    height: 42,
    textAlign: 'center',
    lineHeight: 42,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 42,
  }
});