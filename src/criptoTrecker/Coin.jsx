import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import axios from "axios";

export default function Coin() {
  let URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false`;

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(() => console.error("Error"));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md="12 mt-5">
            <Table responsive dark>
              <thead>
                <tr>
                  <th className="text">Crypto name</th>
                  <th>Current price</th>
                  <th>Market cap change</th>
                  <th>Market cap rank</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <img className="logoImg" src={item.image} alt="cripto" />
                      {item.name}
                    </th>
                    <td>{item.current_price}</td>
                    {item.market_cap_change_percentage_24h > 0 ? (
                      <td className="green">{item.market_cap_change_percentage_24h.toFixed(2)}%</td>
                    ) : (
                      <td className="red">{item.market_cap_change_percentage_24h.toFixed(2)}%</td>
                    )}
                    <td>{item.market_cap_rank}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
