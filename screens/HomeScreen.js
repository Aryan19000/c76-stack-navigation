//import React from "react";
// import * as React from 'react';
// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// export default class HomeScreen extends React.Components {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>HomeScreen</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>HomeScreen</Text>

            </View>
        )
    }
}