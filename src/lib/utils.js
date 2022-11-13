import dayjs from 'dayjs';
import { differenceInYears } from 'date-fns';

export function formatDate(date, withTime = true) {
  try {
    if (!withTime) return dayjs(date).format('DD/MM/YYYY');
    return dayjs(date).format('DD/MM/YYYY hh:mm A');
  } catch (error) {
    return 'Error formatting';
  }
}

export function normalize(string = '') {
  return string.toString().replace(/ /g, '').toLowerCase();
}

export function getGeoLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject('Geolocation not supported.');

    // No permission granted by user to find GEO location.

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject({ error: 'PERMISSION_DENIED', message: error.message });
            break;
          case error.POSITION_UNAVAILABLE:
            reject({ error: 'POSITION_UNAVAILABLE', message: error.message });
            break;
          case error.TIMEOUT:
            reject({ error: 'TIMEOUT', message: error.message });
            break;
          case error.UNKNOWN_ERROR:
            reject({ error: 'UNKNOWN_ERROR', message: error.message });
            break;
        }
      },
    );
  });
}

export function validateAge(age, dob) {
  const difference = differenceInYears(new Date(), new Date(dob));

  return difference >= age;
}

export function isMobile() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (vw > 425) return false;
  return true;
}

export function isTablet() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (vw > 800) return false;
  return true;
}

export function isExtraLarge() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (vw < 2800) return false;
  return true;
}
