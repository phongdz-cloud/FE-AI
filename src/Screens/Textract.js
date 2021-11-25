import React, { useEffect, useState, Component } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, updateImage } from "../actions/upImageAction";

import styled from "styled-components";
import {
  Row,
  Col,
  ListGroupItem,
  Card,
  ListGroup,
  Table,
} from "react-bootstrap";

import Loader from "../components/Loader";
import { within } from "@testing-library/dom";
var data = {
  itemLines: [],
  specialFields: [],
  summaryFields:[],
  type: "DAILY",
};
function Textract() {
  const dispatch = useDispatch();
  useEffect(() => {
    var sendData = {
      itemLines: [],
      specialFields: [],
      type: "DAILY",
    };
  }, []);
  var Num = 0;
  var flag = false;
  function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      setImage(event.target.files[0]);

      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }

  const submitHandler = (e) => {
    e.preventDefault(); //dispatch login
    dispatch(uploadImage(image));
  };
  const [image, setImage] = useState();
  const [control, setControl] = useState({
    itemLines: [],
    specialFields: [],
    type: "DAILY",
  });

  const { loading, upImage } = useSelector((state) => state.uploadImage);
  const { putImage } = useSelector((state) => state.updateImage);

  useEffect(() => {
    setControl(upImage);
  }, [upImage]);
  if (upImage) {
    console.log(upImage.itemLines.length);
  }

  function submitHandlerFormItemLines(e) {
    e.preventDefault();
    let count = e.target.length - 1;

    let i = 0;
    while (i < count) {
      data.itemLines.push({
        item: e.target[i].value,
        price: e.target[i + 1].value,
        
      });

      i = i + 2;
    }

    console.log(data);
  }
  const divNumStyle = {
    display: 'none',
    
  };
  function submitHandlerFormSpecialFields(e) {
    e.preventDefault();
    let count = e.target.length - 1;

    let i = 0;
    while (i < count) {
      data.specialFields.push({
        fieldName: e.target[i].value,
        value: e.target[i + 1].value,

      });

      i = i + 2;
    }
    console.log(data);
  }

  function itemHandler(e, item) {
    setControl({
      itemLines: control.itemLines.map((i) => {
        if (i.item === item.item) {
          i.item = e.target.value;
        }
        return i;
      }),
      specialFields: control.specialFields,
      type: control.type,
    });
  }

  function priceHandler(e, item) {
    setControl({
      itemLines: control.itemLines.map((i) => {
        if (i.price === item.price) {
          i.price = e.target.value;
        }
        return i;
      }),
      specialFields: control.specialFields,
      type: control.type,
    });
  }

  function fieldNameHandler(e, item) {
    setControl({
      itemLines: control.itemLines,
      specialFields: control.specialFields.map((i) => {
        if (i.fieldName === item.fieldName) {
          i.fieldName = e.target.value;
        }
        return i;
      }),
      type: control.type,
    });
  }

  function valueHandler(e, item) {
    setControl({
      itemLines: control.itemLines,
      specialFields: control.specialFields.map((i) => {
        if (i.value === item.value) {
          i.value = e.target.value;
        }
        return i;
      }),
      type: control.type,
    });
  }
  function confirmHandler(e) {
    e.preventDefault();
    dispatch(
      updateImage({
        itemLines: data.itemLines,
        specialFields: data.specialFields,
        summaryFields:upImage.summaryFields,
        type: "DAILY",
      })
    );
  }

  function handlePayment(uploaded) {
    const { itemLines, specialFields } = control;

    return (
      <div>
        <div className="layer" />
        <main className="page-center">
          <article className="">
            <h1 className="sign-up__title">Item line</h1>

            <button
              className="form-btn primary-default-btn transparent-btn"
              type="submit"
              onClick={(e) => confirmHandler(e)}
            >
              Comfirm
            </button>

            <form
              className="sign-up-form form"
              onSubmit={submitHandlerFormItemLines}
            >
              {itemLines.map((item) => {
                return (
                  <label className="form-label-wrapper">
                    <p className="form-label">Item</p>
                    <input
                      className="form-input"
                      type="text"
                      placeholder={item.item}
                      required
                      value={item.item}
                      onChange={(e) => {
                        itemHandler(e, item);
                      }}
                    />
                    <p className="form-label">Price</p>
                    <input
                      className="form-input"
                      type="text"
                      placeholder={item.price}
                      required
                      value={item.price}
                      onChange={(e) => {
                        priceHandler(e, item);
                      }}
                    />
                  </label>
                );
              })}

              <button
                className="form-btn primary-default-btn transparent-btn"
                type="submit"
              >
                Check
              </button>
            </form>
          </article>

          <article className="">
            <h1 className="sign-up__title">Special Fields</h1>

            <form
              className="sign-up-form form"
              onSubmit={submitHandlerFormSpecialFields}
            >
              {specialFields.map((item) => {
                return (
                  <label className="form-label-wrapper">
                    <p className="form-label">fieldName</p>
                    <input
                      className="form-input"
                      type="text"
                      placeholder={item.fieldName}
                      required
                      value={item.fieldName}
                      onChange={(e) => {
                        fieldNameHandler(e, item);
                      }}
                    />
                    <p className="form-label">value</p>
                    <input
                      className="form-input"
                      type="text"
                      placeholder={item.value}
                      required
                      value={item.value}
                      onChange={(e) => {
                        valueHandler(e, item);
                      }}
                    />
                  </label>
                );
              })}

              <button
                className="form-btn primary-default-btn transparent-btn"
                type="submit"
              >
                Check
              </button>
            </form>
          </article>
        </main>
      </div>
    );
  }
  function handleShow() {
    return (
      <>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Num</th>
                <th>Item name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <div  style={divNumStyle}> {Num=0} </div>
              {upImage ? (
                upImage.itemLines.map((item) => {
                  Num += 1;
                  return (
                    <tr>
                      <th>{Num}</th>
                      <th>{item.item}</th>
                      <th>{item.price}</th>
                    </tr>
                  );
                })
              ) : (
                <Loader />
              )}
            </tbody>
          </Table>
        </Col>
        <Col>
          <div className="stat-cards-item">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Item name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              <div  style={divNumStyle}> {Num=0} </div>
                {upImage ? (
                  upImage.specialFields.map((item) => {
                    Num += 1;
                    return (
                      <tr>
                        <th>{Num}</th>
                        <th>{item.fieldName}</th>
                        <th>{item.value}</th>
                      </tr>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <div className="stat-cards-item">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Item name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              <div  style={divNumStyle}> {Num=0} </div>
                {upImage ? (
                  upImage.summaryFields.map((item) => {
                    Num += 1;
                    return (
                      <tr>
                        <th>{Num}</th>
                        <th>{item.fieldName}</th>
                        <th>{item.value}</th>
                      </tr>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </>
    );
  }

  function handleUpdate() {
    flag = true;
    return (
      <>
      <Row> <div className="users-table table-wrapper">
          <h2>Item inline</h2>
          <table className="posts-table">
            <thead>
              <tr className="users-table-info">
                <th>
                  <label className="users-table__checkbox ms-20">
                    <p></p>
                  </label>
                </th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <div  style={divNumStyle}> {Num=0} </div>
              {
              putImage.itemLines.map((i) => {
                
                return(
                  <tr>
                  <td>
                    <span> {++Num} </span>
                  </td>
                  <td>
                    <span> {i.item} </span>
                  </td>
                  <td>
                    <span> {i.price} </span>
                  </td>
                </tr>
                )
              }

               
              )}
            </tbody>
          </table>
        </div></Row>
        <Row>
        <div className="users-table table-wrapper">
          <h2>Special Fields</h2>
          <table className="posts-table">
            <thead>
              <tr className="users-table-info">
                <th>
                  <label className="users-table__checkbox ms-20">
                    <p></p>
                  </label>
                </th>
                <th>Fieldsname</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <div  style={divNumStyle}> {Num=0} </div>
              {
              putImage.specialFields.map((i) => {
                
                return(
                  <tr>
                  <td>
                    <span> {++Num} </span>
                  </td>
                  <td>
                    <span> {i.fieldName} </span>
                  </td>
                  <td>
                    <span> {i.value} </span>
                  </td>
                </tr>
                )
              }

               
              )}
            </tbody>
          </table>
        </div>
        </Row>

        <Row>
        <div className="users-table table-wrapper">
          <h2>Summary fields</h2>
          <table className="posts-table">
            <thead>
              <tr className="users-table-info">
                <th>
                  <label className="users-table__checkbox ms-20">
                    <p></p>
                  </label>
                </th>
                <th>Fieldsname</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <div  style={divNumStyle}> {Num=0} </div>
              {
              putImage.summaryFields.map((i) => {
                
                return(
                  <tr>
                  <td>
                    <span> {++Num} </span>
                  </td>
                  <td>
                    <span> {i.fieldName} </span>
                  </td>
                  <td>
                    <span> {i.value} </span>
                  </td>
                </tr>
                )
              }

               
              )}
            </tbody>
          </table>
        </div>
        </Row>
       
      </>
    );
  }
  return (
    <>
      <div className="use-bootstrap">
        <main className="main users chart-page" id="skip-target">
          <div className="container">
            <Row className="">
              <Col className="">
                <div className="input-side">
                  <ListGroup>
                    <ListGroupItem>
                      <h3>Input Picture</h3>{" "}
                    </ListGroupItem>

                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="upload">
                        <Form.Label>Upload image</Form.Label>
                        <div className="preview">
                          <img id="file-ip-1-preview" />
                        </div>
                        <ListGroupItem>
                          <input
                            type="file"
                            id="file-ip-1"
                            accept="image/*"
                            onChange={(e) => {
                              showPreview(e);
                            }}
                          />{" "}
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="row">
                            <Button variant="success" type="submit">
                              Send
                            </Button>
                          </div>{" "}
                        </ListGroupItem>
                      </Form.Group>
                    </Form>
                  </ListGroup>
                </div>
              </Col>
              {upImage ? putImage ? handleUpdate() : handleShow() : <p></p>}
            </Row>
            <Row>
              {control ? (
                flag === true ? (
                  <p></p>
                ) : (
                  handlePayment(upImage)
                )
              ) : (
                <h2>Waiting... </h2>
              )}
            </Row>
          </div>
        </main>
      </div>
    </>
  );
}

export default Textract;
