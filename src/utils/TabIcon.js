import Icon from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg-uri';

const getTabBarIcon = (focused, name) => {
    const iconSize = 20; // You can adjust the icon size as per your preference

    switch (name) {
        case 'Dashboard':
            return focused ? (
                <SvgUri
                    width={iconSize}
                    height={iconSize}
                    uri={require('../assets/icons/health_icon.svg')}
                    fill="blue"
                />
            ) : (
                <SvgUri
                    width={iconSize}
                    height={iconSize}
                        uri={require('../assets/icons/health_icon.svg')}
                    fill="gray"
                />
            );
        case 'Activity':
            return focused ? (
                <Icon name="activity" size={iconSize} color="blue" />
            ) : (
                <Icon name="activity-outline" size={iconSize} color="gray" />
            );

        case 'Upgrade':
            return focused ? (
                <Icon name="arrow-up-circle" size={iconSize} color="blue" />
            ) : (
                <Icon name="arrow-up-circle-outline" size={iconSize} color="gray" />
            );

        case 'Settings':
            return focused ? (
                <Icon name="settings" size={iconSize} color="blue" />
            ) : (
                <Icon name="settings-outline" size={iconSize} color="gray" />
            );

        default:
            return null;
    }
};
export default getTabBarIcon;