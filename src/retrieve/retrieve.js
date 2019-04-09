import link from './link';

const retrieveRecordTable = () => (
  new Promise((resolve, reject) => {
    fetch(link)
      .then(response => response.json())
      .then(response => resolve(response.record))
      .catch(err => reject(err));
  }));

export default retrieveRecordTable;
