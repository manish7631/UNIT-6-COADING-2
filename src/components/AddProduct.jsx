import React, { useState } from "react";

const AddProduct = () => {
    // TODO: Remove below const and instead import them from chakra
    // const Button = () => <div />;
    // const Modal = () => <div />;
    // const ModalBody = () => <div />;
    // const Input = () => <div />;
    // const Select = () => <div />;
    // const RadioGroup = () => <div />;
    // const Radio = () => <div />;

    const [data, setData] = useState({
        title: "",
        gender: "",
        imageSrc: "",
        price: "",

    })


    const handleChange = (e) => {

        const { name, value } = e.target;




        setData({
            ...data,
            [name]: value,
        })





    }




    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(data)
    }


    return (
        <>
            {/* <Button my={4} data-cy="add-product-button">add</Button>
            <Modal>
                <ModalBody pb={6}>
                    <Input data-cy="add-product-title" />
                    <Select data-cy="add-product-category">
                        <option data-cy="add-product-category-shirt"></option>
                        <option data-cy="add-product-category-pant"></option>
                        <option data-cy="add-product-category-jeans"></option>
                    </Select>
                    <RadioGroup data-cy="add-product-gender">
                        <Radio data-cy="add-product-gender-male"></Radio>
                        <Radio data-cy="add-product-gender-female"></Radio>
                        <Radio data-cy="add-product-gender-unisex"></Radio>
                    </RadioGroup>
                    <Input data-cy="add-product-price" />
                    <Button data-cy="add-product-submit-button"></Button>
                </ModalBody>
            </Modal> */}
            <div>

                <div style={{
                    border: "1px solid red",
                    width: "95%",
                    height: "300px",
                    margin: "auto",
                    alignItems: "center"
                }}>
                    <button data-cy="add-product-button">Add Product</button>
                    <br />
                    <input name="title" onChange={handleChange} data-cy="add-product-title" type="text" placeholder="Enter Title" />
                    <br />
                    <select name="category" value={data.value} onChange={handleChange} data-cy="add-product-category">
                        <option value="shirt" data-cy="add-product-category-shirt">Shirt</option>
                        <option value="pant" data-cy="add-product-category-pant">Pant</option>
                        <option value="jeans" data-cy="add-product-category-jeans">Jeans</option>
                    </select>
                    <div>
                        Gender:
                        <div>
                            Male
                            <input onChange={handleChange}

                                name="gender"
                                className="male"
                                type="radio"
                                value={"male"}
                            />{" "}
                            Female{" "}

                            <input onChange={handleChange}

                                name="gender"
                                className="female"
                                type="radio"
                                value={"female"}
                            />
                            unisex {" "}

                            <input onChange={handleChange}

                                name="gender"
                                className="unisex"
                                type="radio"
                                value={"unisex"}
                            />
                        </div>
                    </div>

                    <input onChange={handleChange} type="text" name="imageSrc" id="" placeholder="Enter image url" />
                    <br />

                    <input name="price" onChange={handleChange} data-cy="add-product-price" type="number" placeholder="Enter price" />


                    <button onClick={handleSubmit} data-cy="add-product-submit-button">Submit</button>
                </div>
            </div>
        </>
    );
};

export default AddProduct;