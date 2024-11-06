import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { API_BASE_URL } from "../../../api";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {




  const navigate = useNavigate()

  const [nameProduct, setNameProduct] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [url, setUrl] = useState("")
  

  const refNameProduct=useRef(null)
  const refDescription=useRef(null)
  const refCategory=useRef(null)
  const refBrand=useRef(null)
  const refPrice=useRef(null)
  const refStock=useRef(null)
  const refUrl=useRef(null)
  

  const handleNameProduct = (e) => {
    setNameProduct(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleBrand = (e) => {
    setBrand(e.target.value)
  }

  const handlePrice = (e) => {
    if (e.target.value >= 0) {
      setPrice(e.target.value)
    }
  }

  const handleStock = (e) => {
    setStock(e.target.value)
  }

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handleUrl = (e) => {
    setUrl(e.target.value)
  }

  const dragOver = (e) => {
    e.preventDefault()

  }

  const dragDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files && files[0]) {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {

        setUrl(e.target.result)
        console.log("url: " + url)
        //console.log("url    "+e.target.result)
      }
      fileReader.readAsDataURL(files[0])
    }
  }

  const handleActualization = async () => {
    let error=false
    /*setNameProduct("")
    setDescription("")
    setCategory("")
    setBrand("")
    setPrice("")
    setStock("")
    setUrl("") */

    if (nameProduct == "") {
      refNameProduct.current.style.backgroundColor="red"
      error=true
    }
    else refNameProduct.current.style.backgroundColor="white"

    if (description == "") {
      refDescription.current.style.backgroundColor="red"
      error=true
    }
    else refDescription.current.style.backgroundColor="white"

    if (category == "") {
      refCategory.current.style.backgroundColor="red"
      error=true
    }
    else refCategory.current.style.backgroundColor="white"

    if (brand == "") {
      refBrand.current.style.backgroundColor="red"
      error=true
    }
    else refBrand.current.style.backgroundColor="white"

    if(price===0||price==""){
      refPrice.current.style.backgroundColor="red"
      error=true
    }
    else refPrice.current.style.backgroundColor="white"

    if(stock===0||stock==""){
      refStock.current.style.backgroundColor="red"
      error=true
    }
    else refPrice.current.style.backgroundColor="white"


    if (url == "") {
      //refUrl.current.style.backgroundColor="red"
      error=true
    }

    if(error){
      alert("Complete los datos correctamente")
      throw new Error("Complete los datos correctamente")
    }

    try {
      const response = await fetch(`${API_BASE_URL}/Product/CreateProduct/`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          "description": description,
          "price": price,
          "imageUrl": url,
          "size": "string",
          "stock": stock,
          "brand": brand

        })
      });

      if (!response.ok) {
        throw new Error("Error al enviar el producto")
      }

      const message = await response.text()
      console.log("Mensaje:", message);


    } catch (error) {
      console.error(error);
    }
  }

  const handleEliminate = () => {
    setNameProduct("")
    setDescription("")
    setCategory("")
    setBrand("")
    setPrice(0)
    setStock(0)
    setUrl("")
  }

  const handlerCancelation = () => {
    navigate("/")
  }


  return (
    <Form className="p-4 border rounded">
      <Row>
        <Col md={6}>
          <Form.Group controlId="productName" className="mb-3">
            <Form.Label>Nombre de producto</Form.Label>
            <Form.Control type="text" placeholder="Lorem Ipsum" value={nameProduct} onChange={handleNameProduct} ref={refNameProduct}/>
          </Form.Group>

          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" placeholder="Lorem Ipsum" rows={3} value={description} onChange={handleDescription} ref={refDescription}/>
          </Form.Group>

          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control type="text" placeholder="Sneaker" value={category} onChange={handleCategory} ref={refCategory}/>
          </Form.Group>

          <Form.Group controlId="brand" className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="Adidas" value={brand} onChange={handleBrand} ref={refBrand}/>
          </Form.Group>

          <Row>
            {/* <Col>
              <Form.Group controlId="productId" className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="#32A5A3" value={id} onChange={handleId} />
              </Form.Group>
            </Col> */}
            <Col>
              <Form.Group controlId="stockQuantity" className="mb-3">
                <Form.Label>Cantidad Stock</Form.Label>
                <Form.Control type="number" placeholder="211" value={stock} onChange={handleStock} ref={refStock}/>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="price" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control type="text" placeholder="110.40" value={price} onChange={handlePrice} ref={refPrice}/>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="tags" className="mb-3">
            <Form.Label>Tag</Form.Label>
            <div className="d-flex gap-2">
              <Button variant="secondary" size="sm">Lorem</Button>
              <Button variant="secondary" size="sm">Ipsum</Button>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <div className="d-flex flex-column align-items-center">
            {url == "" ? <div
              style={{
                width: '100%',
                height: '200px',
                background: url == "" ? '#e9ecef' : url,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem',

              }}

            >
              <span className="text-muted">Vista previa de imagen</span>:<></>

            </div> : <img src={url} style={{
              width: "200px",
              height: "300px"

            }} />}
            <Form.Group controlId="imageUpload" className="mb-3 text-center">
              <Form.Label>Galería de producto</Form.Label>
              <div
                className="border rounded p-3 text-muted"
                style={{ borderStyle: 'dashed' }}
                onDragOver={dragOver}
                onDrop={dragDrop}
              >
                <p>Inserte su imagen aquí</p>
                {/* <input type="file" /> */}
                <p>Jpeg, png son permitidos</p>
              </div>
            </Form.Group>
            {/* <div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#e9ecef',
                      marginRight: '10px'
                    }}
                  ></div>
                  <span className="flex-grow-1">Product thumbnail.png</span>
                  <Button variant="outline-secondary" size="sm">x</Button>
                </div>
              ))}
            </div> */}
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="dark" onClick={handleActualization}>ACTUALIZAR</Button>
        <Button variant="outline-danger" onClick={handleEliminate}>ELIMINAR</Button>
        <Button variant="outline-secondary" onClick={handlerCancelation}>CANCELAR</Button>
      </div>
    </Form>
  );
};

export default ProductForm;
