import z from 'zod';

export const VeryNestedSchema = z
  .object({
    id: z.string(),
  })
  .meta({ id: 'veryNested' });

export const NestedSchema = z
  .object({
    veryNestedObject: VeryNestedSchema,
  })
  .meta({ id: 'nested' });

export const MainSchema = z.object({
  nestedObject: NestedSchema,
});
