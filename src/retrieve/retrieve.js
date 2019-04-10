import link from './link';

const retrieveRecordTable = () => (
  new Promise((resolve, reject) => {
    fetch(link)
      .then(response => response.json())
      .then((response) => {
        if (response.record) resolve(response.record);
        else resolve([]);
      })
      .catch(err => reject(err));
  }));

export default retrieveRecordTable;
