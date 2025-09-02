import { createZodDto } from "nestjs-zod";
import { MainSchema } from "./schemas";

export class MainDto extends createZodDto(MainSchema) {}