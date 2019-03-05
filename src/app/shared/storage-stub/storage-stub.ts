export class StorageStub {


    constructor() {

    }

    data = {};

    set(key: string, value: any) {

      console.log('item a ser setado storage-stub: \'' + key + '\'');
      console.log(value);

      const promise = new Promise((resolve, reject) => {

        this.data[key] = value;
        resolve(value);
      });

      return promise;
    }

    get(key: string) {

      console.log('data no storage-stub: ');
      console.log(this.data);

        const promise = new Promise((resolve, reject) => {

            const item = this.data[key];
            resolve(item);
          });

          return promise;
    }

    remove(key: string) {

        const promise = new Promise((resolve, reject) => {

            const item = this.data[key];
            delete this.data[key];
            resolve(item);
          });

          return promise;
    }
}
