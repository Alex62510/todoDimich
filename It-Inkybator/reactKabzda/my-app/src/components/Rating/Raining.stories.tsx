import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
    };

export const EmptyRaiting = () => <Rating value={0} onClick={a=>a} />;
export const Raiting1 = () => <Rating value={1} onClick={a=>a} />;
export const Raiting2 = () => <Rating value={2} onClick={a=>a} />;
export const Raiting3 = () => <Rating value={3} onClick={a=>a} />;
export const Raiting4 = () => <Rating value={4} onClick={a=>a} />;
export const Raiting5 = () => <Rating value={5} onClick={a=>a} />;
export const RatingChinging= () => {
    const [rating, setRating]=useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} />;
}

