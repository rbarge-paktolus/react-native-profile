import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const profilePicture = require('../assets/profile.png');

const sampleData = [
    { id: '1', title: 'Measure Now', info:'Get data through Smart Scale'},
    { id: '2', title: 'Metabolic Panel Testing', info:'Most advance blood test at your doorstep covering 71+ test'},
    { id: '3', title: 'Doctor Connect', info:'Connect with your assigned doctor for any medical consultation.'},
    // Add more items as needed
];

const Dashboard = () => {
    const handleItemPress = (item) => {
        // Handle the click on each item here
        console.log('Item clicked:', item.title);
        // Add your custom logic for item click here
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
                <View style={styles.listItem}>
                    <View style={styles.container}>
                        {/* Left section for dashboard content */}
                        <View style={styles.listInfo}>
                            {/* Add your dashboard content here */}
                            <Text style={styles.headingTitle}>{item.title}</Text>
                            <Text style={styles.titleInfo}>{item.info}</Text>
                            {/* Add other components and content */}
                        </View>
                        {/* Right section for user profile picture */}
                        <View style={styles.clickArrow}>
                            <Text style={styles.titleInfo}>View {'>'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

  return (
    <View>
          <View style={styles.container}>
              {/* Left section for dashboard content */}
              <View style={styles.contentContainer}>
                  {/* Add your dashboard content here */}
                  <Text style={styles.dashboardText}>Hello Rohit!</Text>
                  {/* Add other components and content */}
              </View>

              {/* Right section for user profile picture */}
              <View style={styles.profileContainer}>
                  <Image source={profilePicture} style={styles.profileImage} />
              </View>
          </View>
          <View>
              <FlatList
                  data={sampleData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        margin:10
    },
    listInfo:{
        flex: 3,
    },
    clickArrow:{
        flex: 1,
        alignItems: 'flex-end',
    },
    headingTitle:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    titleInfo:{
        fontSize: 12,
        fontStyle: 'italic', // Use fontStyle instead of fontWeight
    },
    arrowIcon: {
        marginLeft: 10,
    },
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