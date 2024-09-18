import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Loader } from "../shared/loader/Loader";
import { useTransactionHistory } from "../../hooks/usePricing";

export function TransactionViewModal({ data, show, onClose }) {
  const { transaction, isLoading } = useTransactionHistory(data._id);
  console.log("Transaction History", transaction);

  return (
    <div className='modal-transaction-history'>
      <Modal show={show} onHide={onClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Transaction History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <Loader className='modalLoader' />
          ) : (
            <div className='modal-content-wrapper'>
              <div
                className='responsive-table-container'
                style={{ width: "95%" }}
              >
                <table className='custom-table'>
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }} className='table-header'>
                        Tx ID
                      </th>
                      <th className='table-header'> Backend Wallet address</th>
                      <th style={{ width: "20%" }} className='table-header'>
                        Price Received
                      </th>
                      <th style={{ width: "20%" }} className='table-header'>
                        Actual Price
                      </th>
                      <th style={{ width: "20%" }} className='table-header'>
                        Solscan Backend
                      </th>
                      <th style={{ width: "20%" }} className='table-header'>
                        Solscan Treasury
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.map((item, index) => (
                      <tr key={item.id}>
                        <td className='table-cell'>{index + 1}</td>
                        <td className='table-cell'>
                          {item?.walletId?.publicKey}
                        </td>
                        <td className='table-cell'>{item.price}</td>
                        <td className='table-cell'>{data?.pricingId?.price}</td>
                        <td className='table-cell'>
                          <button type='button' className='action-button'>
                            <a
                              className='tx-modal'
                              href={item?.tranxHashBackend}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Solscan
                            </a>
                          </button>
                        </td>
                        <td className='table-cell'>
                          <button type='button' className='action-button'>
                            <a
                              className='tx-modal'
                              href={item?.tranxHash}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Solscan
                            </a>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
