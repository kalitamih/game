import retrieveRecordTable from '../retrieve/retrieve';
import topTen from '../retrieve/topTen';

const LOAD_RECORDS_LOADING = 'LOAD_RECORDS_LOADING';

const tableRecord = () => (dispatch) => {
  dispatch({ type: LOAD_RECORDS_LOADING });

  retrieveRecordTable()
    .then(data => topTen(data))
    .then((data) => {
      if (data.length) dispatch({ type: 'LOAD_RECORDS_SUCCESS', data });
      else dispatch({ type: 'LOAD_RECORDS_ERROR', error: 'Unexpected Error!!!' });
    });
};

export default tableRecord;
