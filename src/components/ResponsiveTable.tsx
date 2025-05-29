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
`;

const ResponsiveTable = () => {
  const mockData = [
    { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
    { id: 3, name: 'Sam Wilson', age: 23, email: 'sam.wilson@example.com' },
  ];

  return (
    <TableContainer>
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
          {mockData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default ResponsiveTable;
