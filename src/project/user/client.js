import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
// export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const BASE_API = "https://project-web23.onrender.com"; 
//export const BASE_API = "http://localhost:4000"

export const USERS_API = `${BASE_API}/api/users`;

// export const signin = async (credentials) => {
//   const response = await request.post(`${USERS_API}/signin`, credentials);
//   return response.data; };

export const signin = async (credentials) => {
  try {
    const response = await request.post(`${USERS_API}/signin`, credentials);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};



export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

// export const deleteUser = async (user) => {
//   const response = await request.delete(`${USERS_API}/${user._id}`);
//   return response.data;
// };


export const deleteUser = async (user) => {
  try {
    // 如果用户是卖家（SELLER），先删除其在sellermeals中的数据
    if (user.role === 'SELLER') {
      await deleteSeller(user);
    }

    // 然后删除用户本身
    const response = await request.delete(`${USERS_API}/${user._id}`);
    return response.data;
  } catch (error) {
    console.error("Error in deleteUser function:", error);
    // 根据需要处理错误
    throw error;
  }
};

export const deleteSeller = async (user) => {
  const response = await request.delete(`https://project-web23.onrender.com/api/sellermeals/${user.username}`);
  return response.data;
};

export const signup = async (user) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};


