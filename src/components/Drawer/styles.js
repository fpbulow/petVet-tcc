import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const DrawerHeader = styled.View`
    height: 100px;
    background-color: #FFF;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
`;

export const DrawerHeaderContent = styled.View`
    flex-direction: row;
    padding: 20px;
`;

export const DrawerHeaderUserImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #FFFFFF;
`;

export const DrawerHeaderUserInfo = styled.View`
    width: 0;
    flex-grow: 1;
    margin-left: 20px;
    justify-content: center;
`;

export const DrawerHeaderUsername = styled.Text`   
    font-size: 20px;
    color: #7a7a7a;
`;

export const DrawerHeaderUserRating = styled.Text`    
    font-size: 16px;
    color: #7a7a7a;
`;

export const DrawerBody = styled.View`
    padding: 20px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
    background-color: #ff0000;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
`;