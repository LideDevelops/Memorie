import React, { useState } from 'react';
import {createUseStyles} from 'react-jss'

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
    const classes = useStyles();
    return (
        <>
            <div onClick={() => setFlipped(!flipped)} className={classes.memorieCard} data-testid={`memorie-card-${props.id}`}>
                <p>{flipped ? props.text : 'Cover'}</p>
            </div>
        </>
    )
}



export default MemorieCard;