import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppDispatch, useAppSelector } from '../../state-management/hooks';
import { RootState } from '../../state-management/store';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import MemorieField from '../field/memorie-field';
import {  MemorieCardModel } from '../models/memorie.dto';
import { beginGameWithCards, removeIdFromGame, startNextRound } from '../slices/memorie-card-slice';

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        height: '100px'
    },
    gameArea: {

    }
  });


type UserInterfaceProps = {
    id: string;
}

const UserInterface = (props: UserInterfaceProps) => {
        const classes = useStyles();
        const roundCount = useAppSelector(state => state.memorieCards.roundCounter)

        return (
            <div data-testid={`user-interface`}>
                <div className={classes.header} >
                    <p>This is round: {roundCount}</p>
                </div>
                <div className={classes.gameArea}>
                    <MemorieField id='field'></MemorieField>
                </div>
            </div>
        )
}

export default UserInterface;