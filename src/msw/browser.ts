import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

/** setupWorker
 * 애플리케이션의 가상 API를 설정
 * 실제 애플리케이션에서 setupWorker를 사용
 * */

// eslint-disable-next-line import/prefer-default-export
export const worker = setupWorker(...handlers);
