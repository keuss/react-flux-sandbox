import { State } from 'abyssa';
import router from './router';
import welcome from './welcome';

router
  .addState('welcome', State('welcome', welcome))
  .init('welcome');
