import link from './link';

const addRowInTable = (login, round) => (
  new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: `${login}`,
        round: `${round}`,
      }),
    })
      .then(data => resolve(data))
      .catch(err => reject(err));
  }));

export default addRowInTable;
