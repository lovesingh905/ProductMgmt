import{InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
        let bookdetails=[
            {id:100,name:'angular',category:'framework', rating: 1},
            {id:101,name:'php',category:'codigniter', rating: 2},
            {id:102,name:'Dotnet',category:'MVC', rating: 3},
            {id:103,name:'java',category:'hibernet', rating: 4}
            
        ];
      return  {books:bookdetails};
        }
    }
