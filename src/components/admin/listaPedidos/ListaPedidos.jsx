import React from 'react';
import { Table, Button, Dropdown, Pagination, Form } from 'react-bootstrap';

const pedidos = [
  { id: "#25426", fecha: "8 Sep 2024", comprador: "Jose Luis", estado: "Enviado", precio: "$200.00" },
  { id: "#25425", fecha: "7 Sep 2024", comprador: "Ramiro", estado: "Cancelado", precio: "$200.00" },
  { id: "#25424", fecha: "5 Sep 2024", comprador: "Valentin", estado: "Enviado", precio: "$200.00" },
  { id: "#25423", fecha: "4 Sep 2024", comprador: "Fernando", estado: "Cancelado", precio: "$200.00" },
  { id: "#25422", fecha: "2 Sep 2024", comprador: "Maria", estado: "Enviado", precio: "$200.00" },
  { id: "#25421", fecha: "30 Ago 2024", comprador: "Luca", estado: "Enviado", precio: "$200.00" },
  { id: "#25421", fecha: "29 Ago 2024", comprador: "Roberto", estado: "Cancelado", precio: "$200.00" },
  { id: "#25421", fecha: "28 Ago 2024", comprador: "Maria", estado: "Enviado", precio: "$200.00" },
];

const ListaPedidos = () => {
  return (
    <div className="p-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Lista de pedidos</h4>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Cambiar Estado
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Enviado</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cancelado</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pendiente</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Tabla de pedidos */}
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Producto</th>
            <th>ID Compra</th>
            <th>Fecha</th>
            <th>Comprador</th>
            <th>Estado</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Lorem Ipsum</td>
              <td>{pedido.id}</td>
              <td>{pedido.fecha}</td>
              <td>{pedido.comprador}</td>
              <td>
                <span
                  className={`dot ${
                    pedido.estado === "Enviado" ? "text-primary" :
                    pedido.estado === "Cancelado" ? "text-danger" :
                    "text-warning"
                  }`}
                >
                  ●
                </span>{" "}
                {pedido.estado}
              </td>
              <td>{pedido.precio}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Paginación */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>

        <Form.Select style={{ width: 'auto' }} aria-label="Items per page">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default ListaPedidos;
