/* eslint-disable react/prop-types */
// Store.jsx
import  { useState, useEffect } from 'react';



const Store = ({ storeId, companyName }) => {
  const [storeInfo, setStoreInfo] = useState(null);

  const fetchStoreInfo = ({ storeId ,companyName }) => {
    fetch(`https://pinmeto-backend-1.onrender.com/api-Store/${storeId}?companyName=${companyName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setStoreInfo(data);
        
      })
      .catch((error) => console.error('Error fetching store info:', error));
  };
 
  useEffect(() => {
    fetchStoreInfo({ storeId, companyName });
  }, [storeId, companyName]);
  //console.log(storeInfo);
  return (
    <div>
      <h2>Store Information</h2>
      {storeInfo && (
        <div>
          <p>
            <strong>Store Name :</strong> {storeInfo.name}
          </p>
          <p>
            <strong>Address:</strong> {storeInfo.address.street}, {storeInfo.address.zip},{' '}
            {storeInfo.address.city}
          </p>
          <p>
            <strong>Contact:</strong> Email: {storeInfo.contact.email}
          </p>
          <h3>Open Hours</h3>
          <ul>
            {Object.entries(storeInfo.openHours).map(([day, info]) => (
              <li key={day}>
                <strong>{day.toUpperCase()}: </strong>
                {info.state === 'Open' ? (
                  <>
                    {info.span.length > 0 && (
                      <span>
                        <br />
                        <span>Open {info.span[0].open}</span> - <span> {info.span[0].close}</span>
                      </span>
                    )}
                  </>
                ) : (
                  <span>Closed</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Store;
