import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../Header/Header';
import TopSearchBox from './TopSearchBox'
import PayAndGo from './PayAndGo'
import Tags from './Tags'
import Heading from './Heading'
import StoreScreen from './StoreScreen'




export default class StoreSearchResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <TopSearchBox navigation={this.props.navigation} />
          <PayAndGo navigation={this.props.navigation} />
          <Tags navigation={this.props.navigation} />
          <Heading navigation={this.props.navigation} />
        <StoreScreen />     
        </ScrollView>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
