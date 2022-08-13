import React, { useEffect, useState } from 'react';
import {createUseStyles} from 'react-jss'
import { useAppDispatch, useAppSelector } from '../../state-management/hooks';
import { flipCard } from '../slices/memorie-card-slice';

const useStyles = createUseStyles({
    memorieCard: {
        borderStyle: "solid",
        width: "50px",
        height: "100px"
    }
  });

type MemorieCardProps = {
    id: string;
    text: string;
};

const MemorieCard = (props: MemorieCardProps) => {
    const [flipped, setFlipped] = useState(false);
    const dispatch = useAppDispatch();
    const canCardBeFlipped = useAppSelector(state => state.memorieCards.cardsLeftToFlip > 0)
    const roundCount = useAppSelector(state => state.memorieCards.roundCounter)
    const classes = useStyles();
    const handleFlip = ()  => {
        if(canCardBeFlipped === false) {
            return;
        }
        setFlipped(!flipped);
        if(!flipped) {
            dispatch(flipCard(props.id))
        }                
    }
    useEffect(() => {
        setFlipped(false);
    },[roundCount]);
    return (
        <>
            <div onClick={() => handleFlip()} className={classes.memorieCard} data-testid={`memorie-card-${props.id}`}>
                <p>{flipped ? props.text : 'Cover'}</p>
            </div>
        </>
    )
}



export default MemorieCard;