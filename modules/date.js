import { DateTime } from './luxon/luxon.js';
// Date and time function
const date = () => {
  const dateTime = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
  return dateTime;
};

export default date;
