import mockUsers from "../data/mockUsers";

const STORAGE_KEY = "users";

class UserService {
  constructor() {
    this.initializeStorage();
  }

  initializeStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUsers));
    }
  }

  getAllUsers() {
    try {
      const users = localStorage.getItem(STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error("Error retrieving users:", error);
      return [];
    }
  }

  createUser(newUser) {
    try {
      const users = this.getAllUsers();
      users.push(newUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      return { success: true, user: newUser };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, error: error.message };
    }
  }

  getUserByEmail(email) {
    const users = this.getAllUsers();
    return users.find(user => user.email === email);
  }

  deleteUser(email) {
    try {
      const users = this.getAllUsers();
      const filtered = users.filter(user => user.email !== email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      return { success: true };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { success: false, error: error.message };
    }
  }

  updateUser(email, updatedUser) {
    try {
      const users = this.getAllUsers();
      const index = users.findIndex(user => user.email === email);
      if (index === -1) {
        return { success: false, error: "User not found" };
      }
      users[index] = { ...users[index], ...updatedUser };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      return { success: true, user: users[index] };
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: false, error: error.message };
    }
  }

  clearAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      this.initializeStorage();
      return { success: true };
    } catch (error) {
      console.error("Error clearing users:", error);
      return { success: false, error: error.message };
    }
  }
}

export default new UserService();
