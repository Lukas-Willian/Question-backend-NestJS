import { Test, TestingModule } from '@nestjs/testing';
import { AskService } from './ask.service';

describe('AskService', () => {
  let provider: AskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AskService],
    }).compile();

    provider = module.get<AskService>(AskService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
