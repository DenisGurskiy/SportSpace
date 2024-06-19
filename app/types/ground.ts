import { City } from "./city";
import { Field } from "./field";

export type GroundType = {
  id: number;
  name: string;
  image: string;
  location: City;
  phone: string;
  fields?: Field[];
};
