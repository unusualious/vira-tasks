import { createStore } from 'vuex'
  
import authentication from './autentication'
import notes from './notes'
export default new createStore({
    modules: {
        authentication,
        notes
    }

});
