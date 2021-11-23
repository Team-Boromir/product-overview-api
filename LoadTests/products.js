import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://localhost:3000/products');
  sleep(1);
}