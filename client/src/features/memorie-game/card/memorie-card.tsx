import React, { useState } from 'react';
import './memorie-card.css'

const styles = {
    memorieCard: {
        borderStyle: "solid",
        boderWidth: "1px"
    }
  }

type MemorieCardProps = {
    id: string;
    text: string;
};

type MemorieCardState = {
    flipped: boolean; //if true, show image of card
}

const MemorieCard = (props: MemorieCardProps) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <>
            <div onClick={() => setFlipped(!flipped)} data-testid={`memorie-card-${props.id}`}>
                <p>{flipped ? props.text : 'Cover'}</p>
            </div>
        </>
    )

}



export default MemorieCard;