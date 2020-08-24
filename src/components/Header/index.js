import React from 'react';
import { View } from 'react-native';

import * as Styled from './styles'

import backIcon from '../../assets/icons/back.png'

export default function Header({ title }) {
    return (
        <Styled.Container>
            <Styled.Title>{title}</Styled.Title>
        </Styled.Container>
    );
}