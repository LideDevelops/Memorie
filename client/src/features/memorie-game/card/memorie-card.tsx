import React from 'react';
import './memorie-card.css'

interface MemorieCardProps {
    id: string;
    text: string;
}

interface MemorieCardState {
    flipped: boolean; //if true, show image of card
}


class MemorieCard extends React.Component<MemorieCardProps, MemorieCardState> {
    constructor(props: MemorieCardProps) {
        super(props);
        this.state = {
            flipped: false
        };
    }

    handleClick = () => {
        this.setState({flipped: !this.state.flipped})
    }

    render(): React.ReactNode {
        return (
            <>
                <div onClick={this.handleClick} className='memorie-card' data-testid={`memorie-card-${this.props.id}`}>
                    <p>{this.state.flipped ? this.props.text : 'Cover'}</p>
                </div>
            </>
          );        
    }

}

export default MemorieCard;