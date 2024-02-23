const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <div>
        <h2>Історія транзакцій</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(item => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
