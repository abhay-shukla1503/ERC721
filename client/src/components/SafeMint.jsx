import { useState } from 'react';
import { safemint } from '../logs/AllFunctions';
import Navigate from './Navigate'
const MyComponent = () => {
  const [address, setAddress] = useState('');
  const [uri, setUri] = useState('');
  const [result, setResult] = useState(null);

  const handleMint = async () => {
    const mintResult = await safemint(address, uri);
    setResult(mintResult);
  };

  return (<>
  <Navigate to="/safe-mint"/>
    <div>
      <h1>Safe Mint</h1>
      <label htmlFor="recipientAddress">Recipient Address:</label>
      <input
        type="text"
        id="recipientAddress"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <label htmlFor="tokenURI">Token URI:</label>
      <input
        type="text"
        id="tokenURI"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
      />
      <br />
      <button onClick={handleMint}>Mint Token</button>
      {result && (
        <div>
          {typeof result === 'string' ? (
            <p>TxHash: {result}</p>
          ) : (
            <p>Transaction Hash: {result}</p>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default MyComponent;