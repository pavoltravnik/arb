import React, { useState, useEffect } from 'react';

export function UserAddress(props) {
  const [defaultAccount, setDefaultAccount] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const accounts = await props.web3.eth.getAccounts();
      console.log(accounts);
      const defaultAccount = (props.web3.eth.defaultAccount = accounts[0]);
      // console.log(web3.eth.defaultAccount);
      setDefaultAccount(defaultAccount);
    };
    fetchData();
  }, []);

  return (
    <p>Your address: {defaultAccount}</p>
  );
}