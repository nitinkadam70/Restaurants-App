
import { useState, useEffect } from "react"
import AddRestaurant from "./AddRestaurant"
import styles from "./res.module.css"
import Restaurant from "./Restaurant"


const RestaurantDetails = () => {

    const [data, setData] = useState([])

    const [addRestaurant, setAddRestaurant] = useState(false)

    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await fetch(`http://localhost:3000/restaurant?_page=${pageNumber}`);
                let data = await res.json();
                //console.log(data)
                setData(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        getData();
    }, [pageNumber])


    const handleRate = (n) => {
        const rate = data
        const star = rate.filter((e) => {
            return e.rating >= n
        })
        setData([...star])
    };

    const handleSortByCost = (n) => {
        let sortByCostData = data;
        console.log(data)

        if (n === "high") {

            sortByCostData.sort(function (a, b) {
                return +b.costForTwo - +a.costForTwo
            })
        }
        if (n == "low") {
            sortByCostData.sort(function (a, b) {
                return +a.costForTwo - +b.costForTwo
            })
        }
        setData([...sortByCostData])
    }


    return (
        <>
            <h1 style={{ marginBottom: '20px', background: "black", color: "white", padding: "10px" }}>RESTAURANT DETAILS</h1>
            <div className={styles.sort}>
                <h2>Sort by rating </h2>
                <button onClick={() => handleRate(1)}> 1 star</button>
                <button onClick={() => handleRate(2)}> 2 star</button>
                <button onClick={() => handleRate(3)}> 3 star</button>
                <button onClick={() => handleRate(4)}> 4 star</button>
            </div>
            <div className={styles.sort}>
                <h2>Sort by Cost</h2>
                <button onClick={() => handleSortByCost("high")}>High to Low</button>
                <button onClick={() => handleSortByCost("low")}>Low to high</button>
            </div>
            <hr />
            <br />
            <br />
            <div className={styles.Add}>
                <button onClick={() => setAddRestaurant(!addRestaurant)}>
                    {!addRestaurant ? "Add Restaurant" : "Back"}
                </button>
                {addRestaurant && <AddRestaurant />}
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className={styles.container}>
                {data.map((data) => {
                    return <Restaurant name={data.name} food={data.cuisine} cost={data.costForTwo}
                        min={data.min} time={data.deliveryTime} imgURL={data.src} votes={data.votes}
                        rating={data.rating} reviews={data.reviews} key={data.id} card={data.payment_methods.card} cash={data.payment_methods.cash} />
                })}

            </div>
            <div className={styles.page}>
                <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                <h2> pageNumber : {pageNumber}</h2>
                <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
            </div>
        </>

    )

}

export default RestaurantDetails;