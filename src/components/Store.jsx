import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
import{TbHexagonLetterS} from "react-icons/Tb";
const Store = () => {
  return (
    <>
      <h1 className="s-con"><TbHexagonLetterS className="s-icon"/>torfy Category</h1>
      <h6 className="s-con"><i>laptops only</i></h6>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
