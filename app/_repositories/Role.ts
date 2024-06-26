import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Role = Exclude<Prisma.PromiseReturnType<typeof RoleRepository.findUnique>, null>;

export namespace RoleRepository {
  export async function findMany() {
    const users = await prisma.role.findMany({
      include: {
        users: true,
      },
    });
    return users;
  }

  export async function findUnique(id: string) {
    return await prisma.role.findUnique({
      include: {
        users: true,
      },
      where: {
        id: id,
      },
    });
  }
}
