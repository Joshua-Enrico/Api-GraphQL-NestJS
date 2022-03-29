import {NotFoundException, Injectable, UnauthorizedException } from '@nestjs/common';
import { EncryptionsService } from 'src/commons/encryptions/encryptions.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserDto } from './dto/create.user.dto';
import { DeleteUserDto } from './dto/delete.user.dto';
import { LoginDto } from './dto/login.user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService, 
      private readonly esncryptionService: EncryptionsService) {}
    async getMany(){
        return await this.prismaService.user.findMany(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                }
            }
        )
    }

    async get(id: string){
        return await this.prismaService.user.findUnique({
            where: {
                id: id
            },
        })
            .then(user => {
                if(user){
                    return user
                }else{
                    throw new NotFoundException('User not found')
                }
            })
            .catch(err => {
                throw err
            })
    }
    async create(data: CreateUserDto){

        return await this.prismaService.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: this.esncryptionService.encryptPwd(data.password),
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        })
            .then(user => {
                if(user){
                    return user
                }else{
                    throw new NotFoundException('Cannot been created')
                }
            })
            .catch(err => {
                throw err
            })

    }

    async update(){
        return
    }
    async delete(data: DeleteUserDto){
        return await this.prismaService.user.delete({
            where: {
                id: data.id
            },
            select: {
                id: true,
            }
        })
            .then(user => {
                if(user){
                    console.log(user)
                    return {  deleted: true }
                }else{
                    console.log('User not found')
                    throw new NotFoundException('User not found')
                }
            })
            .catch(err => {
                if (err.code === 'P2025') {
                    throw new NotFoundException('User not found')
                } else {
                    throw err
                }
            })
    }

    async login(data: LoginDto){

        return await this.prismaService.user.findMany({
            where: {
                email: data.email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                createdAt: true,
                updatedAt: true,
            }
        })
            .then((user : any) => {
                if(user){
                    if(this.esncryptionService.comparePwd(user[0].password, data.password) === true){
                        const token = this.esncryptionService.generateToken(user[0].id)
                        user[0].token = token
                        return user[0]
                    }else{
                        throw new UnauthorizedException('Password is incorrect')
                    }
                }else{
                    throw new UnauthorizedException('Wrong email')
                }
            })
            .catch(err => {
                throw err
            })
    }

}
