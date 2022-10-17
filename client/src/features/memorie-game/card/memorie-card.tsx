import React, { useEffect, useState } from 'react';
import {createUseStyles} from 'react-jss'
import { useAppDispatch, useAppSelector } from '../../state-management/hooks';
import { MemorieCardState } from '../models/memorie-card-state.dto';
import { flipCard } from '../slices/memorie-card-slice';

const useStyles = createUseStyles({
    scene: {
        width: "50px",
        height: "100px",
        perspective: "600px",
    },
    card: {
        width: "100%",
        height: "100%",
        position: "relative",
        transition: "transform 1s, box-shadow .3s",
        transformStyle: "preserve-3d",
        border: "1px solid black",
        borderRadius: "5px",
        background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
        boxShadow:  "9px 9px 18px #969696,-9px -9px 18px #ffffff",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        '&:hover': {
            boxShadow:  "30px 30px 35px #969696,-30px -30px 35px #ffffff",
        }
    },    
    cardRemoved: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        opacity: 0
    },
    cardFace: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backfaceVisibility: "hidden",
    },
    cardFaceCover: {

    },
    cardFaceBack: {
        transform: "rotateY( 180deg )",
    },
    cardIsFlipped: {
        transform: " rotateY(180deg)"
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
    const cardState = useAppSelector(state => state.memorieCards.cardIdsInGame.filter(x => x.id === props.id).at(0));
    const classes = useStyles();
    const handleFlip = ()  => {
        if(canCardBeFlipped === false || flipped) {
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
    if(!cardState)
    {
        return null;
    }
    console.log(cardState);
    if(cardState.state === MemorieCardState.Removed) {
        return (
        <>
            <div className={classes.scene}>
                <div onClick={() => handleFlip()} className={classes.cardRemoved} data-testid={`memorie-card-${props.id}`}>

                </div>
            </div>
        </>)
    }
    return (
        <>
            <div className={classes.scene}>
                <div onClick={() => handleFlip()} className={classes.card + (flipped ? ' ' + classes.cardIsFlipped : '')} data-testid={`memorie-card-${props.id}`}>
                    <div className={classes.cardFace + ' ' + classes.cardFaceCover}>
                        <p>Cover</p>
                    </div>
                    <div className={classes.cardFace + ' ' + classes.cardFaceBack}>
                        <p>
                            {props.text}
                        </p>
                    </div>
                    {/* <p>{flipped ? props.text : 'Cover'}</p> */}
                </div>
            </div>
        </>
    )
}



export default MemorieCard;