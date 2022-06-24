// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Tolik22869HackatomTolik22869HackatomBlog from './tolik22869/hackatom/tolik22869.hackatom.blog'
import Tolik22869HackatomTolik22869HackatomHackatom from './tolik22869/hackatom/tolik22869.hackatom.hackatom'


export default { 
  Tolik22869HackatomTolik22869HackatomBlog: load(Tolik22869HackatomTolik22869HackatomBlog, 'tolik22869.hackatom.blog'),
  Tolik22869HackatomTolik22869HackatomHackatom: load(Tolik22869HackatomTolik22869HackatomHackatom, 'tolik22869.hackatom.hackatom'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
