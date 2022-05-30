import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
    // TODO: Remove below const and instead import them from chakra
    // const Text = () => <div />;
    // const Image = () => <div />;
    // const Box = () => <div />;
    // const Stack = () => <div />;
    // const Heading = () => <div />;
    // const Tag = () => <div />;
    // const TagLabel = () => <div />;


    const [productData, setProductData] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3)
    const [total, setTotal] = useState(0)

    //  console.log(studentData)



    useEffect(() => {

        axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r) => {
            setProductData(r.data)
            setTotal(Number(r.headers["x-total-count"]))
            //  console.log(r)
        })

    }, [page, limit])

    console.log(productData)


    return (
        // <Stack data-cy="product">
        //     <Image data-cy="product-image" />
        //     <Text data-cy="product-category"></Text>
        //     <Tag>
        //         <TagLabel data-cy="product-gender"></TagLabel>
        //     </Tag>
        //     <Heading data-cy="product-title"></Heading>
        //     <Box data-cy="product-price"></Box>
        // </Stack>

        <>
            <div style={{
                width: "90%",
                height: "500px",
                border: "1px solid green",
                margin: "auto",
                alignItems: "center"
            }}>


                <select onChange={(e) => {
                    setLimit(e.target.value)
                }} name="" id="">
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>

                </select>
                <div style={{
                    width: "95%",
                    height: "1000x",
                    display: "flex",
                    margin: "10px",
                    padding: "10px",
                }} data-cy="product">
                    {
                        productData.map((e) => {
                            return (
                                <div>
                                    <img style={{
                                        width: "300px",
                                        height: "200px"
                                    }} data-cy="product-image" src={e.imageSrc} alt="" />
                                    <h1 data-cy="product-category"> Category:-{e.category}</h1>
                                    <h1 data-cy="product-gender"> Gender:-{e.gender}</h1>
                                    <h1 data-cy="product-title">Title:-{e.title}</h1>
                                    <h1 data-cy="product-price"> Price:-{e.price}</h1>
                                </div>
                            )
                        })
                    }
                </div>

                <button style={{
                    width: "90px",
                    height: "70px",
                    border: "1px solid red"
                }} disabled={page <= 1} onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    }
                }}>Prev</button>
                <button style={{
                    width: "90px",
                    height: "70px",
                    border: "1px solid red"
                }} disabled={total <= page * 2} onClick={() => {
                    setPage(page + 1)
                }}>Next</button>
            </div>
        </>
    );
};

export default Product;