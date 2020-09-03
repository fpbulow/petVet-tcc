import React, { useState } from 'react';
import { FlatList, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'
import IconPlus from '../../assets/icons/plus.png';
import IconVet from '../../assets/icons/vet.png';
import moment from 'moment';
import 'moment/locale/pt-br'

import * as Styled from './styles';

const Home = () => {

    const navigation = useNavigation();

    const [pets] = useState([
        { id: 1, name: 'Meu dog', picture: 'https://www.canilgoldenpremier.com.br/wp-content/uploads/2018/08/dicas-de-higiene.jpg', race: 'Golden Retriever', animalType: 'Cachorro' },
        { id: 2, name: 'Meu gato', picture: 'https://i2.wp.com/zolina.com.br/wp-content/uploads/2017/03/421-e1490671709781.jpg?fit=799%2C599&ssl=1', race: 'Persa', animalType: 'Gato' },
        { id: 3, name: 'Minha tartaruga', picture: 'https://revistanegociospet.com.br/wp-content/uploads/2017/11/tartaruga-pet-comportado.jpg', race: 'Turtle', animalType: 'Tartaruga' },
        { id: 4, name: 'Meu coeio', picture: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/04/prod-para-coelhos-petlove.jpg', race: 'Rabbit', animalType: 'Coelho' },
    ])

    const [attendance] = useState([
        { id: 1, doctorName: 'Dr. Drauzio', description: 'Lorem ipsum dolar at simet', attendaceDate: '2020-09-01T10:00:00Z' },
        { id: 2, doctorName: 'Dr. Drauzio', description: 'Lorem ipsum dolar at simet', attendaceDate: '2020-08-31T10:00:00Z' },
        { id: 3, doctorName: 'Dr. Drauzio', description: 'Lorem ipsum dolar at simet', attendaceDate: '2020-08-20T10:00:00Z' },
    ])

    const _renderPets = (item) => {
        return (
            <Styled.ListPetContainer>
                <Styled.ListPetImage source={{ uri: `${item.picture}` }} />
                <Styled.ListPetInfo />
                <Styled.ViewPetTitle>
                    <Styled.PetTitle>{item.name}</Styled.PetTitle>
                    <Styled.PetRace>{item.race}</Styled.PetRace>
                </Styled.ViewPetTitle>
            </Styled.ListPetContainer>
        )
    }

    const _renderAttendances = (item) => {
        return (
            <Styled.ListPetContainer>
                <View style={{ width: 200, height: 100, backgroundColor: '#81b5f1', borderRadius: 10, padding: 10, elevation: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Image source={IconVet} style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text style={{ fontSize: 14, color: '#4c96eb' }}>{item.doctorName}</Text>
                    </View>
                    <View style={{ marginBottom: 10, flex: 1 }}>
                        <Text numberOfLines={2} style={{ fontSize: 14, color: '#4c96eb', fontWeight: 'bold', flexWrap: 'wrap', }}>{item.description}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10, color: '#e5e5e5' }}>Data atendimento</Text>
                        <Text style={{ fontSize: 10, color: '#e5e5e5' }}>{moment(item.attendaceDate).format('DD/MM/YYYY')}</Text>
                    </View>
                </View>
            </Styled.ListPetContainer>
        )
    }

    return (
        <Styled.Container>
            <Header title="Menu Principal" />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Styled.Title>Meus pets</Styled.Title>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 10, color: '#4c96eb' }}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={pets}
                        renderItem={({ item }) => _renderPets(item)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Styled.Title>Últimos atendimentos</Styled.Title>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 10, color: '#4c96eb' }}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={attendance}
                        renderItem={({ item }) => _renderAttendances(item)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>

            <Styled.SectionActions>
                <Styled.FAB>
                    <Styled.FABIcon source={IconPlus} />
                </Styled.FAB>
            </Styled.SectionActions>
        </Styled.Container>
    );
}

export default Home;