import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/images/profilePic.jpg'
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'

import * as VeterinarioActions from '../../store/module/veterinario/actions'

const SolicitacaoAtendimento = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const dados = useSelector(state => state.veterinario.data);

    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(VeterinarioActions.getVetRequest());
    }, [])

    useEffect(() => {
        setData(dados)
    }, [dados])

    const _renderItem = (item) => {
        return (
            <Styled.Card>
                <View style={{ padding: 15, flexDirection: 'row' }}>
                    <View style={{ width: 0, flexGrow: 1, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Styled.Avatar source={{ uri: item.avatar }} />
                            <Styled.InfoContainer>
                                <Styled.Name>
                                    {item.doctor_name}
                                </Styled.Name>
                                <Styled.Specialization>
                                    {item.specialization}
                                </Styled.Specialization>
                                <Styled.Description numberOfLines={4}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Why do we use it?
                                        </Styled.Description>
                            </Styled.InfoContainer>
                        </View>
                    </View>
                </View>
                <Styled.ButtonContainer>
                    <Styled.ButtonPerfil>
                        <Styled.TextButtonPerfil>Ver Perfil</Styled.TextButtonPerfil>
                    </Styled.ButtonPerfil>
                    <Styled.ButtonAtendimento>
                        <Styled.TextButtonAtendimento>Atendimento</Styled.TextButtonAtendimento>
                    </Styled.ButtonAtendimento>
                </Styled.ButtonContainer>
            </Styled.Card>
        )
    }


    return (
        <>
            <Header title="Solicitar Atendimento" />
            <Styled.Container>
                {/* <ScrollView>
                {data?.map(item => (
                    <Styled.Card key={item.id}>
                        <View style={{ padding: 15, flexDirection: 'row' }}>
                            <View style={{ width: 0, flexGrow: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Styled.Avatar source={avatar} />
                                    <Styled.InfoContainer>
                                        <Styled.Name>
                                            {item.title}
                                        </Styled.Name>
                                        <Styled.Specialization>
                                            Especialista em cachorro
                                            </Styled.Specialization>
                                        <Styled.Description numberOfLines={4}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            Why do we use it?
                                        </Styled.Description>
                                    </Styled.InfoContainer>
                                </View>
                            </View>
                        </View>
                        <Styled.ButtonContainer>
                            <Styled.ButtonPerfil>
                                <Styled.TextButtonPerfil>Ver Perfil</Styled.TextButtonPerfil>
                            </Styled.ButtonPerfil>
                            <Styled.ButtonAtendimento>
                                <Styled.TextButtonAtendimento>Atendimento</Styled.TextButtonAtendimento>
                            </Styled.ButtonAtendimento>
                        </Styled.ButtonContainer>
                    </Styled.Card>
                ))}
            </ScrollView> */}
                <FlatList
                    keyExtractor={item => String(item.id)}
                    data={data}
                    renderItem={({ item }) => _renderItem(item)}
                />
            </Styled.Container>
        </>
    )
}

export default SolicitacaoAtendimento;