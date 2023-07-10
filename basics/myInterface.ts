// Interfaces in TypeScript are a way of defining contracts within your code
// They are a powerful way to define custom types, and are often used in scenarios like defining the shape of an object

interface myUser {
  readonly id: number; // The readonly modifier means that the property cannot be re-assigned after initialization
  email: string;
  userId: number;
  googleId?: string; // The '?' denotes an optional property
  startTrial(): string;
  getCoupon(couponName: string): number;
}

// In TypeScript, interfaces are open, meaning they can be extended or added to
interface myUser {
  githubToken: string;
}

const jane: myUser = {
  id: 1,
  email: "jane@hotmail.com",
  userId: 1,
  googleId: "1234567890",
  startTrial: () => "Trial started",
  getCoupon: (couponName: string) => 10,
  githubToken: "github",
};

// 'myAdmin' interface extends 'myUser', meaning it has all properties of 'myUser' plus some additional ones
interface myAdmin extends myUser {
  role: 'admin' | 'superadmin' | 'editor';
}

// Implementing the 'myAdmin' interface
const admin: myAdmin = {
  ...jane,
  role: 'admin',
}

console.log(admin.role); // "admin"

export {}
