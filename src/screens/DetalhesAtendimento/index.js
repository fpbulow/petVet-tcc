import React from 'react';
import { View } from 'react-native';
import * as Styled from './styles';
import Header from '../../components/Header'
import avatar from '../../assets/images/profilePic2.jpg'
import { Rating } from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';

const DetalhesAtendimento = () => {
    return (
        <>
            <Header title="Detalhes do Atendimento" />
            <Styled.Container>
                <ScrollView>
                    <Styled.Card>
                        <View style={{ padding: 15, flexDirection: 'row' }}>
                            <View style={{ width: 0, flexGrow: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Styled.Avatar source={avatar} />
                                    <Styled.InfoContainer>
                                        <Styled.Name>
                                            Dexter
                                </Styled.Name>
                                        <Styled.Specialization>
                                            Especialista em Gatos
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

                    <Styled.ContainerDetalhesExterno>
                        <Styled.DetailsText>Data de Atendimento</Styled.DetailsText>
                        <Styled.DetalhesContainer>
                            <Styled.Text>
                                18/08/2020 - 18:40
                        </Styled.Text>
                        </Styled.DetalhesContainer>

                        <Styled.DetailsText>Valor do Atendimento</Styled.DetailsText>
                        <Styled.DetalhesContainer>
                            <Styled.Text>
                                R$ 45,00
                        </Styled.Text>
                        </Styled.DetalhesContainer>

                        <Styled.DetailsText>Avaliação do Atendimento</Styled.DetailsText>
                        <Styled.DetalhesContainer>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={35}
                                startingValue={0}
                                readonly

                            />
                        </Styled.DetalhesContainer>

                        <Styled.DetailsText>Comentários sobre o Atendimento</Styled.DetailsText>
                        <Styled.DetalhesContainer>
                            <Styled.Text numberOfLines={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quisque nunc tellus, ornare tincidunt leo a, pulvinar dignissim turpis.
                                Morbi rutrum tincidunt eleifend. Curabitur eget risus non tellus ornare consequat.
                        </Styled.Text>
                        </Styled.DetalhesContainer>
                    </Styled.ContainerDetalhesExterno>
                </ScrollView>
            </Styled.Container>
        </>
    )
}

export default DetalhesAtendimento;