const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
   
// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);
// find the proof that norman block is in the list 
const name = 'Tara Champlin';
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof, name
  });

  console.log({ gift });
}

main();