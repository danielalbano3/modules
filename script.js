import printer, { obj1 as papa, obj2 as mama } from "./modules/mod1.js"
import writer, { obj1 as sis, obj2 as bro } from "./modules/mod2.js"

printer(papa)
printer(mama)

writer(sis)
writer(bro)

printer(bro)
printer(sis)

writer(papa)
writer(mama)