import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Styled from './styles';
import Header from '../../components/Header'
import avatar from '../../assets/images/profilePic2.jpg'
import DateTimePicker from '@react-native-community/datetimepicker';


const ConfirmarAtendimento = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatePicker = () => {
        showMode('date');
    };

    const showTimePicker = () => {
        showMode('time');
    };

    return (
        <>
            <Header title="Confirmar Atendimento" />
            <Styled.Container>
                <Styled.Card >
                    <View style={{ padding: 15, flexDirection: 'row' }}>
                        <View style={{ width: 0, flexGrow: 1, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Styled.Avatar source={avatar} />
                                <Styled.InfoContainer>
                                    <Styled.Name>
                                        {route.params.docID}
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
                <Styled.DetalhesAtendimento>

                    <Styled.ButtonData onPress={showDatePicker}>
                        <Styled.txtBtnAtendimento>Selecionar Data</Styled.txtBtnAtendimento>
                    </Styled.ButtonData>

                    <Styled.ButtonData onPress={showTimePicker}>
                        <Styled.txtBtnAtendimento>Selecionar Horario</Styled.txtBtnAtendimento>
                    </Styled.ButtonData>


                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                        />
                    )}

                    <Styled.TextInput
                        numberOfLines={6}
                        placeholder="Informações Adicionais"
                    />
                </Styled.DetalhesAtendimento>
                <Styled.ButtonContainer>
                    <Styled.BtnConfirmarAtendimento onPress={() => navigation.navigate('acompanharAtendimento')}>
                        <Styled.txtBtnAtendimento> Confirmar Atendimento </Styled.txtBtnAtendimento>
                    </Styled.BtnConfirmarAtendimento>
                </Styled.ButtonContainer>
            </Styled.Container >
        </>
    )
}

export default ConfirmarAtendimento;