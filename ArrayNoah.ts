    class ArrayNoah{

        memory:Map<number,any> = new Map()

        constructor(){
        }
        
        get length(): number {
            return this.memory.size;
        }


        push(a:any){
            this.memory.set(this.memory.size , a)
        }
        
        pop(): any{
            const a:any = this.memory.get(this.memory.size - 1)
            this.memory.delete(this.memory.size - 1)
            return a
        }

        shift():any{
            let newMemory:Map<number,any> = new Map()
            const a:any = this.memory.get(0)
            this.memory.delete(0)
            for(let [key,value] of this.memory){
                newMemory.set(newMemory.size , value)
            }
            this.memory = newMemory
            return a
        }

        unshift(a:any){
            let b:ArrayNoah =new ArrayNoah
            b.memory.set(0,a)
            for(let [key,value] of this.memory){
                b.memory.set(b.memory.size , value)
            }
            this.memory = b.memory
        }

        indexOf(a:any):number{
            for(let [key,value] of this.memory){
                if(value === a){
                    return key
                }
            }
            return -1;
        }
        
        includes(a:any):Boolean{
            for(let [key,value] of this.memory){
                if(value === a){
                    return true
                }
            }
            return false;
        }

        concat(a:ArrayNoah){
            for(const[key,value] of a.memory){
                this.memory.set(this.memory.size, value)    
            }
        }

        filter(callback:any):ArrayNoah{
            let a = new ArrayNoah()
            for(const[key,value] of this.memory){
                if(callback(value)){
                    a.memory.set(a.memory.size , value)
                }
            }
            return a
        }

        find(callback:any):any{
            for(const[key,value] of this.memory){
                if(callback(value)){
                    return value
                }
            }
            return undefined
        }

        findIndex(callback:any):any{
            for(const[key,value] of this.memory){
                if(callback(value)){
                    return key
                }
            }
            return undefined
        }

    }