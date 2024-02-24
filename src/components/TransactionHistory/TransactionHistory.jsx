import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <div>
        <h2>Історія транзакцій</h2>
        <div>
          <table className={css.tableOfTransaction}>
            <thead>
              <tr>
                <th className={css.titleTableRow}>Type</th>
                <th className={css.titleTableRow}>Amount</th>
                <th className={css.titleTableRow}>Currency</th>
              </tr>
            </thead>

            <tbody>
              {items.map(item => (
                <tr className={css.tableRowItem} key={item.id}>
                  <td className={css.tableRow}>{item.type}</td>
                  <td className={css.tableRow}>{item.amount}</td>
                  <td className={css.tableRow}>{item.currency}</td>
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
