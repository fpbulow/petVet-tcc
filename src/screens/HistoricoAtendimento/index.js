import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native'

import * as HistoricoActions from '../../store/module/historico/actions'


const HistoricoAtendimento = () => {


    const dispatch = useDispatch();

    const dados = useSelector(state => state.historico.data);

    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(HistoricoActions.getHistoricoRequest());
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
                                    {item.data_atendimento}
                                </Styled.Specialization>
                                <Styled.Description numberOfLines={4}>
                                    {item.comentarios_atendimento}
                                </Styled.Description>
                            </Styled.InfoContainer>
                        </View>
                    </View>
                </View>
                <Styled.ButtonContainer>
                    <Styled.ButtonPerfil>
                        <Styled.TextButtonPerfil>Visualizar Atendimento </Styled.TextButtonPerfil>
                    </Styled.ButtonPerfil>
                </Styled.ButtonContainer>
            </Styled.Card>
        )
    }


    return (

        <Styled.Container>
            <FlatList
                keyExtractor={item => String(item.id)}
                data={data}
                renderItem={({ item }) => _renderItem(item)}
            />
        </Styled.Container>
    )
}

export default HistoricoAtendimento;

