import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';
import transactions from './transactions.json'

export const TransactionHistory = () => {
    return         <table className={css.transaction__history}>
            {transactions.map(({id, type, amount, currency, }) => (
                <thead key = {id}>
                        <tr >
                        <th>{type}</th>
                        <th>{amount}</th>
                        <th>{currency}</th>
                        </tr>
                    </thead>
                )                
            )}
    </table>
    
}

TransactionHistory.propTypes = {
    transactions:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))    
};
