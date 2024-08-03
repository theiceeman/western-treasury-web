import Failed from './alerts/Failed';
import Processing from './alerts/Processing';
import Success from './alerts/Success';

const TransactionStatus = ({ status, txnType }: { status: string; txnType: string }) => {
  return (
    <>
      {status === 'TRANSACTION_CREATED' && txnType === 'CRYPTO_OFFRAMP' && (
        <Processing message="Confirm you're sending to the correct network & address." />
      )}
      {status === 'TRANSACTION_CREATED' && txnType === 'BUY_CRYPTO' && (
        <Processing message="Confirm you're sending to the correct Bank Account." />
      )}
      {status === 'TRANSFER_CONFIRMED' && (
        <Processing message="Your transfer is confirmed, we're processing your payment." />
      )}
      {status === 'PROCESSING' && (
        <Processing message="Your transfer is confirmed, we're processing your payment." />
      )}

      {status === 'COMPLETED' && <Success message="Transaction completed." />}

      {status === 'FAILED' && <Failed message="Transaction failed." />}
    </>
  );
};

export default TransactionStatus;
