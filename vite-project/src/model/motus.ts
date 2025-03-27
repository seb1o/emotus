interface Location {
    lat: number
    lng: number
}
  

export  class MotusInterface {

    id!: string;
    note!: string;
    value!: number;
    creationDate?: number;
    location?: Location
    constructor(){
        if(!this.creationDate){
            this.creationDate= Date.now()
        }
    }

    getStringDate() {
        const date = new Date(Date.now()).toLocaleString()
        return date;
    }


   /**
    * The function `orderByDate` sorts an array of objects by their creation date in ascending order.
    * @param {MotusInterface[]} objects - The `objects` parameter is an array of objects that implement
    * the `MotusInterface` interface. The `orderByDate` method sorts these objects based on their
    * `creationDate` property in ascending order. If the `creationDate` property is not present on an
    * object, it is treated as
    * @returns The `orderByDate` method is returning the `objects` array sorted based on the
    * `creationDate` property of the objects. If the `creationDate` is not available (undefined), it is
    * treated as 0 in the comparison.
    */
    static orderByDate(objects: MotusInterface[]) {
        return objects.sort((a, b) => (a.creationDate || 0) - (b.creationDate || 0));
    }
    
    orderEmotionsByValue(){

    }
}