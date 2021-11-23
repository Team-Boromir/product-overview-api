import http from 'k6/http';
import { sleep } from 'k6';

// This is stress testing the whole website so it might not be accurate as there are other services involved.
export const options = {
  vus: 10,
  duration: '30s'
};

export default function () {
  http.get('http://localhost:3300');
  sleep(1);
};