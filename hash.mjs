import bcrypt from "bcryptjs";

const run = async () => {
  const hashed = await bcrypt.hash("password123", 10);
  console.log(hashed);
};

run();

