import PropTypes from "prop-types";

const Table = (props) => {
  const { columns, rows, sort } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item) => (
            <td key={item.accessor} onClick={() => sort(item.accessor)} className="table-title">
              {item.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((item) => (
              <td key={item}>{row[item]}</td>
            ))}
          </tr>
        ))}
        {/* <tr>
          <td>#1</td>
          <td>Akshay</td>
          <td>Raichur</td>
        </tr>
        <tr>
          <td>#2</td>
          <td>Akshay</td>
          <td>Raichur</td>
        </tr> */}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  sort: PropTypes.func,
};

export default Table;
