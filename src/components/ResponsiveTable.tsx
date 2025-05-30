import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: left;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 6px;
      font-size: 12px;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

interface FormValues {
  name: string;
  age: string;
  email: string;
}

const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};

const Row = ({ row }: { row: { id: number; name: string; age: number; email: string } }) => (
  <tr>
    <td>{row.id}</td>
    <td>{row.name}</td>
    <td>{row.age}</td>
    <td>{row.email}</td>
  </tr>
);

const MemoizedRow = React.memo(Row);

const ResponsiveTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
    { id: 3, name: 'Sam Wilson', age: 23, email: 'sam.wilson@example.com' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { values, handleChange, setValues } = useForm({ name: '', age: '', email: '' });

  const handleAddData = () => {
    setData([
      ...data,
      { id: data.length + 1, name: values.name, age: parseInt(values.age, 10), email: values.email },
    ]);
    setValues({ name: '', age: '', email: '' }); // Clear form after submit
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddData();
  };

  return (
    <TableContainer>
      <button type="button" onClick={() => setIsModalOpen(true)}>Add New</button>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h3>Add New Data</h3>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={values.name} onChange={handleChange} required />
              </div>
              <div>
                <label>Age:</label>
                <input type="number" name="age" value={values.age} onChange={handleChange} required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} required />
              </div>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          </ModalContent>
        </Modal>
      )}
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <MemoizedRow key={row.id} row={row} />
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default ResponsiveTable;
