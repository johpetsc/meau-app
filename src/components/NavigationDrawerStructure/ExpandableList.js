import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class ExpandableList extends Component {
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
  }
  onButtonPress = () => {
    if(this.state.layoutHeight == null){
      this.setState({
        layoutHeight: 0
      });
    }else{
      this.setState({
        layoutHeight: null
      });
    } 
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.onButtonPress}
              style={styles.header}>
              <Text style={styles.headerText}>{this.props.categoria}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: this.state.layoutHeight,
                overflow: 'hidden',
              }}>
              {this.props.lista}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  }
});