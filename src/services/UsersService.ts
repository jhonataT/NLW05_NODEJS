import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository); 
    }   

    async create(email: string){
        // Verificar se user existe

        const userExists = await this.usersRepository.findOne({
            email
        });

        // Se existir, retorna user
        if(userExists) 
            return userExists;

        // Caso não exista, salvar no db
        const user = this.usersRepository.create({
            email
        });
        await this.usersRepository.save(user);
        return user;
    }
}

export { UsersService };