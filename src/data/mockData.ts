export const salesData = [
  { name: "10 April", value: 2300 },
  { name: "11 April", value: 3000 },
  { name: "11 April", value: 1900 },
  { name: "12 April", value: 2800 },
  { name: "12 April", value: 3800 },
  { name: "13 April", value: 3000 },
  { name: "13 April", value: 3500 },
  { name: "14 April", value: 3100 },
  { name: "14 April", value: 2500 },
  { name: "15 April", value: 2000 },
  { name: "15 April", value: 3500 },
];

export const goalsData = [
  { name: "Achieved", value: 65, fill: "#3b82f6" },
  { name: "Remaining", value: 35, fill: "#e5e7eb" },
];

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  time: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Kevin S",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment:
      '"Super fast shipping and very secure packaging! The Furycube G11 mouse I ordered works perfectly."',
    time: "5 minutes ago",
  },
  {
    id: 2,
    name: "Rina T",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    comment: "",
    time: "10 minutes ago",
  },
];

export const heatmapData = [
  { name: "Laptop", data: [1, 1, 2, 1, 1, 2, 1] },
  { name: "Monitor", data: [1, 1, 2, 1, 3, 3, 3] },
  { name: "Audio", data: [1, 2, 3, 2, 3, 3, 3] },
  { name: "Sound", data: [1, 2, 2, 3, 3, 2, 2] },
  { name: "keyboard", data: [1, 3, 3, 2, 2, 1, 3] },
  { name: "Mouse", data: [2, 2, 2, 3, 3, 2, 1] },
];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
