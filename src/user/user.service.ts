import {NotFoundException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}
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
    async create(data: any){
        

    }
    async update(){
        return
    }
    async delete(){
        return
    }
}
