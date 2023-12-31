export type StatusType = "pending" | "processing" | "success" | "failed";
export type Payment = {
  id: string;
  amount: number;
  status: StatusType;
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "6fb82a19",
    amount: 75,
    status: "success",
    email: "user123@example.com",
  },
  {
    id: "932c548a",
    amount: 50,
    status: "pending",
    email: "john.doe@gmail.com",
  },
  {
    id: "31e7c9fd",
    amount: 200,
    status: "processing",
    email: "jane.smith@example.com",
  },
  {
    id: "845b36e0",
    amount: 150,
    status: "success",
    email: "user456@gmail.com",
  },
  {
    id: "4d3f271c",
    amount: 175,
    status: "pending",
    email: "test@example.com",
  },
  {
    id: "fead9f85",
    amount: 90,
    status: "processing",
    email: "admin@gmail.com",
  },
  {
    id: "76ac18d9",
    amount: 120,
    status: "success",
    email: "customer@example.com",
  },
  {
    id: "58294bc3",
    amount: 60,
    status: "pending",
    email: "user789@gmail.com",
  },
  {
    id: "9cb3e82a",
    amount: 80,
    status: "processing",
    email: "support@example.com",
  },
  {
    id: "a86b791f",
    amount: 300,
    status: "success",
    email: "info@gmail.com",
  },
  {
    id: "62ef45a7",
    amount: 95,
    status: "pending",
    email: "user101@example.com",
  },
  {
    id: "c75d389e",
    amount: 110,
    status: "processing",
    email: "contact@gmail.com",
  },
  {
    id: "e15f6a3b",
    amount: 70,
    status: "success",
    email: "sales@example.com",
  },
  {
    id: "7a3d548c",
    amount: 140,
    status: "pending",
    email: "user202@gmail.com",
  },
  {
    id: "248e9d5a",
    amount: 250,
    status: "processing",
    email: "orders@example.com",
  },
  {
    id: "b65c74d3",
    amount: 135,
    status: "success",
    email: "billing@gmail.com",
  },
  {
    id: "6f1a9a27",
    amount: 115,
    status: "pending",
    email: "user303@example.com",
  },
  {
    id: "872c4f39",
    amount: 180,
    status: "processing",
    email: "hr@example.com",
  },
  {
    id: "3b7d28c5",
    amount: 125,
    status: "success",
    email: "feedback@gmail.com",
  },
  {
    id: "d5fe1c94",
    amount: 160,
    status: "pending",
    email: "user404@example.com",
  },
  {
    id: "9e8a6d4b",
    amount: 220,
    status: "processing",
    email: "marketing@example.com",
  },
  {
    id: "47da37e0",
    amount: 70,
    status: "success",
    email: "accounting@gmail.com",
  },
  {
    id: "f7ea9c51",
    amount: 125,
    status: "pending",
    email: "user505@example.com",
  },
  {
    id: "13bc6d72",
    amount: 195,
    status: "processing",
    email: "tech@example.com",
  },
  {
    id: "b9cc8a85",
    amount: 90,
    status: "success",
    email: "user606@gmail.com",
  },
  {
    id: "6f29d4f1",
    amount: 100,
    status: "pending",
    email: "legal@example.com",
  },
  {
    id: "e1da6d4e",
    amount: 120,
    status: "processing",
    email: "user707@example.com",
  },
  {
    id: "9c6b1a6d",
    amount: 210,
    status: "success",
    email: "info@example.com",
  },
  {
    id: "82e1d5aa",
    amount: 85,
    status: "pending",
    email: "user808@gmail.com",
  },
  {
    id: "4b8d2c7f",
    amount: 115,
    status: "processing",
    email: "support@gmail.com",
  },
  {
    id: "af2e1d48",
    amount: 65,
    status: "success",
    email: "user909@example.com",
  },
  {
    id: "68fd93ac",
    amount: 150,
    status: "pending",
    email: "contact@example.com",
  },
  {
    id: "32e9f74d",
    amount: 180,
    status: "processing",
    email: "sales@gmail.com",
  },
  {
    id: "d9ac47f2",
    amount: 75,
    status: "success",
    email: "user1010@example.com",
  },
  {
    id: "f6d48c72",
    amount: 125,
    status: "pending",
    email: "orders@gmail.com",
  },
  {
    id: "87da1e3b",
    amount: 95,
    status: "processing",
    email: "billing@example.com",
  },
  {
    id: "4b7f3d2c",
    amount: 110,
    status: "success",
    email: "user1111@example.com",
  },
  {
    id: "e1c4d89a",
    amount: 200,
    status: "pending",
    email: "hr@gmail.com",
  },
  {
    id: "9d2e1f6a",
    amount: 140,
    status: "processing",
    email: "feedback@example.com",
  },
  {
    id: "7a3c8e4f",
    amount: 95,
    status: "success",
    email: "user1212@example.com",
  },
  {
    id: "2f8e7b4d",
    amount: 115,
    status: "pending",
    email: "tech@gmail.com",
  },
  {
    id: "c1b4e8d5",
    amount: 175,
    status: "processing",
    email: "user1313@example.com",
  },
  {
    id: "9e4f2d17",
    amount: 80,
    status: "success",
    email: "marketing@gmail.com",
  },
  {
    id: "6f1c8a4b",
    amount: 250,
    status: "pending",
    email: "accounting@example.com",
  },
  {
    id: "e7da9c5f",
    amount: 120,
    status: "processing",
    email: "user1414@example.com",
  },
  {
    id: "4c8e2d7a",
    amount: 70,
    status: "success",
    email: "legal@gmail.com",
  },
  {
    id: "e1b4d8e2",
    amount: 135,
    status: "pending",
    email: "user1515@example.com",
  },
  {
    id: "9e4c2f1a",
    amount: 160,
    status: "processing",
    email: "support@example.com",
  },
  {
    id: "7a3d8e4c",
    amount: 110,
    status: "success",
    email: "user1616@example.com",
  },
  {
    id: "2f8e7d4c",
    amount: 70,
    status: "pending",
    email: "contact@gmail.com",
  },
  {
    id: "c1b4d8e5",
    amount: 140,
    status: "processing",
    email: "sales@example.com",
  },
  {
    id: "9e4c7f1a",
    amount: 125,
    status: "success",
    email: "user1717@example.com",
  },
  {
    id: "6f1c8a4d",
    amount: 200,
    status: "pending",
    email: "info@gmail.com",
  },
  {
    id: "e7d4c5f1",
    amount: 95,
    status: "processing",
    email: "user1818@example.com",
  },
  {
    id: "4c8e2d7f",
    amount: 75,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "e1b4d8c2",
    amount: 150,
    status: "pending",
    email: "user1919@example.com",
  },
  {
    id: "9e4c2f1d",
    amount: 175,
    status: "processing",
    email: "m@example.com",
  },
];
