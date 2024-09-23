import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  saveData(name: string):string{
    console.log(`${name} Saved`);
    return "Saved"
  }

  getUserbyId(id: string){
    console.log(`User with id:${id}`);
    return
  }
}
