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
        flexDirection: 'row', // To align left and right sections horizontally
        padding: 16,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end', // Align image to the right
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50, // To make the image circular
    },
    contentContainer: {
        flex: 3,
        paddingLeft: 16, // To add spacing between the profile picture and content
    },
    dashboardText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});


export default Dashboard