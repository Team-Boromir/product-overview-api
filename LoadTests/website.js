import http from 'k6/http';
import { sleep } from 'k6';

// This is stress testing the whole website so it might not be accurate as there are other services involved.
export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 1000 },
    { duration: '4m', target: 0 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  http.get('http://localhost:3000/products/999999');
  sleep(1);
  http.get('http://localhost:3000/products/999999/styles');
  sleep(1);
  http.get('http://localhost:3000/products/999999/related');
  sleep(1);
  http.get('http://localhost:3000/products/852088');
  sleep(1);
  http.get('http://localhost:3000/products/852088/styles');
  sleep(1);
  http.get('http://localhost:3000/products/852088/related');
  sleep(1);
  http.get('http://localhost:3000/products/165484');
  sleep(1);
  http.get('http://localhost:3000/products/165484/styles');
  sleep(1);
  http.get('http://localhost:3000/products/165484/related');
  sleep(1);
  http.get('http://localhost:3000/products/725677');
  sleep(1);
  http.get('http://localhost:3000/products/725677/styles');
  sleep(1);
  http.get('http://localhost:3000/products/725677/related');
  sleep(1);
  http.get('http://localhost:3000/products/574176');
  sleep(1);
  http.get('http://localhost:3000/products/574176/styles');
  sleep(1);
  http.get('http://localhost:3000/products/574176/related');
  sleep(1);
  http.get('http://localhost:3000/products/76349');
  sleep(1);
  http.get('http://localhost:3000/products/76349/styles');
  sleep(1);
  http.get('http://localhost:3000/products/76349/related');
  sleep(1);
};