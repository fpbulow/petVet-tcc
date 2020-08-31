import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';
import { DrawerItemList } from '@react-navigation/drawer';
import userImg from '../../assets/images/profilePic2.jpg'

export default function Drawer(props) {


    return (
        <Styled.Container>
            <Styled.DrawerHeader>
                <Styled.DrawerHeaderContent>
                    <Styled.DrawerHeaderUserImage source={userImg} />
                    <Styled.DrawerHeaderUserInfo>
                        <Styled.DrawerHeaderUsername>Fernando</Styled.DrawerHeaderUsername>
                        <Styled.DrawerHeaderUserRating>4.0</Styled.DrawerHeaderUserRating>
                    </Styled.DrawerHeaderUserInfo>
                </Styled.DrawerHeaderContent>
            </Styled.DrawerHeader>
            <Styled.DrawerBody>
                <DrawerItemList {...props} activeBackgroundColor="#1FA6D4" activeTintColor="#ffffff" />
                <Styled.LogoutButton>
                    <Styled.ButtonText>Sair</Styled.ButtonText>
                </Styled.LogoutButton>
            </Styled.DrawerBody>
        </Styled.Container>
    );
}