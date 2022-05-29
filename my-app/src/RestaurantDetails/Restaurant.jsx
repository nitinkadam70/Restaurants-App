import React from 'react'
import styles from "./res.module.css"
import RestaurantDetails from './RestaurantDetails'

const Restaurant = (props) => {
    console.log(props)

    return (
        <>
            <div className={styles.innerdiv}>
                <div className='img'>
                    <img src={props.imgURL} alt="" />
                </div>

                <div className={styles.info}>
                    <h2>{props.name}</h2>
                    <p> {props.food + " "} </p>
                    <p> Cost ₹{props.cost} for one</p>
                    <h4>Min ₹{props.min} .{props.time}</h4>
                    <h4>{props.card ? "Accept online payments only" : "Accept Cash" || props.cash ? "Accept Cash" : "Accept online payments only"}</h4>
                </div>

                <div className={styles.rate}>
                    <h3>{props.rating}</h3>
                    <p>{props.votes} votes</p>
                    <p>{props.reviews} reviews</p>
                    <h5 className={styles.pay}>{" Order Online >"} </h5>
                </div>
            </div>


        </>
    )
}

export default Restaurant