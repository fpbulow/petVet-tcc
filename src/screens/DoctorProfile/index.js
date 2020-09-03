import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header'
import avatar from '../../assets/images/profilePic2.jpg'
import * as Styled from './styles';

const DoctorProfile = () => {
    return (
        <>
            <Header title="Doctor Profile" />
            <Styled.Container>
                <Styled.Card >
                    <View style={{ padding: 15, flexDirection: 'row' }}>
                        <View style={{ width: 0, flexGrow: 1, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Styled.Avatar source={avatar} />
                                <Styled.InfoContainer>
                                    <Styled.Name>
                                        Nome Doctor
                                    </Styled.Name>
                                    <Styled.Specialization>
                                        specializacao
                                    </Styled.Specialization>
                                    <Styled.Description numberOfLines={4}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Why do we use it?
                                    </Styled.Description>
                                </Styled.InfoContainer>
                            </View>
                        </View>
                    </View>
                </Styled.Card>
                <Styled.DoctorDetailsContainer>

                </Styled.DoctorDetailsContainer>
            </Styled.Container>
        </>
    )
}

export default DoctorProfile;