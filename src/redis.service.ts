import { Injectable } from '@nestjs/common';
import Redis, { Redis as RedisClient } from 'ioredis';
import { redisConfig } from './redis.config';

@Injectable()
export class RedisService {
  private client: RedisClient;

  constructor() {
    // Initialize Redis client
    this.client = new Redis(redisConfig) as RedisClient;
  }

  get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  set(key: string, value: string): Promise<void> {
    return this.client.set(key, value).then(() => {});
  }

  delete(key: string): Promise<void> {
    return this.client.del(key).then(() => {});
  }

  getKeys(pattern: string): Promise<string[]> {
    return this.client.keys(pattern);
  }

  incr(key: string): Promise<number> {
    return this.client.incr(key);
  }
}
