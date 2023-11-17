import { createEvent } from "effector";
import { Allergies } from "../model/allergies";

export const allergenAdd = createEvent<number>();

export const allergenDelete = createEvent<number>();

export const selectedAdd = createEvent<Allergies>();

export const selectedDelete = createEvent<Allergies>();
