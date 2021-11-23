import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s'
};

export default function () {
  http.get('http://localhost:3000/products/999231/styles');
  sleep(1);
};