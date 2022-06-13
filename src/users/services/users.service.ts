import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput, GetUserArgs } from '../dto';
import { User, UserDocument } from '../models';
import { UsersRepository } from '../repositories';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UsersRepository) {}

    async createUser(createUserData: CreateUserInput) {
        await this.validateCreateUser(createUserData);
        const userDocument = await this.userRepository.create({
            ...createUserData,
            password: await bcrypt.hash(createUserData.password, 10),
        });
        return this.toModel(userDocument);
    }

    private async validateCreateUser(createUserData: CreateUserInput) {
        let foundUser = true;
        try {
            await this.userRepository.findOne({ email: createUserData.email });
            // throw new UnprocessableEntityException('User already exists');
        } catch (error) {
            foundUser = false;
        }

        if (foundUser) {
            throw new UnprocessableEntityException('User with this email already exists');
        }
    }
    async getUser(getUserArgs: GetUserArgs) {
        const userDocument = await this.userRepository.findOne(getUserArgs);
        return this.toModel(userDocument);
    }

    async validateUser(email: string, password: string) {
        const userDocument = await this.userRepository.findOne({ email });
        const passwordIsValid = await bcrypt.compare(password, userDocument.password);

        if (!passwordIsValid) {
            throw new UnprocessableEntityException('Invalid credentials');
        }

        return this.toModel(userDocument);
    }

    private toModel(userDocument: UserDocument): User {
        return {
            _id: userDocument._id.toHexString(),
            email: userDocument.email,
        };
    }
}
