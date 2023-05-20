import React from 'react'
import Header from "../Header/Header";
import CardListItem from "../CardListItem/CardListItem";
import './Card.css'


export default function Card(props) {
    return (
        <div className="card-box">
            <Header props = {props}/>
            <CardListItem imageList = {props.imageList}></CardListItem>
        </div>
    )
}
