export const personData: {
  id: number;
  image: string;
  name: string;
  position: string;
}[] = [
  {
    id: 1,
    image: "/person1.jpg",
    name: "Livia Bator",
    position: "CEO",
  },
  {
    id: 2,
    image: "/person2.jpg",
    name: "Randy Press",
    position: "Director",
  },
  {
    id: 3,
    image: "/person3.jpg",
    name: "Workman",
    position: "Designer",
  },
  {
    id: 4,
    image: "/person3.jpg",
    name: "Workman",
    position: "Designer",
  },
  {
    id: 5,
    image: "/person3.jpg",
    name: "Workman",
    position: "Designer",
  },
];

export type PersonData = (typeof personData)[number];
