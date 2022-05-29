import React, { useState, useEffect } from 'react'
import styles from "./res.module.css"

const AddRestaurant = () => {

    const [formData, setFormData] = useState({
        payment_methods: {
            card: true,
            cash: true,
            upi: true
        },
        reviews: 658,
        rating: 4.4,
        votes: 5852,
    })

    const handelChange = (e) => {
        let inputName = e.target.name;

        setFormData({
            ...formData,
            [inputName]: e.target.value,
        })

    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const Post = async () => {
            let res = await fetch(`http://localhost:3000/restaurant`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            });
        }
        Post();

    }






    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" required onChange={handelChange} />
                </div>
                <div>
                    <label>Food : </label>
                    <input type="text" name="cuisine" required onChange={handelChange} />
                </div>
                <div>
                    <label>Cost for two : </label>
                    <input type="text" name="costForTwo" required onChange={handelChange} />
                </div>
                <div>
                    <label>Min : </label>
                    <input type="text" name="min" required onChange={handelChange} />
                </div>
                <div>
                    <label>imgURL : </label>
                    <input type="text" name="src" required onChange={handelChange} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant;