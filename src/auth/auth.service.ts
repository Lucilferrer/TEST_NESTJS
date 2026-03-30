import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import { IUser } from './types/User';
import { NoDataFound, TNoDataFound } from 'src/message';

@Injectable()
export class AuthService {
  // list of users
  private users: IUser[] = [
    {
      id: '1',
      name: 'Tamilan',
      age: 23,
    },
    {
      id: '2',
      name: 'Nandha',
      age: 24,
    },
    {
      id: '3',
      name: 'Nandha Kumar',
      age: 24,
    },
  ];
  constructor(private prisma: PrismaService) {}
  login(body: AuthDTO) {
    console.log('body service', body);
    if (body?.email === 'lmao@gmail.com') {
      return { message: 'you are lmao' };
    }
    return { message: 'You are login' };
  }

  signup(dto: AuthDTO) {
    console.log("dto service: ", dto)
    return { message: 'Horny dog' };
  }

  findUsersByName(nameToBeMatched: string): IUser[] | TNoDataFound {
    if (!nameToBeMatched) {
      return NoDataFound;
    }

    const users = this.users.filter((user) =>
      user.name.toLowerCase().includes(nameToBeMatched.toLowerCase()),
    );

    return users.length ? users : NoDataFound;
  }

  findUserById(id: string): IUser | string {
    // return user with id matching 'id' route param
    // By Default when you get value from query or route
    // param it will be string, But in our case user id is of
    // type number. So we are making a type conversion for id
    const user = this.users.find((user) => user.id === id);
    return !!user ? user : 'no user found';
  }

  findUserByAge(
    age: number,
    sort: 'asc' | 'desc' = 'desc',
  ): IUser[] | string {
    // return user with id matching 'id' route param
    // By Default when you get value from query or route
    // param it will be string, But in our case user id is of
    // type number. So we are making a type conversion for id
    const user = this.users.filter((user: IUser) => user.age === age);
    const sortedUser =
      sort === 'asc'
        ? user?.sort((a, b) => Number(a.id) - Number(b.id))
        : user?.sort((a, b) => Number(a.id) - Number(b.id)).reverse();
    return !!user ? sortedUser : NoDataFound?.message;
  }
}
