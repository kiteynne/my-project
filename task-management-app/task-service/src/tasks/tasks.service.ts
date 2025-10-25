import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(task: { title: string; status: string }) {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  findAll() {
    return this.taskRepository.find();
  }

  update(id: string, task: { title: string; status: string }) {
    return this.taskRepository.update(id, task);
  }

  remove(id: string) {
    return this.taskRepository.delete(id);
  }
}