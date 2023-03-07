import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';
import transactions from './transactions.json'

export const TransactionHistory = () => {
    return (
        <table className={css.transaction__history}>
            {transactions.map(({ id, type, amount, currency }) => {
                return (
                    <thead key = {id}>
                        <tr >
                        <th>{type}</th>
                        <th>{amount}</th>
                        <th>{currency}</th>
                        </tr>
                    </thead>
                )
            })
            }
    </table>
    )
    
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,    
};
