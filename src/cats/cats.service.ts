import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats = [
    {
      id: 1,
      name: 'Kitty',
      age: 2,
      breed: 'Persian',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(limit): Cat[] {
    // return certain amount of cats
    return this.cats.slice(0, limit);
  }

  findOne(id: number): Cat {
    // find cat by id
    if (id > this.cats.length) {
      return {
        id: null,
        name: 'Not found',
        age: null,
        breed: 'Not found',
      };
    }
    return this.cats.find((cat) => cat.id === id);
  }

  update(id: number, cat: Cat) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);
    if (catIndex === -1) {
      return {
        id: null,
        name: 'Not found',
        age: null,
        breed: 'Not found',
      };
    }
    this.cats.splice(catIndex, 1, cat);
    return 'Cat has been updated!';
  }

  deleteCat(id: number): string | Cat {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);
    if (catIndex === -1) {
      return {
        id: null,
        name: 'Not found',
        age: null,
        breed: 'Not found',
      };
    }
    this.cats.splice(catIndex, 1);
    return 'Cat has been deleted!';
  }
}
