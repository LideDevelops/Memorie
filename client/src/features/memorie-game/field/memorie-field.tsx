import React, { useState } from 'react';
import MemorieCard from '../card/memorie-card';

type MemorieFieldProps = {
    id: string;
    cardAmound: number;
}

const MemorieField = (props: MemorieFieldProps) => {
    return (
        <div id={`memorie-field-${props.id}`} data-testid={`memorie-field-${props.id}`}>
            <MemorieCard id='1' text='Card in field'></MemorieCard>
        </div>
    )
}

export default MemorieField;