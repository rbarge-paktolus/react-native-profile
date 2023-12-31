import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const profilePicture = require('../assets/profile.png');

const Dashboard = () => {
  return (
      <View style={styles.container}>
          {/* Left section for dashboard content */}
          <View style={styles.contentContainer}>
              {/* Add your dashboard content here */}
              <Text style={styles.dashboardText}>Welcome to the Dashboard!</Text>
              {/* Add other components and content */}
          </View>

          {/* Right section for user profile picture */}
          <View style={styles.profileContainer}>
              <Image source={profilePicture} style={styles.profileImage} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        padding: 10,
    },
    centeredTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashboardText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
});

export default Dashboard