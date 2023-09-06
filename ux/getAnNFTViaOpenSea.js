
async function getAnNFTViaOpenSea(tokenId) {

    let api = import.meta.env.VITE_CHAIN == 'sepolia' ? import.meta.env.VITE_TESTNET_OPEN_SEA_API_URL : import.meta.env.VITE_OPEN_SEA_API_URL; 
    const url = `https://${api}/v2/chain/${import.meta.env.VITE_CHAIN}/contract/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/nfts/${tokenId}`;
    
    return fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        // 'X-API-KEY': `${import.meta.env.VITE_OPEN_SEA_API_KEY}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('open sea response: ', data);
      console.log('what we actually need from open sea: ', data.nft.image_url);
      return data.nft;
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error.message);
    });
  }
  
  export {getAnNFTViaOpenSea}
  // To use the function and get the data: