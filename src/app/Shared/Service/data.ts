export type Project = {
  id: string;
  name: string;
  hoursLogged: number;
};

export type Employee = {
  id: number;
  name: string;
  age: number;
  department: string;
  performanceScores: number[];
  projects: Project[];
  isActive: boolean;
};

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Alice',
    age: 28,
    department: 'Engineering',
    performanceScores: [89, 92, 94],
    projects: [
      { id: 'p1', name: 'Alpha', hoursLogged: 120 },
      { id: 'p2', name: 'Beta', hoursLogged: 80 },
    ],
    isActive: true,
  },
  {
    id: 2,
    name: 'Bob',
    age: 35,
    department: 'HR',
    performanceScores: [78, 85, 80],
    projects: [],
    isActive: true,
  },
  {
    id: 3,
    name: 'Charlie',
    age: 30,
    department: 'Engineering',
    performanceScores: [95, 90, 93],
    projects: [
      { id: 'p1', name: 'Alpha', hoursLogged: 150 },
      { id: 'p3', name: 'Gamma', hoursLogged: 60 },
    ],
    isActive: false,
  },
];
