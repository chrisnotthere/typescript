function createCourse(): { name: string; price: number } {
  return {
    name: "TypeScript",
    price: 100,
  };
}

const course = createCourse(); // Type inference

console.log(course);

//////////////////////////////

type User = {
  name: string;
  email: string;
  isActive: boolean;
  phoneNumber?: string;
};

function createUser(user: User): void {
  console.log(
    `User '${user.name}' has logged in with email '${user.email}', active status '${user.isActive}', and phone number '${user.phoneNumber || "N/A"}'`
  );
}

createUser({
  name: "Joe",
  email: "j@j.com",
  isActive: false,
});

createUser({
  name: "Ben",
  email: "b@b.com",
  isActive: true,
  phoneNumber: "123-456-7890",
});

//////////////////////////////



export {};
