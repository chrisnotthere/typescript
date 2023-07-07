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
  readonly _id: string;
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
  _id: "123",
  name: "Joe",
  email: "j@j.com",
  isActive: false,
});

createUser({
  _id: "456",
  name: "Ben",
  email: "b@b.com",
  isActive: true,
  phoneNumber: "123-456-7890",
});


let myUser: User = {
  _id: "742",
  name: "Billy",
  email: "billy@b.com",
  isActive: true,
};

myUser.name = "Billy Bob";
// myUser._id = '111'; // cannot change _id because it is readonly
console.log(myUser._id);
console.log(myUser?.phoneNumber); // optional chaining

//////////////////////////////

type cardNumber = {
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

const card: cardDetails = {
  cardNumber: '1234 5678 9012 3456',
  cardDate: '12/23',
  cvv: 123
}



export {};
